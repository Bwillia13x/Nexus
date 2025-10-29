export const metadata = {
  title: 'Terms of Service | Prairie Signal',
  description:
    'Terms governing the use of Prairie Signal services and website.',
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen py-16 md:py-24">
      <div className="page-background-subtle" aria-hidden="true" />
      <section className="relative">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">
            These terms outline the general conditions for using our services
            and website. For any project-specific terms, please refer to your
            statement of work (SOW).
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Use of Services</h2>
              <p className="text-muted-foreground">
                Services are provided as-is for the agreed scope. Changes to
                scope are handled via change orders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Confidentiality</h2>
              <p className="text-muted-foreground">
                We respect confidential information. Non-disclosure agreements
                can be executed on request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, liability is limited to
                the fees paid for the services giving rise to the claim.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
