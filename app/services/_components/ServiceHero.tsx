'use client';

import Link from 'next/link';
import { heroContent } from '../_content';

export default function ServiceHero() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-container px-4 text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {heroContent.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
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
