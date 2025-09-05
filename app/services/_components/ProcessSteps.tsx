'use client';

import { processSteps } from '../_content';
import Image from 'next/image';
import SpriteIcon from '@/components/ui/SpriteIcon';

export default function ProcessSteps() {
  const iconMap: Record<string, string> = {
    'Quick Chat': '/icons-svg/services/step-quick-chat.svg',
    'Set Up': '/icons-svg/services/step-setup.svg',
    'Teach & Handoff': '/icons-svg/services/step-train-handoff.svg',
    'Make Sure It Works': '/icons-svg/services/step-verify.svg',
  };
  return (
    <section className="py-16 md:py-24" aria-labelledby="how-we-work-heading">
      <div className="mx-auto max-w-container px-4">
        <h2
          id="how-we-work-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance text-pretty"
        >
          How We Work (Services Edition)
        </h2>

        {/* Responsive grid: 5 columns on ≥lg, 2x3 grid on md, stacked on sm */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {processSteps.map(step => (
            <li
              key={step.number}
              className="group relative card-glass glass-liquid list-none"
            >
              {/* Step icon or number */}
              {iconMap[step.title] ? (
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg overflow-hidden">
                  <SpriteIcon
                    name={`ps--${iconMap[step.title]
                      .replace(/^\/icons-svg\//, '')
                      .replace(/\.svg$/, '')
                      .split('/')
                      .join('--')}`}
                    size={32}
                  />
                </div>
              ) : (
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>
              )}

              {/* Title and description */}
              <h3 className="font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-muted text-sm text-center leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
