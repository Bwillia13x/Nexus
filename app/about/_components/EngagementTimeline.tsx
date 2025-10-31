'use client';

import { useEffect, useRef, useState } from 'react';

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
    <div className="space-y-12 max-w-6xl mx-auto">
      <div className="text-center">
        <h2
          id="engagement-heading"
          className="text-4xl md:text-5xl font-bold mb-6 gradient-title"
        >
          Engagement Model
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
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

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-10 gap-y-6 auto-rows-fr items-stretch"
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
              className={`transition-all duration-500 focus-ring h-full ${
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
              <div className="card-glass bg-glass group h-full min-h-[260px] md:min-h-[300px] p-6 md:p-8 transition-transform md:hover:-translate-y-1">
                <div className="flex items-start gap-8">
                  {/* Step number badge */}
                  <div className="flex-shrink-0">
                    <div className="rounded-2xl ring-2 ring-transparent group-hover:ring-primary/40 ring-offset-2 ring-offset-white/60 transition-colors duration-300">
                      <div className="icon-tile md:scale-110 group-hover:scale-125 group-hover:rotate-[-2deg] transition-all duration-300">
                        <span className="text-2xl font-bold relative z-10">
                          {step.step}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-3">
                      <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-2">
                        Step {step.step}
                      </span>
                      <h3
                        id={`step-${index}-title`}
                        className="font-bold text-2xl md:text-3xl text-ink leading-tight tracking-tight"
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p
                      id={`step-${index}-desc`}
                      className="text-muted-foreground text-lg leading-relaxed"
                    >
                      {step.blurb}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
