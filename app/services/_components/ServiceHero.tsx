'use client';

import Link from 'next/link';
import { heroContent } from '../_content';
import SpriteIcon from '@/components/ui/SpriteIcon';
import Image from 'next/image';

export default function ServiceHero() {
  return (
    <section
      className="relative py-20 md:py-28"
      aria-labelledby="services-hero-heading"
      aria-describedby="services-hero-subtitle"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />

      <div className="mx-auto max-w-container px-4">
        <div className="card-hero hero-reveal text-center">
          <div className="eyebrow mb-2" aria-hidden="true">
            AI Services
          </div>
          {/* Main heading */}
          <h1
            id="services-hero-heading"
            className="text-display gradient-title text-balance text-pretty"
          >
            {heroContent.title}
          </h1>

          {/* Subtitle */}
          <p
            id="services-hero-subtitle"
            className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            {heroContent.subtitle}
          </p>

          {/* Badges */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {heroContent.badges.map(badge => (
              <span key={badge} className="chip">
                {badge}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={heroContent.primaryCta.href}
              className="btn-primary shadow-e3 hover:shadow-e4"
            >
              <SpriteIcon
                name="ps--cta--book-call_alt-calendar-check"
                size={24}
                className="mr-2 inline-block"
              />
              {heroContent.primaryCta.text}
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="btn-outline shadow-e3 hover:shadow-e4"
            >
              {heroContent.secondaryCta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
