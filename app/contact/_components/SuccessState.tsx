'use client';

import { useEffect, useRef } from 'react';
import { CONTACT_CONTENT } from '../_content';
import { trackCtaClick } from '@/lib/analytics';

interface SuccessStateProps {
  onBookCall?: () => void;
  onSeePilots?: () => void;
}

export function SuccessState({ onBookCall, onSeePilots }: SuccessStateProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Focus management for accessibility
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  const handleBookCall = () => {
    trackCtaClick('book_call_success', 'Schedule a call', '/contact');
    if (onBookCall) {
      onBookCall();
    } else {
      window.location.href = CONTACT_CONTENT.success.buttons.bookCall.href;
    }
  };

  const handleSeePilots = () => {
    trackCtaClick(
      'see_playbooks_success',
      'Get playbooks & templates',
      '/contact'
    );
    if (onSeePilots) {
      onSeePilots();
    } else {
      window.location.href = CONTACT_CONTENT.success.buttons.seePilots.href;
    }
  };

  return (
    <div
      className="card-glass p-8 text-center"
      role="status"
      aria-live="polite"
    >
      {/* Success Icon */}
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500/30">
          <span className="text-3xl">✅</span>
        </div>
      </div>

      {/* Success Message */}
      <h2
        ref={headingRef}
        className="text-2xl md:text-3xl font-bold mb-6 gradient-title"
        tabIndex={-1} // Focusable for screen readers
      >
        {CONTACT_CONTENT.success.title}
      </h2>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={handleBookCall}
          className="btn-primary group flex-1 sm:flex-initial"
          aria-label="Schedule a discovery call"
        >
          <span className="flex items-center gap-2">
            📅 {CONTACT_CONTENT.success.buttons.bookCall.text}
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </span>
        </button>

        <button
          onClick={handleSeePilots}
          className="btn-secondary flex-1 sm:flex-initial"
          aria-label="Browse playbooks and templates"
        >
          <span className="flex items-center gap-2">
            🎯 {CONTACT_CONTENT.success.buttons.seePilots.text}
          </span>
        </button>
      </div>

      {/* Additional Info */}
      <p className="mt-6 text-sm text-muted">
        Or browse our{' '}
        <a href="/playbooks" className="link font-medium">
          playbooks & templates
        </a>
        .
      </p>
    </div>
  );
}
