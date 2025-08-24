import Link from 'next/link';

export const metadata = {
  title: 'Case Study: Calgary Retail AI Assistant | Nexus AI',
  description:
    'GPT-powered assistant for a Calgary retail SMB: faster replies, ticket deflection across web + SMS, and measurable ROI.',
};

export default function CaseAIAssistantCalgaryRetail() {
  const stats = [
    { label: 'Faster Replies', value: '−78% RT' },
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
            Calgary Retail: AI Assistant
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Deployed a GPT-powered assistant to handle FAQs, sizing, and order lookups across web + SMS. Guardrails, human handoff, and analytics included.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-2xl border border-glass-border bg-glass backdrop-blur-xl">
                <div className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-center">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wide text-muted text-center">{s.label}</div>
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
                <li>• DTC retailer with seasonal spikes and small support team</li>
                <li>• High volume of repeat questions (shipping, returns, sizing)</li>
                <li>• Goal: reduce response time and free staff for escalations</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <ul className="space-y-3 text-muted">
                <li>• Assistant trained on policies, catalog, and historical tickets</li>
                <li>• Web chat + SMS channels with guardrails and tone controls</li>
                <li>• Human-in-the-loop escalation with transcript preview</li>
                <li>• Outcome analytics: deflection, CSAT proxy, and handoff rate</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Stack & Integrations</h3>
              <ul className="text-muted space-y-2">
                <li>• Next.js widget + headless UI</li>
                <li>• Twilio SMS</li>
                <li>• OpenAI / Azure OpenAI</li>
                <li>• Postgres for logs & analytics</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Governance</h3>
              <ul className="text-muted space-y-2">
                <li>• Redaction of PII in logs</li>
                <li>• Prompt boundaries and refusal rules</li>
                <li>• Weekly review & model updates</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Timeline</h3>
              <ul className="text-muted space-y-2">
                <li>• Week 1: ingest knowledge & prototype</li>
                <li>• Week 2: channel rollout + guardrails</li>
                <li>• Week 3: analytics + tuning</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-primary to-secondary shadow-lg hover:-translate-y-1 transition"
            >
              Discuss an AI Assistant for your team <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
