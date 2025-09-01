import { services, faqs, schemaOrgData } from './services-content';
import { getBrandName, getAbsoluteLogoUrl } from '@/lib/brand';

// Generate LocalBusiness structured data
export function generateLocalBusinessSchema() {
  const brandName = getBrandName();
  return {
    ...schemaOrgData.localBusiness,
    name: brandName,
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') +
      '/services',
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'CAD',
  };
}

// Generate FAQPage structured data
export function generateFAQPageSchema() {
  const faqEntities = faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  }));

  return {
    ...schemaOrgData.faqPage,
    mainEntity: faqEntities,
  };
}

// Generate Product structured data for each service
export function generateProductSchemas() {
  const brandName = getBrandName();
  return services.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: service.title,
    description: service.summary,
    brand: {
      '@type': 'Brand',
      name: brandName,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CAD',
      price: '0',
      description: service.timeline,
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: brandName },
    },
    category: 'AI Services',
    areaServed: ['Calgary', 'Airdrie', 'Cochrane', 'Okotoks'],
  }));
}

// Generate Service structured data
export function generateServiceSchemas() {
  const brandName = getBrandName();
  return services.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    provider: {
      '@type': 'LocalBusiness',
      name: brandName,
    },
    areaServed: ['Calgary', 'Airdrie', 'Cochrane', 'Okotoks'],
    serviceType: service.title,
  }));
}

// Generate Organization structured data
export function generateOrganizationSchema() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const brandName = getBrandName();
  const logoAbs = getAbsoluteLogoUrl(site);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brandName,
    url: site,
    logo: logoAbs,
    description:
      'Practical AI help for Calgary small businesses. Plain English and privacy‑minded.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    sameAs: [
      // Add social media URLs when available
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Services',
      itemListElement: services.map(service => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.summary,
        },
      })),
    },
  };
}

// Generate WebPage structured data
export function generateWebPageSchema() {
  const site2 = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const brandName = getBrandName();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AI Services for Small Businesses',
    description:
      'Practical AI that works with what you already use. Fast, safe, and in plain English.',
    url: site2 + '/services',
    isPartOf: {
      '@type': 'WebSite',
      name: brandName,
      url: site2,
    },
    about: {
      '@type': 'Organization',
      name: brandName,
    },
    mainEntity: [...generateServiceSchemas()],
  };
}

// Generate all structured data for the services page
export function generateAllStructuredData() {
  return [
    generateOrganizationSchema(),
    generateFAQPageSchema(),
    generateWebPageSchema(),
    ...generateProductSchemas(),
    ...generateServiceSchemas(),
  ];
}

// Generate ContactPage structured data
export function generateContactPageSchema() {
  const brandName = getBrandName();
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${brandName} - Calgary AI Advisory`,
    description:
      'Book a discovery call to talk through a simple first step that works with your current tools.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') +
      '/contact',
    isPartOf: {
      '@type': 'WebSite',
      name: brandName,
      url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
    mainEntity: {
      '@type': 'LocalBusiness',
      name: brandName,
      description:
        'Practical AI help for Calgary small businesses. Plain English and privacy‑minded.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Calgary',
        addressRegion: 'AB',
        addressCountry: 'CA',
      },
      telephone: process.env.NEXT_PUBLIC_BUSINESS_TELEPHONE,
      email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
      areaServed: [
        { '@type': 'City', name: 'Calgary' },
        { '@type': 'City', name: 'Airdrie' },
        { '@type': 'City', name: 'Cochrane' },
        { '@type': 'City', name: 'Okotoks' },
      ],
      sameAs: [
        // Add social media URLs when available
      ],
      hasOfferCatalog: undefined,
    },
  };
}

// Generate JSON-LD script tags for Next.js head
export function generateStructuredDataScript(data: any) {
  return {
    __html: JSON.stringify(data, null, 2),
  };
}

// Generate a BreadcrumbList JSON-LD
export function generateBreadcrumbList(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
