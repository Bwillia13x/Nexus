'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  caseHighlight,
  pilotsContent,
  type CaseHighlightMetric,
  type PilotItem,
} from '../_content';
import { MaybeIcon } from '@/components/ui/MaybeIcon';
import RoiPrefillLink from '@/components/RoiPrefillLink';
import { buildRoiHref } from '@/lib/roi';

export default function CaseStudiesSection() {
  const [activePilotId, setActivePilotId] = useState<PilotItem['id'] | null>(
    pilotsContent.items[0]?.id ?? null
  );

  const highlightViewModel = useMemo(() => {
    const activePilot = pilotsContent.items.find(
      item => item.id === activePilotId
    );

    if (activePilot?.highlight) {
      return mapPilotHighlightToViewModel(activePilot);
    }

    return mapCaseHighlightToViewModel();
  }, [activePilotId]);

  return (
    <section
      id="pilots"
      className="py-16 md:py-24 cv-auto"
      aria-labelledby="pilots-title"
    >
      <div className="mx-auto max-w-container px-4">
        <div className="text-center mb-12">
          <h2
            id="pilots-title"
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
          >
            {pilotsContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4 text-pretty">
            Small, fixed-scope pilots that land measurable results in weeks—not
            quarters.
          </p>
          <p className="text-xs text-muted-foreground italic max-w-2xl mx-auto text-pretty">
            {pilotsContent.footnote}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <CaseHighlightCard viewModel={highlightViewModel} />

          <div className="grid gap-6" role="list" aria-label="Pilot examples">
            {pilotsContent.items.map(pilot => (
              <PilotTile
                key={pilot.id}
                pilot={pilot}
                isActive={pilot.id === activePilotId}
                onActivate={() => setActivePilotId(pilot.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface HighlightViewModel {
  eyebrow: string;
  title: string;
  summary: string;
  metricSummary?: string;
  metrics: CaseHighlightMetric[];
  bulletPoints: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryLink?: {
    label: string;
    href: string;
  };
  roiLink?: {
    label: string;
    href: string;
    pilotId?: PilotItem['id'];
    analyticsContext?: string;
  };
  pilotTitle?: string;
  isFallback?: boolean;
}

function CaseHighlightCard({ viewModel }: { viewModel: HighlightViewModel }) {
  const hasMetrics = viewModel.metrics.length > 0;
  return (
    <aside className="relative overflow-hidden rounded-3xl border border-glass-border bg-white/85 shadow-2xl backdrop-blur-xl p-6 md:p-10">
      <div
        className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-40 w-40 translate-y-1/3 translate-x-1/4 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {viewModel.eyebrow}
        </div>
        {viewModel.pilotTitle && (
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Active example — {viewModel.pilotTitle}
          </p>
        )}
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold text-ink text-balance">
            {viewModel.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {viewModel.summary}
          </p>
        </div>

        {(hasMetrics || viewModel.metricSummary) && (
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-50/70 p-5">
            {hasMetrics && (
              <div className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                Snapshot metrics
              </div>
            )}
            {hasMetrics && (
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {viewModel.metrics.map(metric => (
                  <div key={metric.label} className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">
                      {metric.value}
                    </div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {viewModel.metricSummary && (
              <p className="mt-4 text-xs text-muted-foreground text-pretty">
                {viewModel.metricSummary}
              </p>
            )}
          </div>
        )}

        <ul className="space-y-3" role="list">
          {viewModel.bulletPoints.map(point => (
            <li
              key={point}
              className="flex items-start gap-2 rounded-2xl border border-glass-border bg-white/80 p-3"
            >
              <span className="text-primary mt-1" aria-hidden="true">
                ✓
              </span>
              <span className="text-sm text-ink leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={viewModel.primaryCta.href}
            className="btn-primary w-full sm:w-auto text-base"
          >
            {viewModel.primaryCta.label} <span>→</span>
          </Link>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:justify-end">
            {viewModel.roiLink && (
              <RoiPrefillLink
                href={viewModel.roiLink.href}
                pilotId={viewModel.roiLink.pilotId}
                analyticsContext={viewModel.roiLink.analyticsContext}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
              >
                {viewModel.roiLink.label}
                <span aria-hidden>→</span>
              </RoiPrefillLink>
            )}
            {viewModel.secondaryLink && (
              <Link
                href={viewModel.secondaryLink.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
              >
                {viewModel.secondaryLink.label}
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

function PilotTile({
  pilot,
  isActive,
  onActivate,
}: {
  pilot: PilotItem;
  isActive: boolean;
  onActivate: () => void;
}) {
  const shortlist = [...pilot.target.slice(0, 1), ...pilot.scope.slice(0, 1)];

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

  const badge =
    pilot.id === 'assistant'
      ? 'Customer + Staff'
      : pilot.id === 'ops'
        ? 'Ops Automation'
        : 'KPI Dashboards';

  return (
    <article
      role="listitem"
      className={`card-glass glass-liquid h-full flex flex-col justify-between gap-6 p-6 md:p-7 focus-within:ring-2 focus-within:ring-primary/30 transition-all duration-300 ${
        isActive ? 'border-primary/40 shadow-2xl' : ''
      }`}
      data-active={isActive}
      onMouseEnter={onActivate}
      onTouchStart={onActivate}
      onFocusCapture={onActivate}
    >
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wide">
          {badge}
        </div>
        <h3 className="text-xl font-semibold text-ink leading-tight text-balance">
          {pilot.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {pilot.what}
        </p>
        <ul className="space-y-2" role="list">
          {shortlist.map(item => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span aria-hidden className="mt-1 text-primary">
                <MaybeIcon emoji="✓" className="text-[12px]" />
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={pilot.cta.href}
        className="btn-secondary text-base"
        onClick={handleCtaClick}
      >
        {pilot.cta.label} <span>→</span>
      </Link>
    </article>
  );
}

function mapCaseHighlightToViewModel(): HighlightViewModel {
  return {
    eyebrow: caseHighlight.eyebrow,
    title: caseHighlight.title,
    summary: caseHighlight.summary,
    metricSummary: caseHighlight.metricSummary,
    metrics: caseHighlight.metrics,
    bulletPoints: caseHighlight.bulletPoints,
    primaryCta: caseHighlight.cta,
    secondaryLink: caseHighlight.caseLink,
    isFallback: true,
  };
}

function mapPilotHighlightToViewModel(pilot: PilotItem): HighlightViewModel {
  const highlight = pilot.highlight ?? {
    eyebrow: caseHighlight.eyebrow,
    title: pilot.title,
    summary: pilot.what,
    metrics: caseHighlight.metrics,
    bulletPoints: pilot.scope.slice(0, 3),
  };

  const roiLink = pilot.roiPreset
    ? {
        label: 'View ROI estimate',
        href: buildRoiHref(pilot.roiPreset, { pilotId: pilot.id }),
        pilotId: pilot.id,
        analyticsContext: 'home-case-highlight',
      }
    : undefined;

  return {
    eyebrow: highlight.eyebrow,
    title: highlight.title,
    summary: highlight.summary,
    metricSummary: highlight.metricSummary,
    metrics: highlight.metrics,
    bulletPoints: highlight.bulletPoints,
    primaryCta: pilot.cta,
    secondaryLink: highlight.caseLink,
    roiLink,
    pilotTitle: pilot.title,
  };
}
