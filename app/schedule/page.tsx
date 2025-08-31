import Link from 'next/link';
import { env } from '@/lib/env';

export const metadata = {
  title: 'Schedule | Prairie Signal',
  description:
    'Book a discovery call. We will assess readiness and scope a vendor‑neutral, no‑code pilot your team can own.',
};

export default function SchedulePage() {
  const schedulerUrl = env.NEXT_PUBLIC_SCHEDULER_URL;

  return (
    <div className="min-h-screen relative">
      {/* Unified Background System */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary background orb - top left */}
        <div className="absolute -top-32 -left-32 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 via-primary/15 via-secondary/10 to-transparent filter blur-3xl animate-pulse" />

        {/* Secondary background orb - bottom right */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-secondary/20 via-secondary/15 via-primary/10 to-transparent filter blur-3xl animate-pulse" />

        {/* Wave background overlay */}
        <div className="wave-layer" aria-hidden="true" />
      </div>

      {/* Hero Section */}
      <section className="section">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-title">
              Schedule a Call
            </h1>
            <p className="text-xl text-muted mb-8">
              Let’s align safety rules, set expectations, and identify a small
              pilot that delivers value quickly.
            </p>

            {schedulerUrl ? (
              <div className="w-full max-w-4xl mx-auto">
                <iframe
                  src={schedulerUrl}
                  className="w-full h-[600px] border border-glass-border rounded-xl bg-white/50 backdrop-blur-sm"
                  title="Schedule a call"
                  loading="lazy"
                />
              </div>
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
