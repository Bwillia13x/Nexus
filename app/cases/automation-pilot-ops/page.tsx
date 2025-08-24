import Link from 'next/link';

export const metadata = {
  title: 'Case Study: Operations Automation Pilot | Nexus AI',
  description:
    'Audit + pilot for a Calgary ops team: mapped bottlenecks, automated weekly reporting and invoicing, reduced errors and saved hours.',
};

export default function CaseAutomationPilotOps() {
  const stats = [
    { label: 'Hours Saved', value: '12+/wk' },
    { label: 'Error Rate', value: '−90%' },
    { label: 'Pilot Duration', value: '30 days' },
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
            Ops: Automation Pilot
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Identified bottlenecks and automated weekly reporting and invoicing across tools. Human approvals kept, with robust monitoring and rollback.
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
              <h2 className="text-2xl font-bold mb-4">Audit Findings</h2>
              <ul className="space-y-3 text-muted">
                <li>• Manual CSV exports for finance and reporting</li>
                <li>• Duplicated entry in CRM and accounting</li>
                <li>• Ad-hoc spreadsheets with inconsistent formulas</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h2 className="text-2xl font-bold mb-4">Pilot Scope</h2>
              <ul className="space-y-3 text-muted">
                <li>• Automated weekly KPI report with anomaly flags</li>
                <li>• Invoicing pipeline with Slack approvals</li>
                <li>• Reconciliation checks + error notifications</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Stack & Integrations</h3>
              <ul className="text-muted space-y-2">
                <li>• Google Sheets / BigQuery</li>
                <li>• QuickBooks / Xero</li>
                <li>• Slack for approvals</li>
                <li>• Zapier / Make.com orchestrations</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Governance</h3>
              <ul className="text-muted space-y-2">
                <li>• Idempotent jobs and audit logs</li>
                <li>• Access controls & least privilege</li>
                <li>• Monitoring and fallback procedures</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl">
              <h3 className="font-semibold mb-2">Timeline</h3>
              <ul className="text-muted space-y-2">
                <li>• Week 1: mapping + scoring</li>
                <li>• Week 2–3: pilot build + approvals</li>
                <li>• Week 4: monitoring + training</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-primary to-secondary shadow-lg hover:-translate-y-1 transition"
            >
              Explore an Automation Pilot <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
