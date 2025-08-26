'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import type { Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inquirySchema, InquiryPayload } from '@/lib/validation/contact';
import { CONTACT_CONTENT } from '../_content';
import { SuccessState } from './SuccessState';
import {
  trackInquirySuccess,
  trackInquiryFailure,
  trackRoiParamsAttached,
} from '@/lib/analytics';

const AUTOSAVE_KEY = 'nexusai:inquiry:v1';

interface InquiryFormProps {
  onSuccess?: () => void;
}

export function InquiryForm({ onSuccess }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mountTime] = useState(Date.now());
  const [hasRoiParams, setHasRoiParams] = useState(false);

  const form = useForm<InquiryPayload>({
    resolver: zodResolver(inquirySchema) as unknown as Resolver<InquiryPayload>,
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      industry: undefined,
      teamSize: undefined,
      currentTools: [],
      dataSensitivity: undefined,
      budgetRange: undefined,
      projectUrgency: undefined,
      vision: '',
      roi: {},
      utm: {},
      hp: '',
      tts: 0,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
    setValue,
    watch,
    control,
  } = form;

  // Load autosaved data on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(AUTOSAVE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Only restore basic fields, not system fields
        const restoreFields = ['fullName', 'email', 'company', 'vision'];
        restoreFields.forEach(field => {
          if (parsed[field]) {
            setValue(field as keyof InquiryPayload, parsed[field]);
          }
        });
      }
    } catch (error) {
      console.warn('Failed to load autosaved data:', error);
    }
  }, [setValue]);

  // Autosave on field changes
  const watchedFields = watch();
  useEffect(() => {
    if (watchedFields.fullName || watchedFields.email || watchedFields.vision) {
      const dataToSave = {
        fullName: watchedFields.fullName,
        email: watchedFields.email,
        company: watchedFields.company,
        vision: watchedFields.vision,
        timestamp: Date.now(),
      };
      localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(dataToSave));
    }
  }, [
    watchedFields.fullName,
    watchedFields.email,
    watchedFields.company,
    watchedFields.vision,
  ]);

  // Check for ROI parameters in URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const roiParams = {
        h: urlParams.get('h') ? Number(urlParams.get('h')) : undefined,
        r: urlParams.get('r') ? Number(urlParams.get('r')) : undefined,
        w: urlParams.get('w') ? Number(urlParams.get('w')) : undefined,
        p: urlParams.get('p') ? Number(urlParams.get('p')) : undefined,
      };

      const hasParams = Object.values(roiParams).some(v => v !== undefined);
      if (hasParams) {
        setValue('roi', roiParams);
        setHasRoiParams(true);
        trackRoiParamsAttached(roiParams);
      }

      // Extract UTM parameters
      const utmParams: Record<string, string> = {};
      [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
      ].forEach(param => {
        const value = urlParams.get(param);
        if (value) utmParams[param] = value;
      });
      if (Object.keys(utmParams).length > 0) {
        setValue('utm', utmParams);
      }
    }
  }, [setValue]);

  const onSubmit: SubmitHandler<InquiryPayload> = async data => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Calculate time-to-submit
      const timeToSubmit = Math.floor((Date.now() - mountTime) / 1000);
      data.tts = timeToSubmit;

      // Collect additional metadata
      data.referrerUrl = document.referrer || undefined;
      data.pagePath = window.location.pathname;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        // Clear autosaved data
        localStorage.removeItem(AUTOSAVE_KEY);

        // Track success
        trackInquirySuccess(
          data.currentTools?.length || 0,
          data.budgetRange,
          data.industry
        );

        setShowSuccess(true);
        if (onSuccess) {
          onSuccess();
        }
      } else {
        trackInquiryFailure(response.status, result.error);
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      trackInquiryFailure(0, 'Network error');
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearRoiParams = () => {
    setValue('roi', {});
    setHasRoiParams(false);
    // Update URL without ROI params
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      ['h', 'r', 'w', 'p'].forEach(param => url.searchParams.delete(param));
      window.history.replaceState({}, '', url.toString());
    }
  };

  if (showSuccess) {
    return <SuccessState />;
  }

  const canSubmit = isValid && isDirty && !isSubmitting;

  return (
    <div className="card-glass p-6 md:p-7 relative overflow-hidden group">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* ROI Parameters Info */}
        {hasRoiParams && (
          <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-xl">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2">
                <span className="text-lg mt-0.5">📊</span>
                <div>
                  <p className="font-medium text-sm">
                    {CONTACT_CONTENT.roi.info}
                  </p>
                  <p className="text-xs text-muted mt-1">
                    These values will be included in your inquiry.
                  </p>
                </div>
              </div>
              <button
                onClick={clearRoiParams}
                className="text-xs text-muted hover:text-primary transition-colors underline underline-offset-2"
              >
                {CONTACT_CONTENT.roi.clear}
              </button>
            </div>
          </div>
        )}

        {/* Form Header */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
            {CONTACT_CONTENT.form.title}
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            {CONTACT_CONTENT.form.subtitle}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div
            className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
            role="alert"
          >
            <div className="flex items-start gap-2">
              <span className="text-lg">⚠️</span>
              <p className="text-sm text-red-600">{error}</p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          role="form"
          aria-label="Contact form"
        >
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp" className="sr-only">
              Leave this field empty
            </label>
            <input
              id="hp"
              {...register('hp')}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="md:col-span-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium mb-2 text-ink"
              >
                {CONTACT_CONTENT.form.fields.fullName.label} *
              </label>
              <input
                {...register('fullName')}
                id="fullName"
                type="text"
                autoComplete="name"
                className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                  errors.fullName
                    ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                    : 'border-glass-border hover:border-primary/30'
                }`}
                placeholder={CONTACT_CONTENT.form.fields.fullName.placeholder}
                aria-describedby={
                  errors.fullName ? 'fullName-error' : undefined
                }
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && (
                <p
                  id="fullName-error"
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                >
                  <span className="text-lg">⚠️</span> {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-ink"
              >
                {CONTACT_CONTENT.form.fields.email.label} *
              </label>
              <input
                {...register('email')}
                id="email"
                type="email"
                autoComplete="email"
                className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                  errors.email
                    ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                    : 'border-glass-border hover:border-primary/30'
                }`}
                placeholder={CONTACT_CONTENT.form.fields.email.placeholder}
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                >
                  <span className="text-lg">⚠️</span> {errors.email.message}
                </p>
              )}
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-2 text-ink"
              >
                {CONTACT_CONTENT.form.fields.company.label}
              </label>
              <input
                {...register('company')}
                id="company"
                type="text"
                autoComplete="organization"
                className="w-full px-4 py-4 rounded-xl border border-glass-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary hover:border-primary/30 transition-all duration-200"
                placeholder={CONTACT_CONTENT.form.fields.company.placeholder}
              />
            </div>

            {/* Industry */}
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium mb-2 text-ink"
              >
                {CONTACT_CONTENT.form.industry.label} *
              </label>
              <select
                {...register('industry')}
                id="industry"
                className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary hover:border-primary/30 transition-all duration-200 ${
                  errors.industry
                    ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                    : 'border-glass-border'
                }`}
                aria-describedby={
                  errors.industry ? 'industry-error' : undefined
                }
                aria-invalid={!!errors.industry}
              >
                <option value="">
                  {CONTACT_CONTENT.form.industry.placeholder}
                </option>
                {CONTACT_CONTENT.form.industry.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.industry && (
                <p
                  id="industry-error"
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                >
                  <span className="text-lg">⚠️</span> {errors.industry.message}
                </p>
              )}
            </div>

            {/* Team Size */}
            <div>
              <label
                htmlFor="teamSize"
                className="block text-sm font-medium mb-2 text-ink"
              >
                {CONTACT_CONTENT.form.teamSize.label} *
              </label>
              <select
                {...register('teamSize')}
                id="teamSize"
                className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary hover:border-primary/30 transition-all duration-200 ${
                  errors.teamSize
                    ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                    : 'border-glass-border'
                }`}
                aria-describedby={
                  errors.teamSize ? 'teamSize-error' : undefined
                }
                aria-invalid={!!errors.teamSize}
              >
                <option value="">
                  {CONTACT_CONTENT.form.teamSize.placeholder}
                </option>
                {CONTACT_CONTENT.form.teamSize.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.teamSize && (
                <p
                  id="teamSize-error"
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                >
                  <span className="text-lg">⚠️</span> {errors.teamSize.message}
                </p>
              )}
            </div>

            {/* Current Tools */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2 text-ink">
                {CONTACT_CONTENT.form.tools.label}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Controller
                  name="currentTools"
                  control={control}
                  render={({ field }) => (
                    <>
                      {CONTACT_CONTENT.form.tools.options.map(tool => (
                        <label
                          key={tool}
                          className={`flex items-center gap-2 p-3 rounded-lg border border-glass-border bg-white/30 hover:bg-white/50 transition-colors cursor-pointer ${
                            field.value?.includes(tool)
                              ? 'bg-primary/10 border-primary/30'
                              : ''
                          }`}
                        >
                          <input
                            type="checkbox"
                            value={tool}
                            checked={field.value?.includes(tool) || false}
                            onChange={e => {
                              const value = e.target.value;
                              const current = field.value || [];
                              if (e.target.checked) {
                                field.onChange([...current, value]);
                              } else {
                                field.onChange(
                                  current.filter(t => t !== value)
                                );
                              }
                            }}
                            className="w-4 h-4 text-primary border-glass-border rounded focus:ring-primary/50"
                          />
                          <span className="text-sm text-ink">{tool}</span>
                        </label>
                      ))}
                    </>
                  )}
                />
              </div>
            </div>

            {/* Data Sensitivity */}
            <div>
              <label
                htmlFor="dataSensitivity"
                className="block text-sm font-medium mb-2 text-ink"
              >
                {CONTACT_CONTENT.form.sensitivity.label} *
              </label>
              <select
                {...register('dataSensitivity')}
                id="dataSensitivity"
                className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary hover:border-primary/30 transition-all duration-200 ${
                  errors.dataSensitivity
                    ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                    : 'border-glass-border'
                }`}
                aria-describedby={
                  errors.dataSensitivity ? 'dataSensitivity-error' : undefined
                }
                aria-invalid={!!errors.dataSensitivity}
              >
                <option value="">
                  {CONTACT_CONTENT.form.sensitivity.placeholder}
                </option>
                {CONTACT_CONTENT.form.sensitivity.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.dataSensitivity && (
                <p
                  id="dataSensitivity-error"
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                >
                  <span className="text-lg">⚠️</span>{' '}
                  {errors.dataSensitivity.message}
                </p>
              )}
            </div>

            {/* Budget Range */}
            <div>
              <label
                htmlFor="budgetRange"
                className="block text-sm font-medium mb-2 text-ink"
              >
                {CONTACT_CONTENT.form.budget.label} *
              </label>
              <select
                {...register('budgetRange')}
                id="budgetRange"
                className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary hover:border-primary/30 transition-all duration-200 ${
                  errors.budgetRange
                    ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                    : 'border-glass-border'
                }`}
                aria-describedby={
                  errors.budgetRange ? 'budgetRange-error' : undefined
                }
                aria-invalid={!!errors.budgetRange}
              >
                <option value="">
                  {CONTACT_CONTENT.form.budget.placeholder}
                </option>
                {CONTACT_CONTENT.form.budget.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.budgetRange && (
                <p
                  id="budgetRange-error"
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                >
                  <span className="text-lg">⚠️</span>{' '}
                  {errors.budgetRange.message}
                </p>
              )}
            </div>

            {/* Project Urgency */}
            <div>
              <label
                htmlFor="projectUrgency"
                className="block text-sm font-medium mb-2 text-ink"
              >
                {CONTACT_CONTENT.form.urgency.label} *
              </label>
              <select
                {...register('projectUrgency')}
                id="projectUrgency"
                className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary hover:border-primary/30 transition-all duration-200 ${
                  errors.projectUrgency
                    ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                    : 'border-glass-border'
                }`}
                aria-describedby={
                  errors.projectUrgency ? 'projectUrgency-error' : undefined
                }
                aria-invalid={!!errors.projectUrgency}
              >
                <option value="">
                  {CONTACT_CONTENT.form.urgency.placeholder}
                </option>
                {CONTACT_CONTENT.form.urgency.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.projectUrgency && (
                <p
                  id="projectUrgency-error"
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                >
                  <span className="text-lg">⚠️</span>{' '}
                  {errors.projectUrgency.message}
                </p>
              )}
            </div>

            {/* Vision */}
            <div className="md:col-span-2">
              <label
                htmlFor="vision"
                className="block text-sm font-medium mb-2 text-ink"
              >
                {CONTACT_CONTENT.form.vision.label} *
              </label>
              <textarea
                {...register('vision')}
                id="vision"
                rows={5}
                className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none ${
                  errors.vision
                    ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                    : 'border-glass-border hover:border-primary/30'
                }`}
                placeholder={CONTACT_CONTENT.form.vision.placeholder}
                aria-describedby={
                  errors.vision ? 'vision-error' : 'vision-help'
                }
                aria-invalid={!!errors.vision}
              />
              <p id="vision-help" className="mt-1 text-xs text-muted">
                {CONTACT_CONTENT.form.vision.help}
              </p>
              {errors.vision && (
                <p
                  id="vision-error"
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                  role="alert"
                >
                  <span className="text-lg">⚠️</span> {errors.vision.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={!canSubmit}
              className="btn-primary w-full text-lg font-semibold disabled:hover:translate-y-0 disabled:hover:shadow-lg"
              aria-describedby="submit-button-help"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⚡</span>
                  {CONTACT_CONTENT.form.submit.loading}
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  🚀 {CONTACT_CONTENT.form.submit.label}
                </span>
              )}
            </button>
            <p
              id="submit-button-help"
              className="mt-2 text-xs text-center text-muted"
            >
              {CONTACT_CONTENT.form.submit.help}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
