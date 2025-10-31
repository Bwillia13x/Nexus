export const metadata = {
  title: 'Security | Prairie Signal',
  description:
    'Overview of security practices: least-privilege access, auditability, hosting options, and data handling.',
};

import PageBackground from '@/components/PageBackground';

export default function SecurityPage() {
  return (
    <div className="relative min-h-screen py-16 md:py-24">
      <PageBackground variant="subtle" />
      <section className="relative">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold mb-6">Security</h1>
          <p className="text-muted-foreground mb-8">
            We design projects for safety and clarity. This page outlines
            general practices. Project-specific controls are detailed in your
            statement of work (SOW).
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Access & Credentials
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Least-privilege access scoped to project needs.</li>
                <li>
                  Credential sharing via secure vaults or temporary tokens.
                </li>
                <li>Audit logs where supported by the platform.</li>
                <li>
                  Clear off-boarding and credential rotation at project end.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Hosting & Isolation
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Cloud by default, with VPC isolation or on-premises on
                  request.
                </li>
                <li>
                  Environment separation (dev/sandbox vs. production) where
                  applicable.
                </li>
                <li>Data egress restrictions and network rules when needed.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Data Handling</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>No training on your private data.</li>
                <li>PIPEDA/PIPA aligned; NDA available on request.</li>
                <li>
                  Data processing only for agreed services, not for resale.
                </li>
              </ul>
              <p className="text-sm text-muted mt-4">
                See also our{' '}
                <a className="link" href="/privacy">
                  Privacy Policy
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
