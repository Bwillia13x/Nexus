export function ServicesOverview() {
  const services = [
    {
      icon: '🤖',
      title: 'AI Assistant Setup',
      description:
        'Deploy GPT‑powered assistants for support, sales, and internal teams. Calgary‑ready, privacy‑aware, and tailored to your workflows.',
    },
    {
      icon: '⚙️',
      title: 'Automation Audit + Pilot',
      description:
        'Map bottlenecks across your processes and launch a low‑risk pilot that saves hours per week within 30 days.',
    },
    {
      icon: '📊',
      title: 'Analytics Quickstart',
      description:
        'Connect your tools and ship dashboards that answer the questions Calgary operators actually ask—fast.',
    },
  ];
  return (
    <section
      id="services"
      className="section"
      aria-labelledby="services-heading"
    >
      <div className="container-wide text-center mb-12">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold mb-4 gradient-title"
        >
          What I Do for Calgary SMBs
        </h2>
        <p className="max-w-xl mx-auto text-muted px-4">
          Practical, measurable AI integrations—built around your team and
          customers
        </p>
      </div>
      <div className="container-wide grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {services.map((s, index) => (
          <div
            key={s.title}
            className="card-glass group hover:scale-105 transition-transform duration-300"
            role="article"
            aria-labelledby={`service-${index}-title`}
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-2xl group-hover:scale-110 transition-transform duration-300">
              {s.icon}
            </div>
            <h3
              id={`service-${index}-title`}
              className="font-semibold text-lg md:text-xl mb-3 text-ink"
            >
              {s.title}
            </h3>
            <p className="text-muted leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
