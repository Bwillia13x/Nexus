import '../styles/globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { Canonical } from '@/components/Canonical';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { ToastProvider } from '@/components/ToastProvider';
import { PerformanceMonitor } from '@/components/PerformanceMonitor';
import { getBrandName, getAbsoluteLogoUrl } from '@/lib/brand';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const brandName = getBrandName();
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const metadata: Metadata = {
  title: `${brandName} — Calgary AI Consulting for SMBs`,
  description:
    'Practical AI help for Calgary small businesses. We set up useful tools that work with what you already use—fast, safe, and in plain English.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: brandName,
    title: `${brandName} — Calgary AI Consulting for SMBs`,
    description:
      'Practical AI that works with what you already use. Fast, safe, and in plain English.',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: brandName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brandName} — Calgary AI Consulting for SMBs`,
    description:
      'Practical AI for Calgary small businesses — in plain English.',
    images: ['/og.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Canonical />
        <script
          type="application/ld+json"
          // Build LocalBusiness JSON-LD from environment variables. Undefined fields are omitted by JSON.stringify.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: brandName,
              url: siteOrigin,
              image: process.env.NEXT_PUBLIC_BUSINESS_IMAGE,
              logo: getAbsoluteLogoUrl(siteOrigin),
              telephone: process.env.NEXT_PUBLIC_BUSINESS_TELEPHONE,
              description:
                'Practical AI help for Calgary small businesses. Plain English, fast setup, and privacy‑minded.',
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
              serviceType: ['AI Advisory', 'Training', 'No‑Code Configuration'],
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
                  name: 'Will you use our data to train AI?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No. Your private data stays private; we only use it to help your project.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Where does it run?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Cloud by default; running on your own systems is possible if needed.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which tools do you use?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We pick tools that fit your needs and budget. We are not tied to any one vendor.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do we know it’s working?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simple signs: time saved, fewer mistakes, faster replies, and adoption. We agree these up front.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Security & access?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We only use the access we need and remove it when we’re done. NDA available.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What happens after the pilot?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Easy instructions for your team; optional light support.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Agreements?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Simple written plan with what we’ll deliver; changes agreed in writing.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="relative antialiased font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content" className="pt-32">
          {children}
        </main>
        <Footer />
        <Analytics />
        {process.env.NEXT_PUBLIC_ENABLE_TOASTS === '1' ? (
          <ToastProvider />
        ) : null}
        {process.env.NODE_ENV === 'development' ? <PerformanceMonitor /> : null}
      </body>
    </html>
  );
}
