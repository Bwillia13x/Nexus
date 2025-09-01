'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type FAQItem = { question: string; answer: string };

interface FAQAccordionProps {
  items: FAQItem[];
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(!!mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);
  return reduced;
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const reducedMotion = usePrefersReducedMotion();
  const listRef = useRef<HTMLDivElement | null>(null);

  // Support deep-links like #sfaq-3 (1-indexed)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('sfaq-')) {
      const n = Number(hash.split('-')[1]);
      if (!Number.isNaN(n) && n >= 1 && n <= items.length) {
        setOpen({ [n - 1]: true });
        const node = document.getElementById(`sfaq-q-${n}`);
        node?.scrollIntoView({
          behavior: reducedMotion ? 'auto' : 'smooth',
          block: 'center',
        });
      }
    }
  }, [items.length, reducedMotion]);

  const allOpen = useMemo(
    () => items.every((_, i) => !!open[i]),
    [open, items]
  );

  const toggle = (i: number) => setOpen(prev => ({ ...prev, [i]: !prev[i] }));
  const setAll = (value: boolean) => {
    const next: Record<number, boolean> = {};
    items.forEach((_, i) => (next[i] = value));
    setOpen(next);
    setTimeout(() => listRef.current?.focus(), 0);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-3 mb-2">
        <button
          type="button"
          className="btn-outline px-4 py-2 rounded-full text-sm"
          onClick={() => setAll(!allOpen)}
          aria-pressed={allOpen}
        >
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      <div
        ref={listRef}
        role="list"
        aria-label="Frequently asked questions"
        tabIndex={-1}
        className="space-y-4"
      >
        {items.map((faq, i) => {
          const isOpen = !!open[i];
          const panelId = `sfaq-panel-${i}`;
          const buttonId = `sfaq-button-${i}`;
          const qAnchor = `sfaq-${i + 1}`;
          return (
            <div
              key={i}
              role="listitem"
              className="card-glass glass-liquid p-0 overflow-hidden"
            >
              <h3 id={`sfaq-q-${i + 1}`} className="sr-only">
                {faq.question}
              </h3>
              <div className="flex items-stretch">
                <button
                  id={buttonId}
                  type="button"
                  className="flex-1 text-left px-5 py-4 md:px-6 md:py-5 focus-ring"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-glass-border text-sm transition-transform ${isOpen ? 'rotate-90' : ''}`}
                      aria-hidden
                    >
                      ➤
                    </span>
                    <span className="text-base md:text-lg font-semibold">
                      {faq.question}
                    </span>
                  </div>
                </button>
                <a
                  href={`#${qAnchor}`}
                  className="px-4 md:px-5 py-4 md:py-5 text-sm text-muted hover:text-primary focus-ring"
                  aria-label="Copy link to this question"
                  onClick={e => {
                    e.preventDefault();
                    history.replaceState(null, '', `#${qAnchor}`);
                    toggle(i);
                  }}
                >
                  #
                </a>
              </div>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={`border-top border-glass-border px-5 py-4 md:px-6 md:py-5 text-muted-foreground ${reducedMotion ? '' : 'transition-[max-height,opacity] duration-300'} ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              >
                <p className="leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
