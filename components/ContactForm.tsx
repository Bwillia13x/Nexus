'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { LoadingButton } from './Loading';
import { inquirySchema, InquiryPayload } from '@/lib/validation/contact';
import { CONTACT_CONTENT } from '@/app/contact/_content';
import Link from 'next/link';

type ContactFormData = InquiryPayload;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(
      inquirySchema
    ) as unknown as Resolver<ContactFormData>,
    mode: 'onChange',
  });

  const watchedFields = watch();

  const onSubmit: SubmitHandler<ContactFormData> = async data => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending your message...');

    try {
      // Collect additional metadata
      const urlParams = new URLSearchParams(window.location.search);
      const enhancedData = {
        ...data,
        pilotInterest: urlParams.get('pilot') || undefined,
        referrerUrl: document.referrer || undefined,
        utmSource: urlParams.get('utm_source') || undefined,
        utmCampaign: urlParams.get('utm_campaign') || undefined,
        utmMedium: urlParams.get('utm_medium') || undefined,
        pagePath: window.location.pathname,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enhancedData),
      });

      const result = await res.json();

      if (res.ok && result.ok) {
        // Fire analytics event
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'lead_submit_success',
            form_location: window.location.pathname,
            lead_data: {
              industry: data.industry,
              team_size: data.teamSize,
              budget_range: data.budgetRange,
              urgency: data.projectUrgency,
              tool_count: data.currentTools?.length || 0,
            },
          });
        }

        toast.success("Thanks! We'll get back to you the same business day.", {
          id: loadingToast,
        });
        reset();
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        toast.error(
          result.error || 'Failed to send message. Please try again.',
          {
            id: loadingToast,
          }
        );
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(
        'Network error. Please check your connection and try again.',
        {
          id: loadingToast,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = isValid;

  return (
    <section className="section">
      <div className="container-wide">
        {/* Header removed; simplified for homepage (parent section supplies title/intro) */}

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-glass lg:col-span-3 space-y-6 relative overflow-hidden group"
            noValidate
            role="form"
            aria-label="Contact form"
            {...(isSubmitting ? { 'aria-busy': 'true' } : {})}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              {/* Honeypot field – hidden from users, targeted by bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypot" className="sr-only">
                  Leave this field empty
                </label>
                <input
                  id="honeypot"
                  {...register('honeypot')}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Full Name *
                  </label>
                  <input
                    {...register('fullName')}
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    inputMode="text"
                    autoCapitalize="words"
                    spellCheck={false}
                    enterKeyHint="next"
                    required
                    className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                      errors.fullName
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                        : 'border-glass-border hover:border-primary/30'
                    }`}
                    placeholder="Enter your full name"
                    aria-describedby={
                      errors.fullName ? 'fullName-error' : undefined
                    }
                    {...(errors.fullName ? { 'aria-invalid': true } : {})}
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      role="alert"
                    >
                      <span className="text-lg">⚠️</span>{' '}
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    enterKeyHint="next"
                    required
                    className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 ${
                      errors.email
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                        : 'border-glass-border hover:border-primary/30'
                    }`}
                    placeholder="your.email@company.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...(errors.email ? { 'aria-invalid': true } : {})}
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

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Company
                  </label>
                  <input
                    {...register('company')}
                    id="company"
                    type="text"
                    autoComplete="organization"
                    inputMode="text"
                    autoCapitalize="words"
                    spellCheck={false}
                    enterKeyHint="next"
                    className="w-full px-4 py-4 rounded-xl border border-glass-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary hover:border-primary/30 transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Industry
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
                    {...(errors.industry ? { 'aria-invalid': true } : {})}
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
                      <span className="text-lg">⚠️</span>{' '}
                      {errors.industry.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="teamSize"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Team Size
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
                    {...(errors.teamSize ? { 'aria-invalid': true } : {})}
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
                      <span className="text-lg">⚠️</span>{' '}
                      {errors.teamSize.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 text-ink">
                    Current Tools (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      'Google Workspace',
                      'Microsoft 365',
                      'QuickBooks',
                      'Shopify',
                      'Stripe',
                      'Square',
                      'Slack',
                      'Teams',
                      'HubSpot',
                      'Make.com',
                    ].map(tool => (
                      <label
                        key={tool}
                        className="flex items-center gap-2 p-3 rounded-lg border border-glass-border bg-white/30 hover:bg-white/50 transition-colors cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={tool}
                          {...register('currentTools')}
                          className="w-4 h-4 text-primary border-glass-border rounded focus:ring-primary/50"
                        />
                        <span className="text-sm text-ink">{tool}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="dataSensitivity"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Data Sensitivity
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
                      errors.dataSensitivity
                        ? 'dataSensitivity-error'
                        : undefined
                    }
                    {...(errors.dataSensitivity
                      ? { 'aria-invalid': true }
                      : {})}
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

                <div>
                  <label
                    htmlFor="budgetRange"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Budget Range
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
                    {...(errors.budgetRange ? { 'aria-invalid': true } : {})}
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

                <div>
                  <label
                    htmlFor="projectUrgency"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Project Urgency
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
                    {...(errors.projectUrgency ? { 'aria-invalid': true } : {})}
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

                <div className="md:col-span-2">
                  <label
                    htmlFor="vision"
                    className="block text-sm font-medium mb-2 text-ink"
                  >
                    Your Vision *
                  </label>
                  <textarea
                    {...register('vision')}
                    id="vision"
                    rows={5}
                    inputMode="text"
                    autoCapitalize="sentences"
                    spellCheck={true}
                    enterKeyHint="send"
                    required
                    className={`w-full px-4 py-4 rounded-xl border bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none ${
                      errors.vision
                        ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
                        : 'border-glass-border hover:border-primary/30'
                    }`}
                    placeholder="Tell us about your project, challenges, or how you'd like AI to transform your business..."
                    aria-describedby={
                      errors.vision ? 'vision-error' : 'vision-help'
                    }
                    {...(errors.vision ? { 'aria-invalid': true } : {})}
                  />
                  <p id="vision-help" className="mt-1 text-xs text-muted">
                    Be as specific as possible about your goals and challenges
                  </p>
                  {errors.vision && (
                    <p
                      id="vision-error"
                      className="mt-2 text-sm text-red-600 flex items-center gap-1"
                      role="alert"
                    >
                      <span className="text-lg">⚠️</span>{' '}
                      {errors.vision.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-4">
                {/* Polite live region for submission status */}
                <div aria-live="polite" className="sr-only">
                  {isSubmitting ? 'Submitting your message…' : ''}
                </div>
                <LoadingButton
                  type="submit"
                  loading={isSubmitting}
                  disabled={!isFormValid || isSubmitting}
                  className="btn-primary w-full text-lg font-semibold disabled:hover:translate-y-0 disabled:hover:shadow-e3"
                  aria-describedby="submit-button-help"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⚡</span> Sending Your
                      Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      🚀 Send Message
                    </span>
                  )}
                </LoadingButton>
                <p
                  id="submit-button-help"
                  className="mt-2 text-xs text-center text-muted"
                >
                  We'll respond the same business day
                </p>
                <p className="mt-3 text-xs text-center text-muted">
                  Prefer to book a call?{' '}
                  <Link href="/book" className="link">
                    Open scheduler →
                  </Link>
                </p>
              </div>
            </div>
          </form>

          {/* Contact Info Sidebar (consolidated) */}
          <div className="lg:col-span-2">
            <div className="card-glass p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">📞</span>
                Prefer to book a call?
              </h3>
              <p className="text-sm text-muted mb-4">
                Schedule a 15–30 min intro. Same business day response.
              </p>
              <div className="mb-6">
                <Link href="/book" className="btn-secondary w-full text-center">
                  Open scheduler
                </Link>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-ink/80">
                  What to expect
                </h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">✅</span>
                    <span>Founder-led builds with clear accountability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">✅</span>
                    <span>
                      Calgary-first, privacy-aware approach (PIPEDA/PIPA)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">✅</span>
                    <span>Fixed-scope pilots with measurable outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-0.5">✅</span>
                    <span>Plain-English docs and handoff</span>
                  </li>
                </ul>
                <p className="text-xs text-muted mt-4">
                  We follow PIPEDA and Alberta's PIPA norms. NDA on request. We
                  do not train models on your private data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy footnote */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted">
            We follow PIPEDA and Alberta's PIPA norms. NDA on request. We do not
            train models on your private data.
          </p>
        </div>
      </div>
    </section>
  );
}
