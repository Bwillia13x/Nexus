'use client';

import Link from 'next/link';
import Image from 'next/image';
import { homeContent } from '@/app/_content/home';

function HeroCTAs() {
  const handlePrimaryCtaClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        cta: 'hero_primary',
        page: 'home',
      });
    }
  };

  const handleSecondaryCtaClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        cta: 'hero_secondary',
        page: 'home',
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
      <Link
        href={homeContent.hero.primaryCta.href}
        className="btn-primary text-base sm:text-lg px-8 py-4 min-w-[200px] sm:min-w-[240px] justify-center"
        onClick={handlePrimaryCtaClick}
      >
        {homeContent.hero.primaryCta.label}
        <span className="ml-2">→</span>
      </Link>
      <Link
        href={homeContent.hero.secondaryCta.href}
        className="btn-outline text-base sm:text-lg px-8 py-4 min-w-[200px] sm:min-w-[240px] justify-center"
        onClick={handleSecondaryCtaClick}
      >
        See 30-day pilot menu
      </Link>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center section pt-12 pb-20"
      id="top"
    >
      <div className="container-wide max-w-4xl text-center">
        {/* Logo at the top with better spacing */}
        <div className="flex justify-center mb-8 md:mb-12">
          <Image
            src="/images/Nexus_Logo.png"
            alt="Nexus AI Logo"
            width={400}
            height={160}
            className="h-28 md:h-36 lg:h-40 w-auto"
            priority
          />
        </div>

        {/* Main headline with improved spacing */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 gradient-title-animated px-4">
          {homeContent.hero.title}
        </h1>

        {/* Subtitle with better spacing and width */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          {homeContent.hero.subtitle}
        </p>

        {/* CTA buttons with improved layout */}
        <div className="mb-12 md:mb-16">
          <HeroCTAs />
        </div>

        {/* Scroll cue with better positioning */}
        <div className="scroll-cue" aria-hidden="true">
          <span className="icon text-muted text-sm">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
