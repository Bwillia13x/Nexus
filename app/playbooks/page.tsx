import Link from 'next/link';
import Image from 'next/image';
import LeadMagnet from '@/components/LeadMagnet';
import { hero, resources, checklist } from './_content';

export const metadata = {
  title: 'Playbooks & Templates | Prairie Signal',
  description:
    'Download simple resources: AI Readiness Checklist, Tool Comparison Sheet, Prompting Guide, Automation How‑To, and Savings Starter Sheet.',
};

export default function PlaybooksPage() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Page Background */}
      <div className="page-background">
        <div className="primary-orb" />
        <div className="secondary-orb" />
        <div className="accent-orb" />
        <div className="ambient-vignette" />
        <div className="wave-layer" aria-hidden="true" />
      </div>

      {/* Hero */}
      <section
        className="relative py-20 md:py-28"
        aria-labelledby="playbooks-hero-title"
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/icons/playbooks/hero/playbooks-download.png"
              alt="Playbooks"
              width={72}
              height={72}
            />
          </div>
          <h1
            id="playbooks-hero-title"
            className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-title text-balance"
          >
            {hero.title}
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            {hero.subtitle}
          </p>
          {hero.badges && hero.badges.length > 0 ? (
            <nav aria-label="Highlights" className="mt-5 flex justify-center">
              <ul
                role="list"
                className="flex flex-wrap items-center justify-center gap-2"
              >
                {hero.badges.map((b, i) => (
                  <li key={i}>
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-foreground/80 shadow-sm">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-8 md:py-12" aria-labelledby="resources-title">
        <div className="mx-auto max-w-5xl px-4 grid gap-6 md:grid-cols-2">
          <header className="sr-only">
            <h2 id="resources-title">Downloads</h2>
          </header>
          {resources.map(r => (
            <article
              key={r.id}
              className="card-glass glass-liquid p-6 flex flex-col"
              aria-labelledby={`${r.id}-title`}
            >
              <header>
                {(() => {
                  const map: Record<string, string> = {
                    'ai-readiness-checklist':
                      '/icons-svg/playbooks/cards/readiness-checklist_clipboard-shield.svg',
                    'tool-comparison-sheet':
                      '/icons-svg/playbooks/cards/tool-comparison_grid-shield.svg',
                    'prompting-guide':
                      '/icons-svg/playbooks/cards/prompting-guide_chat-wand.svg',
                    'automation-howto-starter':
                      '/icons-svg/playbooks/cards/automation-howto_doc-gear-arrow.svg',
                    'savings-starter-sheet':
                      '/icons-svg/playbooks/cards/savings-starter_calculator-trend.svg',
                  };
                  const icon = map[r.id];
                  return icon ? (
                    <div className="mb-3">
                      <Image src={icon} alt="" width={40} height={40} />
                    </div>
                  ) : null;
                })()}
                <h3 id={`${r.id}-title`} className="text-xl font-bold mb-2">
                  {r.title}
                </h3>
              </header>
              <p className="text-muted mb-4">{r.description}</p>
              <div className="mt-auto">
                <Link
                  href={r.cta.href}
                  className="btn-primary"
                  aria-label={r.cta.label.replace(/→/g, '').trim()}
                >
                  {r.cta.label}{' '}
                  <span className="ml-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Checklist capture */}
      <section
        id={checklist.id}
        className="py-12 md:py-16"
        aria-labelledby="checklist-title"
      >
        <div className="mx-auto max-w-4xl px-4">
          <h2
            id="checklist-title"
            className="text-3xl font-bold text-center mb-8"
          >
            {checklist.title}
          </h2>
          <LeadMagnet />
        </div>
      </section>
    </div>
  );
}
