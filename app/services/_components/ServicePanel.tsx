'use client';

import Link from 'next/link';
import { ServiceData } from '../_content';
import { List, Card } from './helpers';
import { MaybeIcon } from '@/components/ui/MaybeIcon';

interface ServicePanelProps {
  service: ServiceData;
}

export default function ServicePanel({ service }: ServicePanelProps) {
  const emojiByService: Record<string, string> = {
    'executive-briefing': '📘',
    'readiness-audit': '📝',
    'tool-selection': '🧰',
    'no-code-pilot': '🚀',
  };
  return (
    <section
      id={service.id}
      className="py-16 md:py-24"
      role="region"
      aria-labelledby={`${service.id}-heading`}
    >
      <div className="mx-auto max-w-container px-4">
        <div className="card-glass glass-liquid p-6 md:p-8">
          {/* Header Section */}
          <header className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg overflow-hidden">
                <span aria-hidden="true" className="text-2xl leading-none">
                  {emojiByService[service.id] || '📘'}
                </span>
              </div>
              <h2
                id={`${service.id}-heading`}
                className="text-2xl md:text-3xl font-bold text-balance text-pretty"
              >
                {service.title}
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">{service.blurb}</p>
            <p className="text-ink">{service.intro}</p>

            {/* Quick metadata chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip inline-flex items-center gap-2">
                <span aria-hidden="true" className="leading-none">
                  ⏱️
                </span>
                {service.timeline}
              </span>
              <span className="chip inline-flex items-center gap-2">
                <span aria-hidden="true" className="leading-none">
                  💰
                </span>
                {service.price}
              </span>
            </div>
          </header>

          {/* Success Metrics Section */}
          <div className="mt-8">
            <h3 className="font-semibold mb-4">
              Success Metrics (Targets, Measured)
            </h3>
            <ul className="grid gap-3">
              {service.metrics.map((metric, idx) => (
                <li
                  key={idx}
                  className="rounded-lg border border-glass-border bg-glass-2 backdrop-blur p-4"
                >
                  {metric}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Targets are planning baselines for pilots; actual results vary by
              data quality and workflow fit.
            </p>
          </div>

          {/* 4-Column Responsive Grid */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <List title="What's Included" items={service.includes} />
              <List title="Deliverables" items={service.deliverables} />
              <List
                title="Client Inputs (You Provide)"
                items={service.inputs}
              />
              <List
                title="Out of Scope (Pilot)"
                items={service.outOfScope}
                icon="✗"
              />
            </div>

            {/* Right rail */}
            <aside className="lg:col-span-1 space-y-6">
              <Card title="Timeline" value={service.timeline} icon="⏱️" />
              <Card
                title="Price Range"
                value={service.price}
                helper="Price varies by connectors, data cleaning, user count, and access and data rules."
                icon="💰"
              />
            </aside>
          </div>

          {/* Risks & Mitigations */}
          <div className="mt-12">
            <h4 className="font-semibold mb-4">Risks & Mitigations</h4>
            <ul className="space-y-2">
              {service.risks.map((risk, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-muted text-sm"
                >
                  <MaybeIcon
                    emoji="⚠️"
                    className="text-lg mt-0.5"
                    title="Risk"
                  />
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <Link
              href={service.ctaHref}
              className="btn-primary"
              aria-label={`Book discovery call for ${service.title}`}
            >
              Book discovery call →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
