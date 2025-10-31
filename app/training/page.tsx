import Link from 'next/link';
import { trainingHero, offerings, playbooksBlock } from './_content';
import FeatureStrip from '@/components/FeatureStrip';
import CTABox from '@/components/CTABox';
import PageBackground from '@/components/PageBackground';

export const metadata = {
  title: 'Training & AI Literacy | Prairie Signal',
  description:
    'Team workshops, simple playbooks, and prompting clinics for Calgary small businesses — in plain English.',
};

export default function TrainingPage() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Page Background */}
      <PageBackground />

      {/* Hero */}
      <section
        className="relative py-20 md:py-28"
        aria-labelledby="training-hero-heading"
        aria-describedby="training-hero-subtitle"
      >
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hero hero-reveal text-center">
            <div className="eyebrow mb-2" aria-hidden="true">
              AI Training
            </div>
            <h1
              id="training-hero-heading"
              className="text-display gradient-title text-balance text-pretty"
            >
              {trainingHero.title}
            </h1>
            <p
              id="training-hero-subtitle"
              className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty"
            >
              {trainingHero.subtitle}
            </p>

            {trainingHero.badges?.length ? (
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {trainingHero.badges.map(badge => {
                  const key = badge.toLowerCase().replace(/[^a-z]/g, '');
                  const emojiMap: Record<string, string> = {
                    plainenglish: '✅',
                    safebydefault: '🛡️',
                    rolebased: '💼',
                  };
                  const emoji = emojiMap[key];
                  return (
                    <span
                      key={badge}
                      className="chip inline-flex items-center gap-2"
                    >
                      {emoji ? (
                        <span
                          aria-hidden="true"
                          className="text-base leading-none"
                        >
                          {emoji}
                        </span>
                      ) : null}
                      {badge}
                    </span>
                  );
                })}
              </div>
            ) : null}
          </div>

          <FeatureStrip
            ariaLabel="Training Highlights"
            items={[
              { title: 'Team Clinics', caption: 'Hands-on workshops' },
              { title: 'Prompt Coaching', caption: 'Live examples' },
              { title: 'Role Playbooks', caption: 'Scripts your team keeps' },
              { title: 'On-site or Remote', caption: 'We fit your schedule' },
            ]}
          />
        </div>
      </section>

      {/* Offerings */}
      <section
        className="py-12 md:py-16"
        role="region"
        aria-labelledby="offerings-heading"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 id="offerings-heading" className="sr-only">
            Offerings
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map(offering => (
              <article
                key={offering.id}
                className="card-glass glass-liquid p-6 md:p-8"
                aria-labelledby={`${offering.id}-title`}
              >
                <header>
                  <h3
                    id={`${offering.id}-title`}
                    className="text-2xl font-bold mb-2 text-balance"
                  >
                    {offering.title}
                  </h3>
                </header>
                <p className="text-muted mb-4 text-pretty">
                  {offering.description}
                </p>
                <ul className="text-sm text-muted space-y-2 mb-4">
                  {offering.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
                <Link
                  href={offering.cta.href}
                  className={
                    offering.cta.variant === 'secondary'
                      ? 'btn-secondary'
                      : offering.cta.variant === 'outline'
                        ? 'btn-outline'
                        : 'btn-primary'
                  }
                  aria-label={offering.cta.label.replace(/→/g, '').trim()}
                >
                  {offering.cta.label}
                </Link>
              </article>
            ))}

            {/* Playbooks */}
            <article
              className="card-glass glass-liquid p-6 md:p-8 md:col-span-2"
              aria-labelledby="playbooks-title"
            >
              <header>
                <h3 id="playbooks-title" className="text-2xl font-bold mb-2">
                  {playbooksBlock.title}
                </h3>
              </header>
              <p className="text-muted mb-4 text-pretty">
                {playbooksBlock.description}
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href={playbooksBlock.primary.href}
                  className="btn-primary"
                >
                  {playbooksBlock.primary.label}
                </Link>
                {playbooksBlock.secondary ? (
                  <Link
                    href={playbooksBlock.secondary.href}
                    className="btn-outline"
                  >
                    {playbooksBlock.secondary.label}
                  </Link>
                ) : null}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <CTABox />
        </div>
      </section>
    </div>
  );
}
