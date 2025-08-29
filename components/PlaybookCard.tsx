'use client';

import Link from 'next/link';
import { Playbook } from '@/app/_content/home';

interface PlaybookCardProps {
  playbook: Playbook;
  index: number;
}

export function PlaybookCard({ playbook, index }: PlaybookCardProps) {
  const handleCtaClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        cta: 'pilot_card_start',
        pilotId: playbook.id,
        page: 'home',
      });
    }
  };

  return (
    <div
      className="card-glass overflow-hidden p-0 group hover:scale-105 transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none h-full flex flex-col"
      role="article"
      aria-labelledby={`playbook-${playbook.id}-title`}
    >
      <div className="h-36 md:h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
        <div className="text-5xl md:text-6xl" aria-hidden="true">
          {playbook.id === 'assistant'
            ? '🤖'
            : playbook.id === 'ops'
              ? '⚙️'
              : '📊'}
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
          <h3
            id={`playbook-${playbook.id}-title`}
            className="font-semibold text-xl md:text-2xl leading-tight flex-grow"
          >
            {playbook.title}
          </h3>
          <span className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium whitespace-nowrap">
            {playbook.id === 'assistant'
              ? 'Web & SMS'
              : playbook.id === 'ops'
                ? 'Weekly Pipeline'
                : 'Questions'}
          </span>
        </div>
        <p className="text-muted text-base md:text-lg mb-6 leading-relaxed flex-grow">
          {playbook.what}
        </p>

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
                className="text-sm md:text-base text-muted space-y-2"
                role="list"
              >
                {playbook.target.map((target, i) => (
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
          <div className="flex items-start gap-3">
            <span className="text-secondary mt-1 text-lg" aria-hidden="true">
              🔧
            </span>
            <div className="flex-grow">
              <div className="text-sm font-semibold text-ink uppercase tracking-wide mb-2">
                Scope
              </div>
              <ul
                className="text-sm md:text-base text-muted space-y-2"
                role="list"
              >
                {playbook.scope.map((scope, i) => (
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

        <div className="mt-auto">
          <Link
            href={playbook.cta.href}
            className="btn-primary w-full text-center text-base py-3"
            onClick={handleCtaClick}
            aria-describedby={`playbook-${playbook.id}-cta-desc`}
          >
            {playbook.cta.label}
          </Link>
          <div id={`playbook-${playbook.id}-cta-desc`} className="sr-only">
            Contact us to start this pilot
          </div>
        </div>
      </div>
    </div>
  );
}
