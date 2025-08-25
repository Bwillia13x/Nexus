import '../styles/globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { ToastProvider } from '@/components/ToastProvider';
import { PerformanceMonitor } from '@/components/PerformanceMonitor';

export const metadata: Metadata = {
  title: 'Nexus AI — Calgary AI Consulting for SMBs',
  description:
    'Solo AI-integration consultancy helping Calgary SMBs automate workflows, deploy AI assistants, and unlock insights.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Nexus AI',
    title: 'Nexus AI — Calgary AI Consulting for SMBs',
    description:
      'Solo AI-integration consultancy helping Calgary SMBs automate workflows, deploy AI assistants, and unlock insights.',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'Nexus AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus AI — Calgary AI Consulting for SMBs',
    description:
      'Solo AI-integration consultancy helping Calgary SMBs automate workflows, deploy AI assistants, and unlock insights.',
    images: ['/og.svg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          // Build LocalBusiness JSON-LD from environment variables. Undefined fields are omitted by JSON.stringify.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Nexus AI',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              image: process.env.NEXT_PUBLIC_BUSINESS_IMAGE,
              logo: process.env.NEXT_PUBLIC_BUSINESS_LOGO,
              telephone: process.env.NEXT_PUBLIC_BUSINESS_TELEPHONE,
              description:
                'Solo AI-integration consultancy helping Calgary businesses automate workflows, deploy assistants, and ship dashboards—safely and measurably.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: process.env.NEXT_PUBLIC_BUSINESS_STREET,
                addressLocality:
                  process.env.NEXT_PUBLIC_BUSINESS_LOCALITY || 'Calgary',
                addressRegion: process.env.NEXT_PUBLIC_BUSINESS_REGION || 'AB',
                postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL,
                addressCountry:
                  process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || 'CA',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Calgary',
                },
                {
                  '@type': 'City',
                  name: 'Airdrie',
                },
                {
                  '@type': 'City',
                  name: 'Cochrane',
                },
                {
                  '@type': 'City',
                  name: 'Okotoks',
                },
              ],
              serviceType: [
                'AI Consulting',
                'Automation',
                'Business Intelligence',
                'Workflow Optimization',
              ],
              priceRange: '$$',
              sameAs: [
                process.env.NEXT_PUBLIC_LINKEDIN_URL,
                process.env.NEXT_PUBLIC_X_URL ||
                  process.env.NEXT_PUBLIC_TWITTER_URL,
                process.env.NEXT_PUBLIC_GITHUB_URL,
              ].filter(Boolean),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Will my data be used to train AI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No—private data stays private; usage limited to your project.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Cloud vs on-prem?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Default cloud; on-prem or VPC by request.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which models/tools do you use?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We pick per-use-case (OpenAI/Groq/Anthropic/etc.) with clear cost + latency trade-offs.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do we measure ROI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Time saved, error rate, ticket deflection, response time, SLA. We agree metrics up front.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Security & access?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Least-privilege, audit trails, secrets management, off-boarding plan.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What happens after the pilot?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Handoff or care plan; your choice.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Contracting?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'SOW with acceptance criteria; change-orders if scope expands.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="relative antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" className="pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
