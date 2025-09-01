import { Metadata } from 'next';
import { Suspense } from 'react';
import {
  generateAllStructuredData,
  generateStructuredDataScript,
} from '@/lib/schema-org';
import ROICalculator from '@/components/ROICalculator';
import LeadMagnet from '@/components/LeadMagnet';

// Import new components
import ServiceHero from './_components/ServiceHero';
import ProcessSteps from './_components/ProcessSteps';
import CompareTable from './_components/CompareTable';
import ServicePanel from './_components/ServicePanel';

// Import content
import {
  servicesData,
  faqContent,
  integrations,
  privacyContent,
} from './_content';
import FAQAccordion from './_components/FAQAccordion';
import { generateBreadcrumbList } from '@/lib/schema-org';

export const metadata = {
  title: 'AI Services | Prairie Signal',
  description:
    'Plain‑English AI help for small businesses: quick overview, readiness check, tool choice, and small pilot setup. Works with what you already use.',
  openGraph: {
    title: 'AI Services | Prairie Signal',
    description:
      'Plain‑English AI help for small businesses: overview, readiness, tool choice, and pilot setup.',
    images: ['/og-services.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Services | Prairie Signal',
    description:
      'Plain‑English AI help for small businesses: overview, readiness, tool choice, and pilot setup.',
    images: ['/og-services.svg'],
  },
};

export default function ServicesPage() {
  const structuredData = generateAllStructuredData();
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const breadcrumbs = generateBreadcrumbList([
    { name: 'Home', url: site + '/' },
    { name: 'Services', url: site + '/services' },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript(structuredData)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript(breadcrumbs)}
      />

      <div className="min-h-screen relative">
        {/* Skip Links for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <a
          href="#services"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to services
        </a>

        {/* Unified Page Background */}
        <div className="page-background">
          <div className="primary-orb" />
          <div className="secondary-orb" />
          <div className="accent-orb" />
          <div className="ambient-vignette" />
          <div className="wave-layer" aria-hidden="true" />
        </div>

        {/* Service Hero */}
        <ServiceHero />

        {/* Process Steps */}
        <ProcessSteps />

        {/* Compare Table */}
        <CompareTable />

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-20 md:py-28"
          aria-labelledby="faq-heading"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2
                id="faq-heading"
                className="text-4xl md:text-5xl font-bold mb-6 gradient-title text-balance text-pretty"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Everything you need to know about our AI services and process
              </p>
            </div>

            <FAQAccordion items={faqContent} />
          </div>
        </section>

        {/* Integrations Section */}
        <section
          className="py-20 md:py-28"
          aria-labelledby="integrations-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2
                id="integrations-heading"
                className="text-4xl md:text-5xl font-bold mb-6 gradient-title text-balance text-pretty"
              >
                Integrations We Support
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Connect with your existing tools and workflows seamlessly
              </p>
            </div>

            <ul
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center"
              role="list"
            >
              {integrations.slice(0, -1).map((integration, index) => (
                <li
                  key={index}
                  className="card-elevated group hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  role="listitem"
                >
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {integration.name}
                  </span>
                </li>
              ))}

              <li
                className="card-elevated col-span-2 md:col-span-4 lg:col-span-6 mt-4 group"
                role="listitem"
              >
                <div className="text-center">
                  <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                    + Many more connectors available
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Service Panels */}
        <div
          id="main-content"
          className="space-y-0"
          role="main"
          aria-label="AI Services"
        >
          <div id="services" className="sr-only" aria-hidden="true">
            Services Section
          </div>
          {servicesData.map(service => (
            <ServicePanel key={service.id} service={service} />
          ))}
        </div>

        {/* Privacy & Compliance Section */}
        <section className="py-16 md:py-24" aria-labelledby="privacy-heading">
          <div className="mx-auto max-w-4xl px-4">
            <div className="card-glass glass-liquid p-8">
              <h2
                id="privacy-heading"
                className="text-3xl font-bold mb-8 text-center text-balance text-pretty"
              >
                Privacy & Data Protection
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    {privacyContent.leftColumn.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-pretty">
                    {privacyContent.leftColumn.content}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    {privacyContent.rightColumn.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-pretty">
                    {privacyContent.rightColumn.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* P2 Components Section */}
        <div className="max-w-6xl mx-auto mb-20 space-y-20">
          {/* Savings Calculator */}
          <section aria-labelledby="roi-calculator" className="py-16 md:py-24">
            <h2
              id="roi-calculator"
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance text-pretty"
            >
              Savings Calculator
            </h2>
            <Suspense
              fallback={
                <div
                  className="text-center p-8"
                  role="status"
                  aria-live="polite"
                >
                  Loading calculator...
                </div>
              }
            >
              <ROICalculator />
            </Suspense>
          </section>

          {/* Lead Magnet */}
          <section aria-labelledby="lead-magnet" className="py-16 md:py-24">
            <h2
              id="lead-magnet"
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance text-pretty"
            >
              Free AI Readiness Assessment
            </h2>
            <LeadMagnet />
          </section>
        </div>
      </div>
    </>
  );
}
