'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SpriteIcon from '@/components/ui/SpriteIcon';
import { caseHighlight, heroContent } from '../_content';
import { trackCtaClick } from '@/lib/analytics';
import { getBrandName, getLogoSrc } from '@/lib/brand';
import type { HeroProof } from '@/lib/marketing';

export default function HomeHero() {
  const brandName = getBrandName();
  const logoSrc = getLogoSrc();
  const proofMetrics = heroContent.proof?.metrics ?? [];
  const heroMedia = heroContent.proof?.media;
  const paybackMetric = proofMetrics.find(metric =>
    metric.label.toLowerCase().includes('payback')
  );
  const highlightItems = heroContent.highlights ?? [];
  const demoHighlights = [
    {
      icon: 'ps--services--automate-reporting',
      label: 'Slack digest every Monday at 8am',
    },
    {
      icon: 'ps--services--deploy-assistant',
      label: 'Auto-flags invoices that miss PO numbers',
    },
    {
      icon: 'ps--services--build-dashboards',
      label: 'Roll-up dashboard updates Sheets + Data Studio',
    },
  ];
  const handlePrimaryCtaClick = () => {
    trackCtaClick('hero_primary', heroContent.primaryCta.label, '/');
  };

  const handleSecondaryCtaClick = () => {
    trackCtaClick('hero_secondary', heroContent.secondaryCta.label, '/');
  };

  return (
    <section
      className="relative flex min-h-[90vh] items-center py-16 md:py-24"
      id="top"
      aria-labelledby="home-hero-title"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-secondary/5" />
      {/* Mesh overlay for subtle color fields */}
      <div className="absolute inset-0 -z-10 hero-mesh" />

      <div className="mx-auto max-w-container px-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] items-center">
          <div className="space-y-10">
            <div className="flex items-center gap-4 text-left">
              <div className="relative h-12 w-12 rounded-2xl border border-primary/30 bg-white/70 p-2 shadow-sm">
                <Image
                  src={logoSrc}
                  alt={`${brandName} logo mark`}
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {brandName}
              </div>
            </div>

            <div className="space-y-6 text-left">
              <h1
                id="home-hero-title"
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] gradient-title-animated text-balance"
              >
                {heroContent.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
                {heroContent.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <div className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-white/70 px-3 py-1.5">
                  <SpriteIcon
                    name="ps--hero--calgary-pin"
                    size={20}
                    className="text-primary"
                  />
                  <span className="font-medium">
                    Calgary, AB · Serving Western Canada
                  </span>
                </div>
                {paybackMetric && (
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-primary">
                    <span className="text-xs uppercase tracking-wide">
                      {paybackMetric.label}
                    </span>
                    <span className="font-semibold">{paybackMetric.value}</span>
                  </div>
                )}
              </div>

              {highlightItems.length > 0 && (
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {highlightItems.map(item => (
                    <li
                      key={item.label}
                      className="flex items-start gap-2 rounded-xl border border-glass-border bg-white/70 px-3 py-2"
                    >
                      <span className="mt-1 text-primary" aria-hidden="true">
                        ✓
                      </span>
                      <div className="leading-relaxed">
                        <span className="font-medium text-ink block">
                          {item.label}
                        </span>
                        {item.helper && (
                          <span className="text-xs text-muted-foreground">
                            {item.helper}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-6">
              <Link
                href={heroContent.primaryCta.href}
                className="btn-primary shadow-elev hover:shadow-elev-lg min-w-[220px] text-base sm:text-lg"
                onClick={handlePrimaryCtaClick}
              >
                <SpriteIcon
                  name="ps--cta--book-call_alt-calendar-check"
                  size={24}
                  className="mr-2 inline-block text-white"
                />
                {heroContent.primaryCta.label}
                <span className="ml-2">→</span>
              </Link>
              <Link
                href={heroContent.secondaryCta.href}
                className="btn-secondary shadow-elev hover:shadow-elev-lg min-w-[220px] text-base sm:text-lg"
                onClick={handleSecondaryCtaClick}
              >
                {heroContent.secondaryCta.label}
              </Link>
            </div>

            {proofMetrics.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                {proofMetrics.map(metric => (
                  <div
                    key={metric.label}
                    className="inline-flex min-w-[220px] flex-1 items-center justify-between gap-3 rounded-full border border-glass-border bg-white/70 px-4 py-2 text-sm shadow-sm backdrop-blur"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wide text-muted-foreground">
                        {metric.label}
                      </span>
                      {metric.helper && (
                        <span className="text-[11px] text-muted-foreground/80">
                          {metric.helper}
                        </span>
                      )}
                    </div>
                    <span className="text-base font-semibold text-primary">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            {heroMedia ? (
              <MediaShowcase
                media={heroMedia}
                fallback={
                  <FallbackShowcase
                    demoHighlights={demoHighlights}
                    caseStudy={{
                      eyebrow: caseHighlight.eyebrow,
                      title: caseHighlight.title,
                      metrics: caseHighlight.metrics,
                    }}
                  />
                }
              />
            ) : (
              <FallbackShowcase
                demoHighlights={demoHighlights}
                caseStudy={{
                  eyebrow: caseHighlight.eyebrow,
                  title: caseHighlight.title,
                  metrics: caseHighlight.metrics,
                }}
              />
            )}
          </div>
        </div>

        <div className="mt-16 flex justify-center" aria-hidden="true">
          <div className="scroll-cue">
            <span className="icon text-muted-foreground text-sm">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FallbackShowcaseProps {
  demoHighlights: { icon: string; label: string }[];
  caseStudy: {
    eyebrow: string;
    title: string;
    metrics: { label: string; value: string }[];
  };
}

function FallbackShowcase({
  demoHighlights,
  caseStudy,
}: FallbackShowcaseProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-glass-border bg-white/80 shadow-2xl backdrop-blur-xl p-6 sm:p-8">
      <div
        className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-24 h-56 w-56 rounded-full bg-secondary/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {caseStudy.eyebrow}
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-ink">{caseStudy.title}</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {caseStudy.metrics.map(metric => (
              <div
                key={metric.label}
                className="rounded-2xl border border-glass-border bg-white/80 p-3 text-center"
              >
                <div className="text-lg font-semibold text-primary">
                  {metric.value}
                </div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {demoHighlights.map(highlight => (
            <div
              key={highlight.label}
              className="flex items-start gap-3 rounded-2xl border border-glass-border bg-white/70 p-3"
            >
              <div
                className="rounded-xl bg-primary/10 p-2 text-primary"
                aria-hidden="true"
              >
                <SpriteIcon name={highlight.icon} size={20} />
              </div>
              <p className="text-sm text-ink leading-relaxed">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-emerald-400/40 bg-emerald-50/80 p-4">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-sm font-semibold text-emerald-700">
                Time saved this quarter
              </div>
              <div className="text-3xl font-bold text-emerald-600">
                Tracked in your dashboard
              </div>
            </div>
            <div className="text-xs text-muted-foreground text-right">
              3-person ops team · Calgary
            </div>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/70">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
}

type HeroProofMedia = HeroProof['media'];

interface MediaShowcaseProps {
  media: HeroProofMedia;
  fallback: ReactNode;
}

function MediaShowcase({ media, fallback }: MediaShowcaseProps) {
  if (!media) {
    return <>{fallback}</>;
  }

  if (media.type === 'video') {
    return (
      <figure className="relative overflow-hidden rounded-3xl border border-glass-border bg-black shadow-2xl backdrop-blur-xl">
        <video
          className="h-full w-full"
          src={media.src}
          poster={media.poster}
          controls
          playsInline
          autoPlay={media.autoPlay}
          loop={media.loop}
          muted={media.muted ?? true}
        />
        {media.caption && (
          <figcaption className="px-6 py-4 text-xs text-muted-foreground bg-white/80">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (media.type === 'image') {
    return (
      <figure className="relative overflow-hidden rounded-3xl border border-glass-border bg-white/80 shadow-2xl backdrop-blur-xl">
        <Image
          src={media.src}
          alt={media.alt}
          width={896}
          height={560}
          className="h-full w-full object-cover"
          priority
        />
        {media.caption && (
          <figcaption className="px-6 py-4 text-xs text-muted-foreground">
            {media.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return <>{fallback}</>;
}
