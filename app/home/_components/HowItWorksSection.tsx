'use client';

import Link from 'next/link';
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

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="mx-auto max-w-container px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {howItWorksContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {howItWorksContent.subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-brand-600 to-brand-500 opacity-30" />

          <div className="space-y-16 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 border-4 border-white shadow-lg z-10" />

                {/* Content card */}
                <div
                  className={`flex-1 max-w-lg mx-auto md:mx-0 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                  }`}
                >
                  <div className="p-6 rounded-lg border bg-white shadow-elev hover:shadow-elev-lg hover:ring-2 hover:ring-brand-500/30 transition-all duration-300 group">
                    {/* Header with icon and title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <span className="text-sm font-bold text-brand-500 bg-brand-500/10 px-3 py-1.5 rounded-full">
                            Step {step.step}
                          </span>
                          <span className="text-lg font-semibold text-brand-600">
                            {step.title}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base mb-6">
                      {step.description}
                    </p>

                    {/* Step-specific details */}
                    <div className="border-t border-gray-100 pt-6">
                      <ul
                        className="text-sm text-muted-foreground space-y-2"
                        role="list"
                      >
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span
                              className="text-brand-500 mt-1 flex-shrink-0"
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
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-16 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 md:mt-24 text-center">
          <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl border bg-white shadow-elev-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {ctaContent.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {ctaContent.description}
            </p>
            <Link
              href={ctaContent.cta.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 text-white font-semibold shadow-elev hover:shadow-elev-lg hover:translate-y-[-1px] transition-all duration-200 text-lg"
            >
              {ctaContent.cta.label} <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
