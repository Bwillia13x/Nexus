import Link from 'next/link';
import {
  hero,
  playbooks,
  methods,
  artifacts,
  methodDefinitions,
  faq,
  cohort,
  methodCardsTitle,
} from './content';

export const metadata = {
  title: 'Pilot Playbooks & Example Outcomes — Nexus AI',
  description:
    "Fixed-scope pilots you can run in 30 days—what we build, how we measure, and the artifacts you'll receive. Calgary AI services for SMBs.",
};

export default function CasesIndexPage() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Background System */}
      <div className="fixed inset-0 -z-10 overflow-hidden ambient-orbs">
        {/* Primary background orb - top left */}
        <div className="ambient-orb absolute -top-40 -left-40 w-[780px] h-[780px] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 via-secondary/5 to-transparent blur-3xl" />

        {/* Secondary background orb - bottom right */}
        <div className="ambient-orb ambient-orb--slow absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-secondary/20 via-secondary/10 via-primary/5 to-transparent blur-3xl" />

        {/* Tertiary orb for added depth */}
        <div className="ambient-orb absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-primary/15 via-transparent to-secondary/8 blur-2xl opacity-60" />

        {/* Vignette overlay for contrast */}
        <div className="ambient-vignette" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-10 gradient-title-animated">
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
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
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

      {/* Playbooks Section */}
      <section id="playbooks" className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {playbooks.map((playbook, index) => (
              <div key={playbook.id} className="relative">
                {/* Playbook Card */}
                <div className="p-8 md:p-12 rounded-4xl border border-glass-border bg-glass backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 flex items-center justify-center text-4xl rounded-3xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                          {playbook.name}
                        </h2>
                        <p className="text-muted text-lg leading-relaxed max-w-2xl">
                          {playbook.what}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* What We Measure */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold mb-4 text-ink">
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

                    {/* Deliverables */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold mb-4 text-ink">
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

                    {/* Project Details */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold mb-4 text-ink">
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

                  {/* Call to Action */}
                  <div className="text-center">
                    <Link
                      href={playbook.cta.href}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <span>{playbook.cta.label}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Measure Outcomes */}
      <section className="relative py-16 px-4">
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
      <section className="relative py-16 px-4">
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
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-ink">
            {artifacts.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {artifacts.items.map((artifact, index) => (
              <a
                key={index}
                href={artifact.href}
                className="p-6 rounded-xl bg-glass backdrop-blur-lg border border-glass-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
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
      <section className="relative py-20 md:py-28">
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
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="card-glass text-center group hover:shadow-xl transition-all duration-300">
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
