import { services, faqs, schemaOrgData } from './services-content';

// Generate LocalBusiness structured data
export function generateLocalBusinessSchema() {
  return {
    ...schemaOrgData.localBusiness,
    url: 'https://nexus-ai.com/services',
    priceRange: '$5k–$14k',
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
  return services.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: service.title,
    description: service.summary,
    brand: {
      '@type': 'Brand',
      name: 'Nexus AI',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CAD',
      price: service.pricing.replace(/[^\d–]/g, ''),
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
      seller: {
        '@type': 'Organization',
        name: 'Nexus AI',
      },
    },
    category: 'AI Services',
    areaServed: ['Calgary', 'Airdrie', 'Cochrane', 'Okotoks'],
  }));
}

// Generate Service structured data
export function generateServiceSchemas() {
  return services.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Nexus AI',
    },
    areaServed: ['Calgary', 'Airdrie', 'Cochrane', 'Okotoks'],
    serviceType: service.title,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CAD',
      price: service.pricing.replace(/[^\d–]/g, ''),
      description: `${service.timeline} timeline`,
    },
  }));
}

// Generate Organization structured data
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexus AI',
    url: 'https://nexus-ai.com',
    logo: 'https://nexus-ai.com/images/Nexus_Logo.png',
    description:
      'Calgary AI services for SMBs including AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart.',
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
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Calgary AI Services for SMBs',
    description:
      'Fast, practical AI integrations—AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart. Fixed-scope, measurable outcomes, Calgary-ready privacy.',
    url: 'https://nexus-ai.com/services',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nexus AI',
      url: 'https://nexus-ai.com',
    },
    about: {
      '@type': 'Organization',
      name: 'Nexus AI',
    },
    mainEntity: [...generateProductSchemas(), ...generateServiceSchemas()],
  };
}

// Generate all structured data for the services page
export function generateAllStructuredData() {
  return [
    generateLocalBusinessSchema(),
    generateOrganizationSchema(),
    generateFAQPageSchema(),
    generateWebPageSchema(),
    ...generateProductSchemas(),
    ...generateServiceSchemas(),
  ];
}

// Generate ContactPage structured data
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Nexus AI - Calgary AI Consultants',
    description:
      'Book a 30-minute discovery call to identify a focused AI pilot for your Calgary SMB. AI assistant, automation, or analytics - with clear safety rules.',
    url: 'https://nexus-ai.com/contact',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Nexus AI',
      url: 'https://nexus-ai.com',
    },
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Nexus AI',
      description:
        'Calgary AI services for SMBs including AI Assistant Setup, Automation Audit + Pilot, and Analytics Quickstart.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Calgary',
        addressRegion: 'AB',
        addressCountry: 'CA',
      },
      telephone: '+1-403-555-0123', // Replace with actual number
      email: 'hello@nexusai.com',
      areaServed: [
        { '@type': 'City', name: 'Calgary' },
        { '@type': 'City', name: 'Airdrie' },
        { '@type': 'City', name: 'Cochrane' },
        { '@type': 'City', name: 'Okotoks' },
      ],
      sameAs: [
        // Add social media URLs when available
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI Assistant Setup',
              description:
                'Custom AI assistant implementation with voice and chat capabilities.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Automation Audit + Pilot',
              description:
                'Process automation assessment and implementation pilot.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Analytics Quickstart',
              description: 'Data analytics setup and dashboard implementation.',
            },
          },
        ],
      },
    },
  };
}

// Generate JSON-LD script tags for Next.js head
export function generateStructuredDataScript(data: any) {
  return {
    __html: JSON.stringify(data, null, 2),
  };
}
