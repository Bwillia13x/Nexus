import Link from 'next/link';
import AssistantDemo from '@/components/AssistantDemo';
import RoiPrefillLink from '@/components/RoiPrefillLink';
import PageBackground from '@/components/PageBackground';
import {
  hero,
  playbooks,
  methods,
  artifacts,
  methodDefinitions,
  faq,
  cohort,
  methodCardsTitle,
  type PlaybookPreviewStep,
} from './content';
import { buildRoiHref } from '@/lib/roi';

export const metadata = {
  title: 'Pilot Playbooks & Example Outcomes — Prairie Signal',
  description:
    "Fixed-scope pilots you can run in 30 days—what we build, how we measure, and the artifacts you'll receive. Calgary AI services for small businesses.",
};

export default function CasesIndexPage() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Background System */}
      <PageBackground />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="text-center mb-20">
          <h1 className="text-display font-bold mb-10 gradient-title-animated">
            {hero.title}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted leading-relaxed mb-8">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {hero.badges.map((badge, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {hero.ctas.map((cta, index) => (
              <Link
                key={index}
                href={cta.href}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold shadow-e3 hover:shadow-e4 transition-all duration-300 hover:-translate-y-0.5 ${
                  cta.primary
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-glass backdrop-blur-lg border border-glass-border text-ink hover:bg-glass-hover'
                }`}
              >
                <span>{cta.label}</span>
                {cta.primary && <span className="text-xl">→</span>}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted/70 mt-8 italic max-w-2xl mx-auto">
            {hero.footnote}
          </p>
        </div>
      </section>

      <div className="px-4 pb-8">
        <nav
          aria-label="Page outline"
          className="mx-auto max-w-4xl md:sticky md:top-32 md:z-20"
        >
          <div className="flex justify-center">
            <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-3 rounded-full border border-glass-border bg-glass-2/70 backdrop-blur-lg px-4 py-2 shadow-sm">
              {[
                { label: 'Playbooks', href: '#playbooks' },
                { label: 'Measurement', href: '#measurement' },
                { label: 'Method Glossary', href: '#methods' },
                { label: 'Artifacts', href: '#artifacts' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Cohort', href: '#cohort' },
              ].map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="chip text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Playbooks Section */}
      <section id="playbooks" className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {playbooks.map((playbook, index) => (
              <div key={playbook.id} className="relative">
                <details
                  className="group rounded-4xl border border-glass-border bg-glass backdrop-blur-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  open={index === 0}
                >
                  <summary className="summary-reset flex flex-col gap-6 p-8 md:p-12 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl md:text-4xl rounded-3xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                          {index + 1}
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-ink">
                            {playbook.name}
                          </h2>
                          <p className="text-muted leading-relaxed max-w-2xl text-base md:text-lg">
                            {playbook.what}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground lg:ml-auto">
                        <span className="font-medium">View details</span>
                        <span
                          aria-hidden="true"
                          className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-glass-border bg-glass transition-transform duration-300 group-open:rotate-180"
                        >
                          ⌃
                        </span>
                      </div>
                    </div>
                  </summary>
                  <div className="px-8 pb-10 md:px-12 md:pb-12 space-y-10 border-t border-glass-border">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-ink">
                          What We Measure
                        </h3>
                        <ul className="space-y-3">
                          {playbook.measure.map((measure, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-muted"
                            >
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                                <span className="text-white text-xs">📊</span>
                              </div>
                              <span>{measure}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-ink">
                          What You Get
                        </h3>
                        <ul className="space-y-3">
                          {playbook.deliverables.map((deliverable, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-muted"
                            >
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center mt-0.5">
                                <span className="text-white text-xs">📄</span>
                              </div>
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-ink">
                          Project Details
                        </h3>
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-2xl">⏱️</span>
                              <span className="font-semibold text-ink">
                                Timeline
                              </span>
                            </div>
                            <p className="text-muted">{playbook.timeline}</p>
                          </div>
                          <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-2xl">💰</span>
                              <span className="font-semibold text-ink">
                                Price Range
                              </span>
                            </div>
                            <p className="text-2xl font-bold text-ink">
                              {playbook.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {playbook.previewSteps &&
                    playbook.previewSteps.length > 0 ? (
                      <PlaybookPreview steps={playbook.previewSteps} />
                    ) : null}

                    {playbook.demo ? (
                      <div className="rounded-3xl border border-glass-border bg-white/70 backdrop-blur-xl p-6 md:p-8">
                        <AssistantDemo
                          title={playbook.demo.title}
                          helper={playbook.demo.helper}
                          transcript={playbook.demo.transcript as any}
                        />
                      </div>
                    ) : null}

                    <div className="text-center space-y-3">
                      <Link
                        href={playbook.cta.href}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <span>{playbook.cta.label}</span>
                      </Link>
                      {playbook.roiPreset ? (
                        <RoiPrefillLink
                          href={buildRoiHref(playbook.roiPreset, {
                            pilotId: playbook.id,
                          })}
                          pilotId={playbook.id}
                          analyticsContext="cases-playbook"
                          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                        >
                          Prefill ROI estimate
                          <span aria-hidden>→</span>
                        </RoiPrefillLink>
                      ) : null}
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Measure Outcomes */}
      <section id="measurement" className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border border-glass-border bg-glass backdrop-blur-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-ink">
              {methods.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {methods.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-muted">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Method Cards */}
      <section id="methods" className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ink">
            {methodCardsTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodDefinitions.map((method, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-glass backdrop-blur-lg border border-glass-border shadow-lg"
              >
                <h3 className="font-semibold text-ink mb-2">{method.term}</h3>
                <p className="text-muted text-sm">{method.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Artifacts */}
      <section id="artifacts" className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ink">
            {artifacts.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {artifacts.items.map((artifact, index) => (
              <a
                key={index}
                href={artifact.href}
                className="p-6 rounded-xl bg-glass backdrop-blur-lg border border-glass-border shadow-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">📄</span>
                </div>
                <span className="text-ink font-medium">{artifact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about our pilot process and outcomes
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="card-glass group hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="text-primary font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.q}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Cohort */}
      <section id="cohort" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="card-glass text-center group transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-title">
                {cohort.title}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {cohort.text}
            </p>
            <Link
              href={cohort.cta.href}
              className="btn-primary inline-flex items-center gap-3"
            >
              <span>{cohort.cta.label}</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlaybookPreview({ steps }: { steps: PlaybookPreviewStep[] }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-semibold">
          🎬
        </div>
        <h3 className="text-xl font-semibold text-ink">
          How the pilot unfolds
        </h3>
      </div>
      <ol className="space-y-4" role="list">
        {steps.map((step, index) => (
          <li
            key={step.id}
            className="group rounded-2xl border border-glass-border bg-glass backdrop-blur-lg p-5 md:p-6 transition-all duration-300 hover:border-primary/40"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-ink text-pretty">
                  {step.title}
                </h4>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              {step.description}
            </p>
            {step.outcomeHighlight && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {step.outcomeHighlight}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
