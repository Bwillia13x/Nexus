import Link from 'next/link';
import { homeContent } from '@/app/_content/home';

export function HowItWorks() {
  const steps = homeContent.howItWorks.steps.map(step => ({
    ...step,
    icon:
      step.step === 1
        ? '🔍'
        : step.step === 2
          ? '📋'
          : step.step === 3
            ? '🚀'
            : step.step === 4
              ? '🎓'
              : '🛡️',
    color:
      step.step === 1
        ? 'from-blue-500 to-cyan-500'
        : step.step === 2
          ? 'from-purple-500 to-pink-500'
          : step.step === 3
            ? 'from-green-500 to-teal-500'
            : step.step === 4
              ? 'from-orange-500 to-red-500'
              : 'from-indigo-500 to-purple-500',
  }));

  return (
    <div className="container-wide">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

        <div className="space-y-16 md:space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`relative flex flex-col md:flex-row items-start gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-eggshell shadow-lg z-10" />

              {/* Content card */}
              <div
                className={`flex-1 max-w-lg mx-auto md:mx-0 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}
              >
                <div className="card-glass p-8 hover:scale-105 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                          Step {step.step}
                        </span>
                        <span className="text-lg font-semibold text-secondary">
                          {step.title}
                        </span>
                      </div>
                      <div className="text-sm text-muted font-medium uppercase tracking-wide">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed text-base mb-6">
                    {step.description}
                  </p>

                  {/* Step-specific details */}
                  <div className="border-t border-glass-border pt-6">
                    <ul className="text-sm text-muted space-y-2" role="list">
                      {steps
                        .find(s => s.step === step.step)
                        ?.bullets.map((bullet, i) => (
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
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-16 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-20 md:mt-24 text-center">
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            {homeContent.cta.title}
          </h3>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            {homeContent.cta.description}
          </p>
          <Link
            href={homeContent.cta.cta.href}
            className="btn-primary text-lg px-8 py-4"
          >
            {homeContent.cta.cta.label} <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
