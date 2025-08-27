import Link from 'next/link';

export const metadata = {
  title: 'Case Study: Calgary Retail AI Assistant | Nexus AI',
  description:
    'Assistant powered by Generative Pretrained Transformer (GPT) for a Calgary retail small business: faster replies, more tickets handled by the assistant, across website and text messaging (SMS), with measurable return on investment (ROI).',
};

export default function CaseAIAssistantCalgaryRetail() {
  const stats = [
    { label: 'Faster Replies', value: '−78% response time' },
    { label: 'Deflected Tickets', value: '62%' },
    { label: 'Time to Value', value: '3 weeks' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent filter blur-3xl animate-pulse" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-black via-black/70 to-black/50 text-transparent bg-clip-text">
            Calgary Retail: Artificial Intelligence (AI) Assistant
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Deployed an assistant powered by Generative Pretrained Transformer
            (GPT) to handle frequently asked questions (FAQs), sizing, and order
            lookups across the website and text messaging (SMS). Includes safety
            rules, handoff to a person, and analytics.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {stats.map(s => (
              <div
                key={s.label}
                className="p-4 rounded-2xl border border-glass-border bg-glass backdrop-blur-xl"
              >
                <div className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-center">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wide text-muted text-center">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4">Client Context</h2>
              <ul className="space-y-3 text-muted">
                <li>
                  • Direct-to-consumer (DTC) retailer with seasonal spikes and a
                  small support team
                </li>
                <li>
                  • High volume of repeat questions (shipping, returns, sizing)
                </li>
                <li>
                  • Goal: reduce response time and free staff for escalations
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <ul className="space-y-3 text-muted">
                <li>
                  • Assistant configured with policies, catalog, and past
                  tickets
                </li>
                <li>
                  • Web chat and text messaging (SMS) with safety rules and tone
                  controls
                </li>
                <li>• Escalation to a person with a transcript preview</li>
                <li>
                  • Outcome analytics: tickets handled by the assistant
                  (deflection), customer satisfaction (CSAT) score, and handoff
                  rate
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Stack & Integrations</h3>
              <ul className="text-muted space-y-2">
                <li>• Next.js widget and UI components</li>
                <li>• Twilio for text messaging (SMS)</li>
                <li>• OpenAI or Azure OpenAI</li>
                <li>• PostgreSQL for logs and analytics</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Access and Data Rules</h3>
              <ul className="text-muted space-y-2">
                <li>
                  • Redact personally identifiable information (PII) in logs
                </li>
                <li>• Clear prompt boundaries and refusal rules</li>
                <li>• Weekly reviews and model updates</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Timeline</h3>
              <ul className="text-muted space-y-2">
                <li>• Week 1: ingest knowledge & prototype</li>
                <li>• Week 2: channel rollout and safety rules</li>
                <li>• Week 3: analytics + tuning</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-primary to-secondary shadow-lg hover:-translate-y-1 transition"
            >
              Discuss an Artificial Intelligence (AI) Assistant for your team{' '}
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
