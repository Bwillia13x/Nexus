import { homeContent } from '@/app/_content/home';
import { getBrandName } from '@/lib/brand';

const brandName = getBrandName();

// Helper to generate LocalBusiness schema
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: brandName,
  description:
    'Practical AI help for Calgary small businesses. Plain English, fast setup, and privacy‑minded.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
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
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'hello@example.com',
});

// Helper to generate Service schemas
export const generateServiceSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Overview for Leaders',
    description:
      'Plain‑English overview of what AI can do for your business and a 30‑day action sketch.',
    provider: {
      '@type': 'LocalBusiness',
      name: brandName,
    },
    areaServed: [
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'City', name: 'Airdrie' },
      { '@type': 'City', name: 'Cochrane' },
      { '@type': 'City', name: 'Okotoks' },
    ],
    serviceType: 'AI Advisory',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Readiness Check',
    description:
      'Map of tools and processes with quick wins and a simple comparison.',
    provider: {
      '@type': 'LocalBusiness',
      name: brandName,
    },
    areaServed: [
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'City', name: 'Airdrie' },
      { '@type': 'City', name: 'Cochrane' },
      { '@type': 'City', name: 'Okotoks' },
    ],
    serviceType: 'AI Advisory',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pilot Setup',
    description:
      'Set up one or two helpful workflows with a simple rollback plan.',
    provider: {
      '@type': 'LocalBusiness',
      name: brandName,
    },
    areaServed: [
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'City', name: 'Airdrie' },
      { '@type': 'City', name: 'Cochrane' },
      { '@type': 'City', name: 'Okotoks' },
    ],
    serviceType: 'No‑Code Configuration',
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
