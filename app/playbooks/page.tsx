import Link from 'next/link';
import LeadMagnet from '@/components/LeadMagnet';

export const metadata = {
  title: 'Playbooks & Templates | Prairie Signal',
  description:
    'Download simple resources: AI Readiness Checklist, Tool Comparison Sheet, Prompting Guide, Automation How‑To, and Savings Starter Sheet.',
};

const resources = [
  {
    title: 'AI Readiness Checklist (10‑point)',
    desc: 'Are we ready for a safe, useful pilot? Assess data, tools, and guardrails.',
    cta: { label: 'Get the checklist', href: '#checklist' },
  },
  {
    title: 'Tool Comparison Sheet',
    desc: 'Side‑by‑side compare (cost/speed/limits) for your short‑listed tools.',
    cta: {
      label: 'Download CSV',
      href: '/downloads/tool-selection-matrix.csv',
    },
  },
  {
    title: 'Prompting Guide',
    desc: 'Helpful patterns and do’s/don’ts you can adapt.',
    cta: { label: 'Download PDF', href: '/downloads/prompting-playbook.pdf' },
  },
  {
    title: 'Automation How‑To Starter',
    desc: 'Template to document your setup with a simple rollback plan.',
    cta: {
      label: 'Download DOCX',
      href: '/downloads/no-code-sop-starter.docx',
    },
  },
  {
    title: 'Savings Starter Sheet',
    desc: 'Baseline time saved and fewer mistakes to track progress.',
    cta: { label: 'Download CSV', href: '/downloads/metrics-roi-starter.csv' },
  },
];

export default function PlaybooksPage() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Page Background */}
      <div className="page-background">
        <div className="primary-orb" />
        <div className="secondary-orb" />
        <div className="accent-orb" />
        <div className="ambient-vignette" />
        <div className="wave-layer" aria-hidden="true" />
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-title">
            Playbooks & Templates
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Simple downloads your team can use today: checklists, guides, and
            comparison sheets.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-5xl px-4 grid gap-6 md:grid-cols-2">
          {resources.map((r, i) => (
            <div key={i} className="card-glass glass-liquid p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-2">{r.title}</h2>
              <p className="text-muted mb-4">{r.desc}</p>
              <div className="mt-auto">
                <Link href={r.cta.href} className="btn-primary">
                  {r.cta.label} <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist capture */}
      <section id="checklist" className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            AI Readiness Checklist
          </h2>
          <LeadMagnet />
        </div>
      </section>
    </div>
  );
}
