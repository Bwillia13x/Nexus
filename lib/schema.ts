import { homeContent } from '@/app/_content/home';

// Helper to generate LocalBusiness schema
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Nexus AI',
  description:
    'Solo AI-integration consultancy helping Calgary businesses automate workflows, deploy assistants, and ship dashboards—safely and measurably.',
  url: 'https://nexus-ai.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  areaServed: [
    { '@type': 'City', name: 'Calgary' },
    { '@type': 'City', name: 'Airdrie' },
    { '@type': 'City', name: 'Cochrane' },
    { '@type': 'City', name: 'Okotoks' },
  ],
  telephone: '+1-403-555-0123',
  email: 'hello@nexusai.com',
  sameAs: [
    // Add social media URLs when available
  ],
});

// Helper to generate Service schemas for the three main services
export const generateServiceSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Assistant Setup',
    description:
      'Branded assistant with safe access to your knowledge and tools; guardrails first.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Nexus AI',
    },
    areaServed: [
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'City', name: 'Airdrie' },
      { '@type': 'City', name: 'Cochrane' },
      { '@type': 'City', name: 'Okotoks' },
    ],
    serviceType: 'AI Assistant Implementation',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automation Audit + Pilot',
    description:
      'Identify high-leverage bottlenecks and ship a fixed-scope pilot that saves hours.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Nexus AI',
    },
    areaServed: [
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'City', name: 'Airdrie' },
      { '@type': 'City', name: 'Cochrane' },
      { '@type': 'City', name: 'Okotoks' },
    ],
    serviceType: 'Process Automation',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Analytics Quickstart',
    description:
      "Connect your data and ship a small set of dashboards that answer operators' questions.",
    provider: {
      '@type': 'LocalBusiness',
      name: 'Nexus AI',
    },
    areaServed: [
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'City', name: 'Airdrie' },
      { '@type': 'City', name: 'Cochrane' },
      { '@type': 'City', name: 'Okotoks' },
    ],
    serviceType: 'Data Analytics',
  },
];

// Helper to generate FAQPage schema
export const generateFAQPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeContent.faq.items.map((item, index) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

// Helper to generate JSON-LD script tags
export const generateStructuredDataScript = (data: any) => ({
  __html: JSON.stringify(data, null, 2),
});
