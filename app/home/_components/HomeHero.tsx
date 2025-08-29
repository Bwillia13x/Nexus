'use client';

import Link from 'next/link';
import Image from 'next/image';
import { heroContent } from '../_content';
import { trackCtaClick } from '@/lib/analytics';
import { getBrandName } from '@/lib/brand';

export default function HomeHero() {
  const brandName = getBrandName();
  const handlePrimaryCtaClick = () => {
    trackCtaClick('hero_primary', heroContent.primaryCta.label, '/');
  };

  const handleSecondaryCtaClick = () => {
    trackCtaClick('hero_secondary', heroContent.secondaryCta.label, '/');
  };

  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center py-20 md:py-28"
      id="top"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-secondary/5" />
      {/* Mesh overlay for subtle color fields */}
      <div className="absolute inset-0 -z-10 hero-mesh" />

      <div className="mx-auto max-w-container px-4">
        <div className="text-center">
          {/* Logo with text */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative h-48 w-[400px] md:h-64 md:w-[520px] lg:h-80 lg:w-[640px] mx-auto">
              <Image
                src="/images/slate_prairiesignal_logo(withtext).png"
                alt={`${brandName} Logo`}
                fill
                className="object-contain"
                priority
                sizes="(min-width:1024px) 640px, (min-width:768px) 520px, 400px"
              />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 gradient-title-animated px-4">
            {heroContent.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            {heroContent.subtitle}
          </p>

          {/* CTA buttons */}
          <div className="mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href={heroContent.primaryCta.href}
                className="btn-primary shadow-elev hover:shadow-elev-lg min-w-[200px] sm:min-w-[240px] text-base sm:text-lg"
                onClick={handlePrimaryCtaClick}
              >
                {heroContent.primaryCta.label}
                <span className="ml-2">→</span>
              </Link>
              <Link
                href={heroContent.secondaryCta.href}
                className="btn-secondary shadow-elev hover:shadow-elev-lg min-w-[200px] sm:min-w-[240px] text-base sm:text-lg"
                onClick={handleSecondaryCtaClick}
              >
                {heroContent.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="scroll-cue" aria-hidden="true">
            <span className="icon text-muted-foreground text-sm">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
