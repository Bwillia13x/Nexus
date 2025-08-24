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
    <section id="services" className="section">
      <div className="container-wide text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 gradient-title">
          What I Do for Calgary SMBs
        </h2>
        <p className="max-w-xl mx-auto text-muted">
          Practical, measurable AI integrations—built around your team and
          customers
        </p>
      </div>
      <div className="container-wide grid gap-8 md:grid-cols-3">
        {services.map(s => (
          <div key={s.title} className="card-glass">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-2xl">
              {s.icon}
            </div>
            <h3 className="font-semibold text-xl mb-3">{s.title}</h3>
            <p className="text-muted">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
