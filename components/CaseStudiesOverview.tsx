import Link from 'next/link';
export function CaseStudiesOverview() {
  const cases = [
    {
      title: 'Calgary Retail: AI Assistant',
      description: 'Deployed a GPT-powered assistant to handle FAQs, sizing, and order lookups across web + SMS.',
      stats: [
        { label: 'Faster Replies', value: '−78% RT' },
        { label: 'Deflected Tickets', value: '62%' },
      ],
    },
    {
      title: 'Ops: Automation Pilot',
      description: 'Identified bottlenecks and automated weekly reporting and invoicing across tools.',
      stats: [
        { label: 'Hours Saved', value: '12+/wk' },
        { label: 'Error Rate', value: '−90%' },
      ],
    },
  ];
  return (
    <section id="cases" className="section">
      <div className="container-wide text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 gradient-title">
          Calgary Case Studies
        </h2>
        <p className="max-w-xl mx-auto text-muted">
          Practical outcomes from real SMB integrations
        </p>
      </div>
      <div className="container-wide grid gap-8 md:grid-cols-2">
        {cases.map((c) => (
          <div
            key={c.title}
            className="card-glass overflow-hidden p-0"
          >
            <div className="h-48 bg-gradient-to-br from-primary to-secondary" />
            <div className="p-8">
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-muted mb-4">{c.description}</p>
              <div className="flex gap-6">
                {c.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/cases"
          className="btn-primary"
        >
          See all case studies <span>→</span>
        </Link>
      </div>
    </section>
  );
}