'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { howItWorksContent, ctaContent } from '../_content';

const stepIcons = {
  1: '🔍',
  2: '📋',
  3: '🚀',
  4: '🎓',
  5: '🛡️',
};

const stepColors = {
  1: 'from-blue-500 to-cyan-500',
  2: 'from-purple-500 to-pink-500',
  3: 'from-green-500 to-teal-500',
  4: 'from-orange-500 to-red-500',
  5: 'from-indigo-500 to-purple-500',
};

export default function HowItWorksSection() {
  const steps = howItWorksContent.steps.map(step => ({
    ...step,
    icon: stepIcons[step.step as keyof typeof stepIcons],
    color: stepColors[step.step as keyof typeof stepColors],
  }));

  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Programmatic navigation helpers for click/tap controls
  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, steps.length - 1));
    if (clamped === activeIndex) return;
    setActiveIndex(clamped);
    const node = itemRefs.current[clamped];
    if (node) {
      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const behavior: ScrollBehavior = prefersReduced ? 'auto' : 'smooth';
      requestAnimationFrame(() => {
        node.focus();
        node.scrollIntoView({ behavior, inline: 'center', block: 'nearest' });
      });
    }
  };

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  const handleKeyNav = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (
      key !== 'ArrowRight' &&
      key !== 'ArrowLeft' &&
      key !== 'Home' &&
      key !== 'End'
    ) {
      return;
    }
    e.preventDefault();

    let next = activeIndex;
    if (key === 'ArrowRight') {
      next = Math.min(activeIndex + 1, steps.length - 1);
    }
    if (key === 'ArrowLeft') {
      next = Math.max(activeIndex - 1, 0);
    }
    if (key === 'Home') {
      next = 0;
    }
    if (key === 'End') {
      next = steps.length - 1;
    }

    if (next !== activeIndex) {
      setActiveIndex(next);
      const node = itemRefs.current[next];
      if (node) {
        const prefersReduced =
          typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const behavior: ScrollBehavior = prefersReduced ? 'auto' : 'smooth';
        requestAnimationFrame(() => {
          node.focus();
          node.scrollIntoView({ behavior, inline: 'center', block: 'nearest' });
        });
      }
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {howItWorksContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {howItWorksContent.subtitle}
          </p>
        </div>

        {/* Horizontal timeline (scroll-snap) */}
        <div className="relative fade-x-edges">
          <div
            ref={scrollRef}
            className="group/scroll relative -mx-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-pl-6 md:scroll-pl-8 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 focus:ring-offset-eggshell"
            role="region"
            aria-roledescription="carousel"
            aria-label="How it works steps"
            aria-describedby="hiw-instructions"
            onKeyDown={handleKeyNav}
          >
            <p id="hiw-instructions" className="sr-only">
              Use Left and Right arrow keys to move between steps. Press Home to
              jump to the first step and End to jump to the last.
            </p>
            <p
              id="hiw-status"
              className="sr-only"
              aria-live="polite"
              aria-atomic="true"
            >
              Step {activeIndex + 1} of {steps.length}:{' '}
              <span>{steps[activeIndex].title}</span>
            </p>
            <div
              className="flex items-stretch gap-4 sm:gap-6 md:gap-8 w-max py-2"
              role="list"
            >
              {steps.map((step, index) => (
                <article
                  key={step.step}
                  className="snap-center md:snap-start scroll-ml-6 md:scroll-ml-8"
                  role="listitem"
                  aria-current={activeIndex === index ? 'step' : undefined}
                >
                  <div
                    className="card-glass glass-liquid w-[85vw] sm:w-[420px] md:w-[460px] lg:w-[520px] transition-all duration-300 focus-ring"
                    tabIndex={activeIndex === index ? 0 : -1}
                    role="group"
                    aria-labelledby={`hiw-step-${step.step}-title`}
                    aria-describedby={`hiw-step-${step.step}-desc`}
                    ref={el => {
                      itemRefs.current[index] = el;
                    }}
                    onFocus={() => setActiveIndex(index)}
                  >
                    {/* Header with icon and title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover/scroll:scale-110 transition-transform duration-300`}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                            Step {step.step}
                          </span>
                          <span
                            id={`hiw-step-${step.step}-title`}
                            className="text-lg font-semibold text-ink"
                          >
                            {step.title}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      id={`hiw-step-${step.step}-desc`}
                      className="text-muted-foreground leading-relaxed text-base mb-6"
                    >
                      {step.description}
                    </p>

                    {/* Step-specific details */}
                    <div className="border-t border-glass-border pt-6">
                      <ul
                        className="text-sm text-muted-foreground space-y-2"
                        role="list"
                      >
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span
                              className="text-primary mt-1 flex-shrink-0"
                              aria-hidden="true"
                            >
                              ✓
                            </span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Arrow controls */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous step"
              aria-controls="how-it-works"
              disabled={activeIndex === 0}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-eggshell/90 text-ink shadow-md ring-1 ring-glass-border backdrop-blur focus-ring disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next step"
              aria-controls="how-it-works"
              disabled={activeIndex === steps.length - 1}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-eggshell/90 text-ink shadow-md ring-1 ring-glass-border backdrop-blur focus-ring disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 md:mt-24 text-center">
          <div className="max-w-3xl mx-auto card-glass glass-liquid p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {ctaContent.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {ctaContent.description}
            </p>
            <Link href={ctaContent.cta.href} className="btn-primary text-lg">
              {ctaContent.cta.label} <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
