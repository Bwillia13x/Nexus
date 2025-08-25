'use client';

import { processSteps } from '../_content';

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How We Work (Services Edition)
        </h2>

        {/* Responsive grid: 5 columns on ≥lg, 2x3 grid on md, stacked on sm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {processSteps.map(step => (
            <div
              key={step.number}
              className="group relative p-6 rounded-lg border bg-white shadow-elev hover:shadow-elev-lg hover:ring-2 hover:ring-brand-500/30 transition-all duration-300 focus-within:shadow-elev-lg focus-within:ring-2 focus-within:ring-brand-500/40"
            >
              {/* Circular number chip */}
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                {step.number}
              </div>

              {/* Title and description */}
              <h3 className="font-semibold mb-2 text-center">{step.title}</h3>
              <p className="text-muted text-sm text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
