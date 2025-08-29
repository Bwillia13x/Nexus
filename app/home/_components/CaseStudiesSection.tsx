'use client';

import Link from 'next/link';
import { pilotsContent, PilotItem } from '../_content';
import { MaybeIcon } from '@/components/ui/MaybeIcon';

const pilotCanonicalById: Record<string, string> = {
  assistant: 'voice-spotlight',
  ops: 'analytics-bars',
};

interface PilotCardProps {
  pilot: PilotItem;
  index: number;
}

function PilotCard({ pilot, index }: PilotCardProps) {
  const handleCtaClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        cta: 'pilot_card_start',
        pilotId: pilot.id,
        page: 'home',
      });
    }
  };

  return (
    <article
      className="card-glass glass-liquid overflow-hidden group h-full flex flex-col focus-within:ring-2 focus-within:ring-primary/30"
      role="article"
      aria-labelledby={`pilot-${pilot.id}-title`}
    >
      {/* Header with gradient background and icon */}
      <div className="h-36 md:h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
        <div className="text-5xl md:text-6xl text-white" aria-hidden="true">
          <MaybeIcon
            canonical={pilotCanonicalById[pilot.id] ?? 'team-analytics'}
            size={64}
            className="text-white"
          />
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {/* Title and badge */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
          <h3
            id={`pilot-${pilot.id}-title`}
            className="font-semibold text-xl md:text-2xl leading-tight flex-grow"
          >
            {pilot.title}
          </h3>
          <span className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium whitespace-nowrap">
            {pilot.id === 'assistant'
              ? 'Web & SMS'
              : pilot.id === 'ops'
                ? 'Weekly Pipeline'
                : 'Questions'}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed flex-grow">
          {pilot.what}
        </p>

        {/* Target outcomes */}
        <div className="space-y-4 mb-6 flex-grow">
          <div className="flex items-start gap-3">
            <span className="text-primary mt-1 text-lg" aria-hidden="true">
              🎯
            </span>
            <div className="flex-grow">
              <div className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                Target Outcome
              </div>
              <ul
                className="text-sm md:text-base text-muted-foreground space-y-2"
                role="list"
              >
                {pilot.target.map((target, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="text-primary text-sm mt-1 flex-shrink-0"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span className="leading-relaxed">{target}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scope */}
          <div className="flex items-start gap-3">
            <span className="text-secondary mt-1 text-lg" aria-hidden="true">
              🔧
            </span>
            <div className="flex-grow">
              <div className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                Scope
              </div>
              <ul
                className="text-sm md:text-base text-muted-foreground space-y-2"
                role="list"
              >
                {pilot.scope.map((scope, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className="text-secondary text-sm mt-1 flex-shrink-0"
                      aria-hidden="true"
                    >
                      •
                    </span>
                    <span className="leading-relaxed">{scope}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="mt-auto">
          <Link
            href={pilot.cta.href}
            className="btn-primary w-full text-base"
            onClick={handleCtaClick}
            aria-describedby={`pilot-${pilot.id}-cta-desc`}
          >
            {pilot.cta.label}
          </Link>
          <div id={`pilot-${pilot.id}-cta-desc`} className="sr-only">
            Contact us to start this pilot
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudiesSection() {
  return (
    <section id="pilots" className="py-16 md:py-24">
      <div className="mx-auto max-w-container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {pilotsContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Small projects that make a difference fast—no long contracts
          </p>
          <p className="text-xs text-muted-foreground italic max-w-2xl mx-auto">
            {pilotsContent.footnote}
          </p>
        </div>

        {/* Pilots grid */}
        <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-3 mb-12">
          {pilotsContent.items.map((pilot, index) => (
            <PilotCard key={pilot.id} pilot={pilot} index={index} />
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center">
          <Link href="/playbooks" className="btn-primary text-lg">
            Get playbooks & templates <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
