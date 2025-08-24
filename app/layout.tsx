import '../styles/globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Analytics } from '@/components/Analytics';

const ClientToaster = dynamic(() => import('@/components/ToastProvider'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Nexus AI — Calgary AI Consulting for SMBs',
  description:
    'Solo AI-integration consultancy helping Calgary SMBs automate workflows, deploy AI assistants, and unlock insights.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
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
        url: '/og.png',
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
    images: ['/og.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
              address: {
                '@type': 'PostalAddress',
                streetAddress: process.env.NEXT_PUBLIC_BUSINESS_STREET,
                addressLocality: process.env.NEXT_PUBLIC_BUSINESS_LOCALITY || 'Calgary',
                addressRegion: process.env.NEXT_PUBLIC_BUSINESS_REGION || 'AB',
                postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL,
                addressCountry: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || 'CA',
              },
              areaServed: 'Calgary, Alberta, Canada',
              sameAs: [
                process.env.NEXT_PUBLIC_LINKEDIN_URL,
                process.env.NEXT_PUBLIC_X_URL || process.env.NEXT_PUBLIC_TWITTER_URL,
                process.env.NEXT_PUBLIC_GITHUB_URL,
              ].filter(Boolean),
            }),
          }}
        />
      </head>
      <body className="relative antialiased">
        <ErrorBoundary>
          <ClientToaster />
          <Analytics />
          <Nav />
          <main className="pt-24">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}