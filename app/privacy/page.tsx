export const metadata = {
  title: 'Privacy Policy | Prairie Signal',
  description:
    'Our privacy commitments: no training on your private data, PIPEDA/PIPA alignment, and consent for analytics.',
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          We take privacy seriously and design projects to respect your data and
          your customers. This page summarizes our general approach.
          Project-specific details are documented in your statement of work
          (SOW).
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Key Commitments</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>No training on your private data.</li>
              <li>Aligned with PIPEDA/PIPA. NDA available on request.</li>
              <li>
                Least-privilege access with auditability and clear off-boarding.
              </li>
              <li>Cloud by default; VPC or on-premises available.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Analytics</h2>
            <p className="text-muted-foreground">
              We respect browser privacy signals (Do Not Track / Global Privacy
              Control) and collect analytics only when permitted. If consent is
              required, you can manage it via the consent banner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Processing</h2>
            <p className="text-muted-foreground">
              Data is processed solely to deliver the agreed services. We do not
              sell data. Access is time-bound and scoped to your project.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
