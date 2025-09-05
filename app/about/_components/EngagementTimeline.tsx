'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const TIMELINE_ICON_MAP: Record<string, string> = {
  'Brief & Discover': '/icons/services/step-quick-chat.png',
  'Simple Plan': '',
  Configure: '/icons/services/step-setup.png',
  'Make Sure It Works': '/icons/services/step-verify.png',
  'Handoff or Care Plan': '/icons/services/step-train-handoff.png',
};
import { Card } from './Card';

interface ProcessStep {
  step: number;
  title: string;
  blurb: string;
  bullets: string[];
}

interface EngagementTimelineProps {
  steps: ProcessStep[];
}

export function EngagementTimeline({ steps }: EngagementTimelineProps) {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepIndex = parseInt(
            entry.target.getAttribute('data-step') || '0'
          );
          setVisibleSteps(prev => [...new Set([...prev, stepIndex])]);
        }
      });
    }, observerOptions);

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleKeyNav = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const key = e.key;
    if (
      key !== 'ArrowRight' &&
      key !== 'ArrowLeft' &&
      key !== 'ArrowUp' &&
      key !== 'ArrowDown' &&
      key !== 'Home' &&
      key !== 'End'
    ) {
      return;
    }
    e.preventDefault();

    const isDesktop =
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 768px)').matches;
    const cols = isDesktop ? 5 : 1;

    let next = activeIndex;
    if (key === 'ArrowRight') {
      next = activeIndex + 1;
    }
    if (key === 'ArrowLeft') {
      next = activeIndex - 1;
    }
    if (key === 'ArrowDown') {
      next = activeIndex + (isDesktop ? cols : 1);
    }
    if (key === 'ArrowUp') {
      next = activeIndex - (isDesktop ? cols : 1);
    }
    if (key === 'Home') {
      next = 0;
    }
    if (key === 'End') {
      next = steps.length - 1;
    }

    next = Math.max(0, Math.min(next, steps.length - 1));

    if (next !== activeIndex) {
      setActiveIndex(next);
      const node = stepRefs.current[next];
      if (node) {
        const prefersReduced =
          typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const behavior: ScrollBehavior = prefersReduced ? 'auto' : 'smooth';
        requestAnimationFrame(() => {
          node.focus();
          node.scrollIntoView({
            behavior,
            block: 'nearest',
            inline: 'nearest',
          });
        });
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2
          id="engagement-heading"
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Engagement Model
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          5-step process from discovery to handoff
        </p>
      </div>

      {/* Timeline grid with subtle connectors */}
      <div className="relative">
        <p id="timeline-instructions" className="sr-only">
          Use Left and Right arrow keys to move between steps. On desktop, Up
          and Down move by row. Press Home to jump to the first step and End to
          jump to the last.
        </p>
        <p
          id="timeline-status"
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
        >
          Step {activeIndex + 1} of {steps.length}:{' '}
          <span>{steps[activeIndex]?.title}</span>
        </p>
        {/* Connector line (desktop only) */}
        <div
          className="hidden md:block absolute inset-x-0 top-[64px] h-px bg-gradient-to-r from-glass-border/0 via-glass-border/70 to-glass-border/0"
          aria-hidden="true"
        />

        {/* Step dots (desktop only) */}
        <div
          className="hidden md:grid absolute inset-x-0 top-[64px] grid-cols-5 pointer-events-none"
          aria-hidden="true"
        >
          {steps.map((_, i) => (
            <span
              key={`dot-${i}`}
              className="justify-self-center -translate-y-1.5 block w-3 h-3 rounded-full bg-glass-border shadow-[0_0_0_4px_rgba(255,255,255,0.6)]"
            />
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
          role="list"
          aria-labelledby="engagement-heading"
          aria-describedby="timeline-instructions"
          onKeyDown={handleKeyNav}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => {
                stepRefs.current[index] = el;
              }}
              data-step={index}
              className={`transition-all duration-500 focus-ring ${
                visibleSteps.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              role="listitem"
              aria-current={activeIndex === index ? 'step' : undefined}
              aria-labelledby={`step-${index}-title`}
              aria-describedby={`step-${index}-desc`}
              tabIndex={activeIndex === index ? 0 : -1}
              onFocus={() => setActiveIndex(index)}
            >
              <Card
                variant="glass"
                className="card-glass glass-liquid h-full"
                role="article"
              >
                {/* Step header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg overflow-hidden">
                    {TIMELINE_ICON_MAP[step.title] ? (
                      <Image
                        src={TIMELINE_ICON_MAP[step.title]}
                        alt=""
                        width={28}
                        height={28}
                      />
                    ) : (
                      <span>{step.step}</span>
                    )}
                  </div>
                  <div>
                    <h3
                      id={`step-${index}-title`}
                      className="font-semibold text-ink text-base md:text-lg"
                    >
                      {step.title}
                    </h3>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      Step {step.step}
                    </span>
                  </div>
                </div>

                {/* Blurb */}
                <p
                  id={`step-${index}-desc`}
                  className="text-muted-foreground text-sm leading-6"
                >
                  {step.blurb}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
