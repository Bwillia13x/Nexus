import { Suspense } from 'react';
import dynamic from 'next/dynamic';
const ROICalculator = dynamic(() => import('@/components/ROICalculator'));

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
import TrustBar from './home/_components/TrustBar';
import SecuritySection from './home/_components/SecuritySection';

// Import schema generators
import {
  generateServiceSchemas,
  generateFAQPageSchema,
  generateStructuredDataScript,
} from '@/lib/schema';
import { generateBreadcrumbList } from '@/lib/schema-org';

export const metadata = {
  title:
    'Prairie Signal — We help you integrate the latest AI to grow your business',
  description:
    'We set up practical AI tools that work with what you already use—fast, safe, and in plain English. No jargon. No big IT projects.',
  keywords:
    'AI help, Calgary, small business, automate tasks, dashboards, chat assistant',
  openGraph: {
    title: 'Prairie Signal — AI that helps your business, without the jargon',
    description:
      'Practical AI that works with what you already use. Fast, safe, plain English.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Prairie Signal',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prairie Signal — Practical AI for your business',
    description:
      'We set up simple, useful AI tools that work with your current setup.',
  },
};

export default function HomePage() {
  const serviceSchemas = generateServiceSchemas();
  const faqPageSchema = generateFAQPageSchema();
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const breadcrumbs = generateBreadcrumbList([
    { name: 'Home', url: site + '/' },
  ]);

  return (
    <>
      {/* Schema.org JSON-LD structured data */}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript(breadcrumbs)}
      />

      <div className="relative min-h-screen">
        {/* Unified Page Background */}
        <div className="page-background">
          <div className="primary-orb" />
          <div className="secondary-orb" />
          <div className="accent-orb" />
          <div className="ambient-vignette" />
          <div className="wave-layer" aria-hidden="true" />
        </div>

        {/* Home Hero */}
        <HomeHero />

        {/* Trust Bar */}
        <TrustBar />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Case Studies / Pilots */}
        <CaseStudiesSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Early Adopter Banner */}
        <EarlyAdopterSection />

        {/* Security & Data Handling */}
        <SecuritySection />

        {/* FAQ */}
        <FAQSection />

        {/* ROI Calculator */}
        <section id="roi" className="py-16 md:py-24 cv-auto">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Savings Calculator
              </h2>
              <p className="text-xs text-muted-foreground italic max-w-2xl mx-auto">
                *Estimates only — real results vary.*
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
