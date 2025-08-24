import Link from 'next/link';

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
      <section className="section">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-title">
              Calgary Case Studies
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-lg">
              Practical outcomes from real SMB integrations — measurable wins
              within weeks, not months.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {cases.map(c => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="card-glass p-0 block overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-secondary" />
                <div className="p-8">
                  <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-muted mb-4">{c.description}</p>
                  <div className="flex gap-6">
                    {c.stats.map(stat => (
                      <div key={stat.label} className="text-center">
                        <div className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
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
            <Link href="/contact" className="btn-primary">
              Start your project <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
