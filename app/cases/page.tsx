import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata = {
  title: 'Case Studies | Calgary AI Results — Nexus AI',
  description:
    'Real outcomes from Calgary SMB AI integrations: AI Assistant deployment and Automation Pilot delivering measurable results.',
};

export default function CasesIndexPage() {
  const cases = [
    {
      slug: 'ai-assistant-calgary-retail',
      title: 'Calgary Retail: AI Assistant',
      description:
        'Deployed a GPT-powered assistant to handle FAQs, sizing, and order lookups across web + SMS.',
      stats: [
        { label: 'Faster Replies', value: '−78% RT' },
        { label: 'Deflected Tickets', value: '62%' },
      ],
    },
    {
      slug: 'automation-pilot-ops',
      title: 'Ops: Automation Pilot',
      description:
        'Identified bottlenecks and automated weekly reporting and invoicing across tools.',
      stats: [
        { label: 'Hours Saved', value: '12+/wk' },
        { label: 'Error Rate', value: '−90%' },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-title">
              Calgary Case Studies
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-lg px-4">
              Practical outcomes from real SMB integrations — measurable wins
              within weeks, not months.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 px-4">
            {cases.map((c, index) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="card-glass p-0 block overflow-hidden group hover:scale-105 transition-transform duration-300"
                aria-labelledby={`case-${index}-title`}
              >
                <div className="h-32 md:h-48 bg-gradient-to-br from-primary to-secondary" />
                <div className="p-6 md:p-8">
                  <h3
                    id={`case-${index}-title`}
                    className="font-semibold text-lg mb-2 text-ink"
                  >
                    {c.title}
                  </h3>
                  <p className="text-muted mb-4 leading-relaxed">
                    {c.description}
                  </p>
                  <div className="flex gap-4 md:gap-6">
                    {c.stats.map((stat, statIndex) => (
                      <div key={stat.label} className="text-center flex-1">
                        <div className="text-lg md:text-xl font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                          {stat.value}
                        </div>
                        <div className="text-xs uppercase tracking-wider text-muted">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="btn-primary min-h-[44px]"
              aria-label="Start your AI transformation project"
            >
              Start your project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
