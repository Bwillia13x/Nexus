import Link from 'next/link';
import { env } from '@/lib/env';
import { SchedulerEmbed } from './_components/SchedulerEmbed';

export const metadata = {
  title: 'Book a Call | Prairie Signal',
  description:
    'Schedule a discovery call to assess readiness and scope a vendor‑neutral, no‑code pilot.',
};

export default function BookPage() {
  const schedulerUrl = env.NEXT_PUBLIC_SCHEDULER_URL;

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

      {/* Hero Section */}
      <section className="section">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-title">
              Book Your Discovery Call
            </h1>
            <p className="text-xl text-muted mb-8">
              Let’s assess readiness, align guardrails, and identify a no‑code
              pilot your team can own.
            </p>

            {schedulerUrl ? (
              <SchedulerEmbed url={schedulerUrl} />
            ) : (
              <div className="card-glass max-w-md mx-auto text-center p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Scheduler Coming Soon
                </h2>
                <p className="text-muted mb-6">
                  Our scheduling system is being set up. Please contact us
                  directly to book a call.
                </p>
                <Link href="/contact" className="btn-primary">
                  Contact Us Instead
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
