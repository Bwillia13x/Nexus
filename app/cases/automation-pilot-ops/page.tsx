import Link from 'next/link';

export const metadata = {
  title: 'Case Study: Operations Automation Pilot | Prairie Signal',
  description:
    'Audit and pilot for a Calgary operations team: mapped bottlenecks, automated weekly reporting and invoicing, reduced errors, and saved hours.',
};

export default function CaseAutomationPilotOps() {
  const stats = [
    { label: 'Hours Saved', value: 'Hours saved each week' },
    { label: 'Error Rate', value: 'Fewer errors' },
    { label: 'Pilot Duration', value: 'Fast' },
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
          <h1 className="text-display font-bold mb-6 bg-gradient-to-b from-black via-black/70 to-black/50 text-transparent bg-clip-text">
            Operations: Automation Pilot
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Identified bottlenecks and automated weekly reporting and invoicing
            across tools. Kept human approvals, with monitoring and a rollback
            process.
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
                <div className="text-xs uppercase tracking-wide text-ink/70 text-center">
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
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl text-ink">
              <h2 className="text-2xl font-bold mb-4 text-ink">
                Audit Findings
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • Manual comma-separated values (CSV) exports for finance and
                  reporting
                </li>
                <li>
                  • Duplicate data entry in customer relationship management
                  (CRM) and accounting systems
                </li>
                <li>• Ad hoc spreadsheets with inconsistent formulas</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl text-ink">
              <h2 className="text-2xl font-bold mb-4 text-ink">Pilot Scope</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  • Automated weekly key performance indicator (KPI) report with
                  anomaly flags
                </li>
                <li>• Invoicing pipeline with approvals in Slack</li>
                <li>• Reconciliation checks and error notifications</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl text-ink">
              <h3 className="font-semibold mb-2 text-ink">
                Stack & Integrations
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Google Sheets and BigQuery</li>
                <li>• QuickBooks or Xero</li>
                <li>• Slack for approvals</li>
                <li>• Zapier or Make.com automations</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl text-ink">
              <h3 className="font-semibold mb-2 text-ink">
                Access and Data Rules
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Repeat-safe jobs and audit logs</li>
                <li>• Access controls with least-privilege access</li>
                <li>• Monitoring and fallback procedures</li>
              </ul>
            </div>
            <div className="p-6 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl text-ink">
              <h3 className="font-semibold mb-2 text-ink">Timeline</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Week 1: mapping and scoring</li>
                <li>• Week 2–3: pilot build and approvals</li>
                <li>• Week 4: monitoring and training</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gradient-to-r from-primary to-secondary shadow-e3 hover:shadow-e4 hover:-translate-y-0.5 transition"
            >
              Explore an Operations Automation Pilot <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
