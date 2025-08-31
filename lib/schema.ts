import { servicesContent, faqContent } from '@/app/home/_content';
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
  telephone: process.env.NEXT_PUBLIC_BUSINESS_TELEPHONE,
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
});

// Helper to generate Service schemas
export const generateServiceSchemas = () =>
  servicesContent.items.map(item => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: item.title,
    description: item.text,
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
    serviceType: item.title,
  }));

// Helper to generate FAQPage schema
export const generateFAQPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqContent.map(item => ({
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
