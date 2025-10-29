'use client';

import { useMemo, useRef, useState } from 'react';
import toast from 'react-hot-toast';

interface FormState {
  fullName: string;
  email: string;
  company: string;
  vision: string;
  honeypot: string;
}

const defaults = {
  industry: 'Other' as const,
  teamSize: '1–5' as const,
  dataSensitivity: 'Low' as const,
  budgetRange: '<$5k' as const,
  projectUrgency: 'Exploring' as const,
};

export function SimpleContactForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    company: '',
    vision: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const startedAt = useRef<number>(Date.now());

  const canSubmit = useMemo(() => {
    return (
      form.fullName.trim().length >= 2 &&
      /.+@.+/.test(form.email) &&
      form.vision.trim().length >= 20 &&
      !isSubmitting
    );
  }, [form.fullName, form.email, form.vision, isSubmitting]);

  const handleChange = (key: keyof FormState, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your name.';
    }
    if (!/.+@.+/.test(form.email)) {
      nextErrors.email = 'Use a work email so we can reply quickly.';
    }
    if (form.vision.trim().length < 20) {
      nextErrors.vision = 'Share a sentence or two about the outcome you want.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending your message...');

    const secondsSinceStart = Math.max(
      5,
      Math.round((Date.now() - startedAt.current) / 1000)
    );

    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      industry: defaults.industry,
      teamSize: defaults.teamSize,
      currentTools: [],
      dataSensitivity: defaults.dataSensitivity,
      budgetRange: defaults.budgetRange,
      projectUrgency: defaults.projectUrgency,
      vision: form.vision.trim(),
      roi: {},
      utm: {},
      hp: form.honeypot,
      tts: secondsSinceStart,
      pilotInterest: undefined,
      referrerUrl:
        typeof document !== 'undefined' ? document.referrer : undefined,
      utmSource: undefined,
      utmCampaign: undefined,
      utmMedium: undefined,
      pagePath:
        typeof window !== 'undefined' ? window.location.pathname : undefined,
      honeypot: form.honeypot,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.ok) {
        toast.success('Thanks! We’ll reply the same business day.', {
          id: loadingToast,
        });
        setIsComplete(true);
        setForm({
          fullName: '',
          email: '',
          company: '',
          vision: '',
          honeypot: '',
        });
        return;
      }

      toast.error(
        result?.error || 'Something went wrong. Please try again in a moment.',
        { id: loadingToast }
      );
    } catch (error) {
      console.error('SimpleContactForm error', error);
      toast.error('Network error. Please try again.', { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <div className="card-glass glass-liquid p-8 text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white">
          ✓
        </div>
        <h3 className="text-2xl font-semibold text-ink">Message sent!</h3>
        <p className="text-muted-foreground">
          We’ll reply from a real person with next steps and a short timeline.
        </p>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => {
            setIsComplete(false);
            startedAt.current = Date.now();
          }}
        >
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form
      className="card-glass glass-liquid space-y-6 p-6 md:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="quick-fullName"
            className="block text-sm font-medium text-ink"
          >
            Full name
          </label>
          <input
            id="quick-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={event => handleChange('fullName', event.target.value)}
            className="mt-1 w-full rounded-xl border border-glass-border bg-white/70 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="Alex Martinez"
            aria-invalid={errors.fullName ? 'true' : undefined}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="quick-email"
            className="block text-sm font-medium text-ink"
          >
            Work email
          </label>
          <input
            id="quick-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={event => handleChange('email', event.target.value)}
            className="mt-1 w-full rounded-xl border border-glass-border bg-white/70 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="you@company.com"
            aria-invalid={errors.email ? 'true' : undefined}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="quick-company"
            className="block text-sm font-medium text-ink"
          >
            Company (optional)
          </label>
          <input
            id="quick-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={event => handleChange('company', event.target.value)}
            className="mt-1 w-full rounded-xl border border-glass-border bg-white/70 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="PrairieSignal"
          />
        </div>

        <div>
          <label
            htmlFor="quick-vision"
            className="block text-sm font-medium text-ink"
          >
            What outcome are you after?
          </label>
          <textarea
            id="quick-vision"
            name="vision"
            rows={4}
            value={form.vision}
            onChange={event => handleChange('vision', event.target.value)}
            className="mt-1 w-full rounded-xl border border-glass-border bg-white/70 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            placeholder="We want to automate weekly reporting and free 8 hours of ops time."
            aria-invalid={errors.vision ? 'true' : undefined}
          />
          <p className="mt-1 text-xs text-muted-foreground">
            A couple of sentences helps us prep useful ideas for the call.
          </p>
          {errors.vision && (
            <p className="mt-1 text-sm text-red-600">{errors.vision}</p>
          )}
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="quick-honeypot" className="sr-only">
            Leave blank
          </label>
          <input
            id="quick-honeypot"
            tabIndex={-1}
            autoComplete="off"
            value={form.honeypot}
            onChange={event => handleChange('honeypot', event.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary w-full text-base"
        disabled={!canSubmit}
      >
        {isSubmitting ? 'Sending…' : 'Book a quick intro'}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        We’ll follow up with a short agenda and only book a call if it’s a fit.
      </p>
    </form>
  );
}
