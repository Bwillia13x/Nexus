import { Suspense } from 'react';
import ROICalculator from '@/components/ROICalculator';

// Import new home components
import HomeHero from './home/_components/HomeHero';
import ServicesGrid from './home/_components/ServicesGrid';
import CaseStudiesSection from './home/_components/CaseStudiesSection';
import HowItWorksSection from './home/_components/HowItWorksSection';
import EarlyAdopterSection from './home/_components/EarlyAdopterSection';
import FAQSection from './home/_components/FAQSection';
import IntegrationsSection from './home/_components/IntegrationsSection';
import LeadMagnetSection from './home/_components/LeadMagnetSection';
import ContactSection from './home/_components/ContactSection';

// Import schema generators
import {
  generateLocalBusinessSchema,
  generateServiceSchemas,
  generateFAQPageSchema,
  generateStructuredDataScript,
} from '@/lib/schema';

export const metadata = {
  title: 'Nexus AI - Practical AI for Calgary SMBs | Pilot in 30 Days',
  description:
    'Solo AI-integration consultancy helping Calgary businesses automate workflows, deploy assistants, and ship dashboards—safely and measurably.',
  keywords:
    'AI automation, Calgary AI consultant, AI assistant setup, workflow automation, data analytics, SMB AI solutions',
  openGraph: {
    title: 'Nexus AI - Practical AI for Calgary SMBs | Pilot in 30 Days',
    description:
      'Solo AI-integration consultancy helping Calgary businesses automate workflows, deploy assistants, and ship dashboards—safely and measurably.',
    url: 'https://nexus-ai.com',
    siteName: 'Nexus AI',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus AI - Practical AI for Calgary SMBs | Pilot in 30 Days',
    description:
      'Solo AI-integration consultancy helping Calgary businesses automate workflows, deploy assistants, and ship dashboards—safely and measurably.',
  },
};

export default function HomePage() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchemas = generateServiceSchemas();
  const faqPageSchema = generateFAQPageSchema();

  return (
    <>
      {/* Schema.org JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript(
          localBusinessSchema
        )}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={generateStructuredDataScript(schema)}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript(faqPageSchema)}
      />

      <div className="relative min-h-screen">
        {/* Unified Background System */}
        <div className="fixed inset-0 -z-10 overflow-hidden ambient-orbs">
          {/* Primary background orb - top left */}
          <div className="ambient-orb absolute -top-48 -left-48 w-[920px] h-[920px] rounded-full bg-gradient-to-br from-primary/30 via-primary/15 to-transparent" />
          {/* Secondary background orb - bottom right */}
          <div className="ambient-orb ambient-orb--slow absolute -bottom-48 -right-48 w-[780px] h-[780px] rounded-full bg-gradient-to-br from-secondary/30 via-secondary/15 to-transparent" />
          {/* Tertiary orb - center top */}
          <div className="ambient-orb absolute top-24 left-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-gradient-to-b from-primary/20 via-secondary/20 to-transparent opacity-90" />
          {/* Vignette overlay for contrast */}
          <div className="ambient-vignette" />
        </div>

        {/* Home Hero */}
        <HomeHero />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Case Studies / Pilots */}
        <CaseStudiesSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Early Adopter Banner */}
        <EarlyAdopterSection />

        {/* FAQ */}
        <FAQSection />

        {/* ROI Calculator */}
        <section id="roi" className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ROI Calculator
              </h2>
              <p className="text-xs text-muted-foreground italic max-w-2xl mx-auto">
                *Payback depends on your processes and implementation; this is
                an estimate, not a promise.*
              </p>
            </div>
            <Suspense
              fallback={
                <div className="text-center p-8">Loading calculator...</div>
              }
            >
              <ROICalculator />
            </Suspense>
          </div>
        </section>

        {/* Integrations */}
        <IntegrationsSection />

        {/* Lead Magnet */}
        <LeadMagnetSection />

        {/* Contact Form */}
        <ContactSection />
      </div>
    </>
  );
}
