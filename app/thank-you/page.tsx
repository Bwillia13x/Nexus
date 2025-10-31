import ActionButtons from './ActionButtons';
import PageBackground from '@/components/PageBackground';

export const metadata = {
  title: 'Thanks for Your Interest — Prairie Signal',
  description:
    "Thanks for reaching out! We'll get back to you the same business day. Here's what happens next and how you can prepare.",
  robots: 'noindex,nofollow', // Don't index thank you pages
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Background System */}
      <PageBackground />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-success to-primary flex items-center justify-center shadow-e6">
              <span className="text-4xl">✅</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-display mb-6 gradient-title">
            Thanks for reaching out!
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            We'll get back to you the same business day with next steps and a
            link to book a discovery call.
          </p>

          {/* Next Steps Card */}
          <div className="card-glass max-w-2xl mx-auto mb-12 text-left">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-2xl">📅</span>
              What happens next?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Confirmation Email
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    You'll receive an email from Drew within the same business
                    day confirming your inquiry and scheduling options.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Discovery Call
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We'll discuss your goals, constraints, and identify a
                    vendor‑neutral, no‑code pilot your team can own.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Pilot Planning
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    If we move forward, we'll create a detailed scope, timeline,
                    and pricing for your specific pilot.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Preparation Tips */}
          <div className="card-glass max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              To speed things up
            </h2>

            <div className="text-left space-y-3">
              <p className="text-muted-foreground">
                Share 2–3 specific processes or tasks that take significant time
                in your business. The more specific you can be about pain points
                and goals, the better we can prepare.
              </p>

              <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Pro tip:</strong> Have your calendar ready when we
                  call. We'll work around your schedule to find the perfect
                  time.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <ActionButtons />

          {/* Additional Info */}
          {process.env.NEXT_PUBLIC_BUSINESS_EMAIL ? (
            <div className="mt-12 text-sm text-muted-foreground">
              <p>
                Questions? Reply to the confirmation email or reach out at{' '}
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`}
                  className="link"
                >
                  {process.env.NEXT_PUBLIC_BUSINESS_EMAIL}
                </a>
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
