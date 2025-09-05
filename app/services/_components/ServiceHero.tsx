'use client';

import Link from 'next/link';
import { heroContent } from '../_content';
import Image from 'next/image';

export default function ServiceHero() {
  return (
    <section
      className="relative py-20 md:py-28"
      aria-labelledby="services-hero-heading"
      aria-describedby="services-hero-subtitle"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-container px-4 text-center">
        {/* Main heading */}
        <h1
          id="services-hero-heading"
          className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-title text-balance text-pretty"
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
          <Link href={heroContent.primaryCta.href} className="btn-primary">
            <Image
              src="/icons/cta/book-call_alt-calendar-check.png"
              alt="Book a call"
              width={24}
              height={24}
              className="mr-2 inline-block"
            />
            {heroContent.primaryCta.text}
          </Link>
          <Link href={heroContent.secondaryCta.href} className="btn-outline">
            {heroContent.secondaryCta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
