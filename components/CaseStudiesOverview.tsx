import Link from 'next/link';
export function CaseStudiesOverview() {
  const cases = [
    {
      title: 'Calgary Retail: AI Assistant',
      description:
        'Deployed a GPT-powered assistant to handle FAQs, sizing, and order lookups across web + SMS.',
      stats: [
        { label: 'Faster Replies', value: '−78% RT' },
        { label: 'Deflected Tickets', value: '62%' },
      ],
    },
    {
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
    <section id="cases" className="section" aria-labelledby="cases-heading">
      <div className="container-wide text-center mb-12">
        <h2
          id="cases-heading"
          className="text-3xl md:text-4xl font-bold mb-4 gradient-title"
        >
          Calgary Case Studies
        </h2>
        <p className="max-w-xl mx-auto text-muted px-4">
          Practical outcomes from real SMB integrations
        </p>
      </div>
      <div className="container-wide grid gap-6 md:gap-8 md:grid-cols-2 px-4">
        {cases.map((c, index) => (
          <div
            key={c.title}
            className="card-glass overflow-hidden p-0 group hover:scale-105 transition-transform duration-300"
            role="article"
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
              <p className="text-muted mb-4 leading-relaxed">{c.description}</p>
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
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/cases"
          className="btn-primary min-h-[44px]"
          aria-label="View all case studies"
        >
          See all case studies <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
