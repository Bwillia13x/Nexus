'use client';

import Link from 'next/link';
import { ServiceData } from '../_content';
import { List, Card } from './helpers';

interface ServicePanelProps {
  service: ServiceData;
}

export default function ServicePanel({ service }: ServicePanelProps) {
  return (
    <section id={service.id} className="py-16 md:py-24">
      <div className="mx-auto max-w-container px-4">
        <div className="rounded-2xl border bg-white shadow-elev-lg p-6 md:p-8">
          {/* Header Section */}
          <header className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center text-3xl rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg">
                🤖
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                {service.title}
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">{service.blurb}</p>
            <p className="text-ink">{service.intro}</p>
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
                  className="rounded-lg border bg-gradient-to-r from-brand-500/6 to-transparent p-4"
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
                helper="Price varies by connectors, data cleaning, user count, and governance."
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
                  <span className="text-lg mt-0.5">⚠️</span>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <Link
              href={service.ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 text-white px-6 py-3 shadow-elev hover:shadow-elev-lg hover:translate-y-[-1px] transition-all duration-200 font-semibold"
            >
              Start this project →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
