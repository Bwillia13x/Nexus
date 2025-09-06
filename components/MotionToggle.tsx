'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const STORAGE_KEY = 'ui_reduce_motion';

function applyReduceMotion(enabled: boolean) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  if (enabled) root.setAttribute('data-reduce-motion', 'true');
  else root.removeAttribute('data-reduce-motion');
}

export function MotionToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let initial = false;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === '1') initial = true;
      else if (stored === '0') initial = false;
      else if (window.matchMedia) {
        // If no stored preference, respect system preference as a starting point
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        initial = !!mq.matches;
      }
    } catch {}
    setEnabled(initial);
    applyReduceMotion(initial);
  }, []);

  const toggle = () => {
    setEnabled(prev => {
      const next = !prev;
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
      } catch {}
      applyReduceMotion(next);
      // Toast feedback (will render only if ToastProvider is enabled)
      try {
        if (next) toast.success('Reduced motion enabled');
        else toast.success('Reduced motion disabled');
      } catch {}
      return next;
    });
  };

  return (
    <button
      type="button"
      className="btn-ghost px-3 py-1.5 text-xs border border-glass-border bg-glass-2 hover:bg-glass rounded-full"
      onClick={toggle}
      {...(enabled ? { 'aria-pressed': 'true' } : {})}
    >
      <span
        aria-hidden="true"
        className={`mr-2 inline-block transition-transform duration-200 ${enabled ? 'rotate-180' : ''}`}
      >
        ◐
      </span>
      Reduce motion:{' '}
      <span className="ml-1 font-semibold">{enabled ? 'On' : 'Off'}</span>
    </button>
  );
}

export default MotionToggle;
