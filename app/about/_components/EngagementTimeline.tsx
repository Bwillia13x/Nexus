'use client';

import { useEffect, useRef, useState } from 'react';
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

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Engagement Model
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          5-step process from discovery to handoff
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={el => (stepRefs.current[index] = el)}
            data-step={index}
            className={`text-center transition-all duration-500 ${
              visibleSteps.includes(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
              {step.step}
            </div>
            <h3 className="font-bold mb-3 text-lg">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-6">
              {step.blurb}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
