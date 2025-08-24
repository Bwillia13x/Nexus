import services from '@/content/services.json';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata = {
  title: 'AI Services for Calgary SMBs | Nexus AI',
  description:
    'Productized offerings for Calgary small and mid-sized businesses: AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart.',
};

interface Service {
  id: string;
  icon: string;
  title: string;
  summary: string;
  detailedDescription: string;
  benefits: string[];
  bullets: string[];
  artifacts: string[];
  timeline: string;
  pricing: string;
}

export default function ServicesPage() {
  const list = services as unknown as Service[];
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Hero Section with Background Effects */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent filter blur-3xl animate-pulse" />
        </div>

        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-black via-black/70 to-black/50 text-transparent bg-clip-text">
            Calgary AI Services for SMBs
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted leading-relaxed px-4">
            Fast, practical AI integrations for Calgary teams: AI Assistant
            Setup, Automation Audit + Pilot, and Analytics Quickstart.
          </p>
        </div>

        <div className="space-y-32">
          {list.map((s, index) => (
            <div key={s.id} id={s.id} className="relative">
              {/* Service Card */}
              <div className="p-8 md:p-12 rounded-4xl border border-glass-border bg-glass backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-12">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 flex items-center justify-center text-4xl rounded-3xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                      {s.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        {s.title}
                      </h2>
                      <p className="text-muted text-lg leading-relaxed max-w-2xl">
                        {s.summary}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="mb-12">
                  <p className="text-muted text-lg leading-relaxed max-w-4xl">
                    {s.detailedDescription}
                  </p>
                </div>

                {/* Benefits Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold mb-6 text-ink">
                    Key Benefits
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {s.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                        <span className="text-muted font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 text-ink">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {s.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary text-lg mt-0.5">•</span>
                          <span className="text-muted">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 text-ink">
                      Deliverables
                    </h3>
                    <ul className="space-y-3">
                      {s.artifacts.map((artifact, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-secondary text-lg mt-0.5">
                            ✓
                          </span>
                          <span className="text-muted">{artifact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4 text-ink">
                      Timeline & Investment
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                        <div className="text-sm text-muted mb-1">Timeline</div>
                        <div className="text-lg font-semibold text-ink">
                          {s.timeline}
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-r from-secondary/5 to-primary/5 border border-secondary/10">
                        <div className="text-sm text-muted mb-1">
                          Investment
                        </div>
                        <div className="text-lg font-semibold text-ink">
                          {s.pricing}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="text-center pt-8 border-t border-glass-border">
                  <Link
                    href="/contact"
                    className="btn-primary min-h-[44px]"
                    aria-label={`Get started with ${s.title}`}
                  >
                    Start {s.title} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
