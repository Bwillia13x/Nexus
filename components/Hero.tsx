'use client';

import Link from 'next/link';
import Image from 'next/image';
import { homeContent } from '@/app/_content/home';
import { getBrandName, getLogoSrc } from '@/lib/brand';

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
        Get the AI Readiness Checklist
      </Link>
    </div>
  );
}

export function Hero() {
  const brandName = getBrandName();
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center section pt-12 pb-20"
      id="top"
    >
      <div className="container-wide max-w-4xl text-center">
        {/* Logo at the top with better spacing */}
        <div className="flex justify-center mb-8 md:mb-12">
          {(() => {
            const logoSrc = getLogoSrc();
            return (
              <div className="relative h-28 w-[300px] md:h-36 md:w-[380px] lg:h-40 lg:w-[440px] mx-auto">
                <Image
                  src={logoSrc}
                  alt={`${brandName} Logo`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(min-width:1024px) 440px, (min-width:768px) 380px, 300px"
                />
              </div>
            );
          })()}
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
