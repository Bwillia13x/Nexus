'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  trackInquiryFailure,
  trackInquirySuccess,
  trackScheduleClick,
} from '@/lib/analytics';

export function SimpleBookingForm() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [touched, setTouched] = React.useState(false);
  const mountedAtRef = React.useRef<number>(Date.now());

  const getUtmParams = () => {
    try {
      const p = new URLSearchParams(window.location.search);
      const utm: Record<string, string> = {};
      const keys = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
      ];
      keys.forEach(k => {
        const v = p.get(k);
        if (v) utm[k] = v;
      });
      return Object.keys(utm).length ? utm : undefined;
    } catch {
      return undefined;
    }
  };

  const emailValid = React.useMemo(() => {
    if (!email) return false;
    return /[^@\s]+@[^@\s]+\.[^@\s]+/.test(email);
  }, [email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setTouched(true);
    if (!emailValid) {
      setError('Please enter a valid email address');
      return;
    }
    setSubmitting(true);
    setError(null);

    const seconds = Math.round((Date.now() - mountedAtRef.current) / 1000);

    const payload = {
      fullName: 'Book page inquiry',
      email: email.trim(),
      company: '',
      industry: 'Other' as const,
      teamSize: '1–5' as const,
      currentTools: [] as string[],
      dataSensitivity: 'Low' as const,
      budgetRange: '<$5k' as const,
      projectUrgency: 'Exploring' as const,
      vision:
        'Book page request — please email me to schedule a discovery call. No additional message provided.',
      roi: {},
      utm: getUtmParams(),
      hp: '',
      tts: Math.max(5, seconds),
      referrerUrl:
        typeof document !== 'undefined' ? document.referrer : undefined,
      pagePath:
        typeof window !== 'undefined' ? window.location.pathname : undefined,
    };

    try {
      trackScheduleClick('book_page_email_form');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const message = data?.error || 'Failed to submit. Please try again.';
        trackInquiryFailure(res.status, message);
        setError(message);
        setSubmitting(false);
        return;
      }
      trackInquirySuccess(0, '<$5k', 'Other');
      router.push('/thank-you');
    } catch (err) {
      trackInquiryFailure(0, 'Network error');
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <div className="card-glass max-w-md mx-auto p-6 text-left">
      <h2 className="text-2xl font-bold mb-2">Book a call by email</h2>
      <p className="text-muted mb-6">
        Leave your email and we’ll reach out the same business day to schedule a
        discovery call.
      </p>

      {error ? (
        <div role="alert" className="mb-4 text-sm text-red-600">
          {error}
        </div>
      ) : null}

      <form
        onSubmit={onSubmit}
        noValidate
        {...(submitting ? { 'aria-busy': 'true' } : {})}
      >
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="hp" className="sr-only">
            Leave this field empty
          </label>
          <input id="hp" name="hp" autoComplete="off" tabIndex={-1} />
        </div>

        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Your email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@company.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          {...(touched && !emailValid
            ? { 'aria-invalid': true, 'aria-describedby': 'email-error' }
            : {})}
          className={`w-full px-4 py-3 rounded-xl border bg-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
            touched && !emailValid
              ? 'border-red-300 focus:ring-red-500 bg-red-50/50'
              : 'border-glass-border'
          }`}
        />
        {touched && !emailValid ? (
          <p id="email-error" className="mt-2 text-sm text-red-600">
            Please enter a valid email address
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting || !emailValid}
          className="btn-primary w-full mt-4 font-semibold"
        >
          {submitting ? 'Sending…' : 'Send me scheduling options'}
        </button>

        <p className="text-xs text-muted mt-3">
          No spam. We’ll only use this to coordinate a time.
        </p>
        {process.env.NEXT_PUBLIC_BUSINESS_EMAIL ? (
          <p className="text-xs text-muted mt-1">
            Prefer email? Reach us at{' '}
            <a
              className="link"
              href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`}
            >
              {process.env.NEXT_PUBLIC_BUSINESS_EMAIL}
            </a>
            .
          </p>
        ) : null}
      </form>
      <div className="sr-only" aria-live="polite">
        {submitting ? 'Submitting your request…' : ''}
      </div>
    </div>
  );
}
