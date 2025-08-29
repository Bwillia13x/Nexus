import Link from 'next/link';

export const metadata = {
  title: 'Training & AI Literacy | Prairie Signal',
  description:
    'Team workshops, simple playbooks, and prompting clinics for Calgary small businesses — in plain English.',
};

export default function TrainingPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden ambient-orbs">
        <div className="ambient-orb absolute -top-40 -left-40 w-[780px] h-[780px] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 via-secondary/5 to-transparent blur-3xl" />
        <div className="ambient-orb ambient-orb--slow absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-secondary/20 via-secondary/10 via-primary/5 to-transparent blur-3xl" />
        <div className="ambient-vignette" />
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-title">
            Training & AI Literacy
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Practical skills for everyday use — simple, safe, and tailored to
            your roles.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 grid gap-6 md:grid-cols-2">
          <div className="card-glass glass-liquid p-6">
            <h2 className="text-2xl font-bold mb-2">
              Team Literacy Workshop (½‑day)
            </h2>
            <p className="text-muted mb-4">
              Role-based use‑cases with hands‑on exercises. We cover safety
              do’s/don’ts and everyday prompting patterns.
            </p>
            <ul className="text-sm text-muted space-y-2 mb-4">
              <li>• Prompting Playbook for your roles</li>
              <li>• Safety checklist and approved examples</li>
              <li>• Post‑session quiz ≥ 80% acceptance</li>
            </ul>
            <Link href="/contact?training=workshop" className="btn-primary">
              Book a workshop →
            </Link>
          </div>

          <div className="card-glass glass-liquid p-6">
            <h2 className="text-2xl font-bold mb-2">Prompting Clinics</h2>
            <p className="text-muted mb-4">
              Short, focused coaching for teams to practice prompts on real
              tasks with a facilitator.
            </p>
            <ul className="text-sm text-muted space-y-2 mb-4">
              <li>• 60–90 minute sessions</li>
              <li>• Bring your tasks & policies</li>
              <li>• Reusable patterns & templates</li>
            </ul>
            <Link href="/contact?training=clinic" className="btn-secondary">
              Request a clinic →
            </Link>
          </div>

          <div className="card-glass glass-liquid p-6 md:col-span-2">
            <h2 className="text-2xl font-bold mb-2">Role‑Specific Playbooks</h2>
            <p className="text-muted mb-4">
              Simple templates and how‑tos you can adapt: support, operations,
              finance, and more.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/playbooks" className="btn-primary">
                Browse playbooks →
              </Link>
              <Link href="/#readiness" className="btn-outline">
                Get the readiness checklist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
