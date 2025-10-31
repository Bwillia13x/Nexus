import { env } from '@/lib/env';
import { SchedulerEmbed } from './_components/SchedulerEmbed';
import { SimpleBookingForm } from './_components/SimpleBookingForm';
import PageBackground from '@/components/PageBackground';

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
      <PageBackground />

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
              <SimpleBookingForm />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
