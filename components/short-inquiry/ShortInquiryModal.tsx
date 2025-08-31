'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useShortInquiry } from './ShortInquiryProvider';
import {
  trackInquiryFailure,
  trackInquirySuccess,
  trackCtaClick,
} from '@/lib/analytics';
import { useRouter } from 'next/navigation';

export function ShortInquiryModal() {
  const { isOpen, close, prefill } = useShortInquiry();
  const router = useRouter();

  const [fullName, setFullName] = useState(prefill.fullName || '');
  const [email, setEmail] = useState(prefill.email || '');
  const [company, setCompany] = useState(prefill.company || '');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openedAtRef = useRef<number | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Record open time and focus first input
      openedAtRef.current = Date.now();
      lastActiveRef.current = (document.activeElement as HTMLElement) || null;
      setError(null);
      // prefill state fresh on open
      setFullName(prefill.fullName || '');
      setEmail(prefill.email || '');
      setCompany(prefill.company || '');
      setTimeout(() => firstFieldRef.current?.focus(), 0);
      trackCtaClick('quick_inquiry_open', 'Quick inquiry', 'nav');
      // prevent background scroll
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [isOpen, prefill]);

  const handleClose = React.useCallback(() => {
    close();
    setTimeout(() => lastActiveRef.current?.focus(), 0);
  }, [close]);

  // Trap focus within the modal when open (Tab/Shift+Tab)
  const handleTrapFocus = React.useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    const root = panelRef.current;
    if (!root) return;
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(selector));
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const active = document.activeElement as HTMLElement | null;
    if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, handleClose]);

  const getUtmParams = () => {
    try {
      const p = new URLSearchParams(window.location.search);
      const utm: Record<string, string> = {};
      [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
      ].forEach(k => {
        const v = p.get(k);
        if (v) utm[k] = v;
      });
      return Object.keys(utm).length ? utm : undefined;
    } catch {
      return undefined;
    }
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    const payload = {
      fullName: fullName.trim(),
      email: email.trim(),
      company: company.trim(),
      industry: 'Other',
      teamSize: '1–5',
      currentTools: [],
      dataSensitivity: 'Low',
      budgetRange: '<$5k',
      projectUrgency: 'Exploring',
      vision:
        'Quick inquiry from navigation — please follow up to discuss details. No long message provided.',
      roi: {},
      utm: getUtmParams(),
      hp: '',
      tts: (() => {
        const t = openedAtRef.current
          ? Math.round((Date.now() - openedAtRef.current) / 1000)
          : 0;
        return t;
      })(),
      referrerUrl:
        typeof document !== 'undefined' ? document.referrer : undefined,
      pagePath:
        typeof window !== 'undefined' ? window.location.pathname : undefined,
    };

    try {
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
      handleClose();
      router.push('/thank-you');
    } catch (err: any) {
      trackInquiryFailure(0, err?.message || 'Network error');
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-labelledby="short-inquiry-title"
      aria-describedby="short-inquiry-desc"
      role="dialog"
      aria-modal="true"
      onKeyDown={handleTrapFocus}
    >
      <div
        className="fixed inset-0 bg-black/50"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className="relative z-10 w-[92vw] max-w-md rounded-2xl border border-glass-border bg-eggshell shadow-elev-xl p-5 sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="short-inquiry-title" className="text-lg font-semibold">
            Quick inquiry
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="btn-ghost p-2 rounded-full"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <p
          id="short-inquiry-desc"
          className="mt-1 text-sm text-muted-foreground"
        >
          Leave your details and we’ll follow up shortly.
        </p>

        <form
          className="mt-4 space-y-3"
          onSubmit={onSubmit}
          aria-busy={submitting ? 'true' : undefined}
        >
          <div>
            <label htmlFor="qi-name" className="block text-sm font-medium">
              Full name
            </label>
            <input
              ref={firstFieldRef}
              id="qi-name"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              inputMode="text"
              autoCapitalize="words"
              spellCheck={false}
              enterKeyHint="next"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <div>
            <label htmlFor="qi-email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="qi-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="next"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          <div>
            <label htmlFor="qi-company" className="block text-sm font-medium">
              Company (optional)
            </label>
            <input
              id="qi-company"
              name="company"
              type="text"
              inputMode="text"
              autoCapitalize="words"
              spellCheck={false}
              enterKeyHint="done"
              value={company}
              onChange={e => setCompany(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>

          {error ? (
            <div role="alert" className="text-sm text-red-600">
              {error}
            </div>
          ) : null}

          {/* Polite live region to announce status changes for screen readers */}
          <div aria-live="polite" className="sr-only">
            {submitting ? 'Submitting your inquiry…' : ''}
          </div>

          <div className="pt-1 flex items-center gap-2 justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="btn-outline px-4 py-2 rounded-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              aria-disabled={submitting ? 'true' : undefined}
              className="btn-primary px-4 py-2 rounded-full font-semibold disabled:opacity-60"
            >
              {submitting ? 'Sending…' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
