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

export const metadata = {
  title: 'AI Services for Calgary SMBs | Nexus AI',
  description:
    'Productized offerings for Calgary small and mid-sized businesses: AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart.',
};

export default function ServicesPage() {
  const structuredData = generateAllStructuredData();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript(structuredData)}
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

        {/* Unified Background System */}
        <div className="fixed inset-0 -z-10 overflow-hidden ambient-orbs">
          {/* Primary background orb - top left */}
          <div className="ambient-orb absolute -top-40 -left-40 w-[780px] h-[780px] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 via-secondary/5 to-transparent blur-3xl" />

          {/* Secondary background orb - bottom right */}
          <div className="ambient-orb ambient-orb--slow absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-secondary/20 via-secondary/10 via-primary/5 to-transparent blur-3xl" />

          {/* Tertiary orb for added depth */}
          <div className="ambient-orb absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 blur-2xl opacity-60" />

          {/* Vignette overlay for contrast */}
          <div className="wave-layer" aria-hidden="true" />
          <div className="ambient-vignette" />
        </div>

        {/* Service Hero */}
        <ServiceHero />

        {/* Process Steps */}
        <ProcessSteps />

        {/* Compare Table */}
        <CompareTable />

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about our AI services and process
              </p>
            </div>

            <div className="space-y-4">
              {faqContent.map((faq, index) => (
                <div
                  key={index}
                  className="card-glass group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-primary font-semibold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-title">
                Integrations We Support
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with your existing tools and workflows seamlessly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
              {integrations.slice(0, -1).map((integration, index) => (
                <div
                  key={index}
                  className="card-elevated group hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {integration.name}
                  </span>
                </div>
              ))}

              <div className="card-elevated col-span-2 md:col-span-4 lg:col-span-6 mt-4 group">
                <div className="text-center">
                  <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
                    + Many more connectors available
                  </span>
                </div>
              </div>
            </div>
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
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4">
            <div className="card-glass glass-liquid p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Privacy & Data Protection
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    {privacyContent.leftColumn.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {privacyContent.leftColumn.content}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    {privacyContent.rightColumn.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {privacyContent.rightColumn.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* P2 Components Section */}
        <div className="max-w-6xl mx-auto mb-20 space-y-20">
          {/* ROI Calculator */}
          <section aria-labelledby="roi-calculator" className="py-16 md:py-24">
            <h2
              id="roi-calculator"
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              ROI Calculator
            </h2>
            <Suspense
              fallback={
                <div className="text-center p-8">Loading calculator...</div>
              }
            >
              <ROICalculator />
            </Suspense>
          </section>

          {/* Lead Magnet */}
          <section aria-labelledby="lead-magnet" className="py-16 md:py-24">
            <h2
              id="lead-magnet"
              className="text-3xl md:text-4xl font-bold text-center mb-12"
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
