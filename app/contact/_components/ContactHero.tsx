'use client';

import { CONTACT_CONTENT } from '../_content';
import { trackCtaClick } from '@/lib/analytics';

export function ContactHero() {
  const handleCtaClick = (ctaId: string) => {
    trackCtaClick(ctaId, undefined, '/contact');
  };

  return (
    <section className="relative py-20 md:py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-1/10 via-brand-2/5 via-secondary/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-secondary/20 to-primary/10 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <div className="text-center">
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              {CONTACT_CONTENT.hero.eyebrow}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-title">
            {CONTACT_CONTENT.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            {CONTACT_CONTENT.hero.subtitle}
          </p>

          {/* Badge Row */}
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            {CONTACT_CONTENT.hero.badges.map((badge, index) => (
              <div
                key={index}
                className="chip group cursor-pointer transition-all duration-200 hover:scale-105"
                onClick={() => handleCtaClick('badge_' + index)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCtaClick('badge_' + index);
                  }
                }}
                aria-label={`Learn more about ${badge.text}`}
              >
                <span className="text-sm font-medium">
                  {badge.icon} {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleCtaClick('book_call')}
              className="btn-primary group"
              aria-label="Book a discovery call"
            >
              <span className="flex items-center gap-2">
                📅 Book Discovery Call
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </span>
            </button>

            <button
              onClick={() => handleCtaClick('badge_menu')}
              className="btn-secondary"
              aria-label="View pilot menu options"
            >
              <span className="flex items-center gap-2">
                🎯 View Pilot Menu
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
