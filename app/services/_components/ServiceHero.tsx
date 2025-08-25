'use client';

import Link from 'next/link';
import { heroContent } from '../_content';

export default function ServiceHero() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-500/5 via-transparent to-transparent" />

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
            <span
              key={badge}
              className="rounded-full border px-3 py-1 text-sm bg-white/80 shadow"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={heroContent.primaryCta.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-600 text-white font-semibold shadow-elev hover:shadow-elev-lg hover:translate-y-[-1px] transition-all duration-200"
          >
            {heroContent.primaryCta.text}
          </Link>
          <Link
            href={heroContent.secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-brand-500/30 text-brand-600 bg-white/80 backdrop-blur-sm font-semibold shadow-elev hover:shadow-elev-lg hover:translate-y-[-1px] transition-all duration-200"
          >
            {heroContent.secondaryCta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
