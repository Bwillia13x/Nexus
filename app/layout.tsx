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
import { getBrandName, getAbsoluteLogoUrl, getLogoSrc } from '@/lib/brand';
import { ShortInquiryProvider } from '@/components/short-inquiry/ShortInquiryProvider';
import { ShortInquiryModal } from '@/components/short-inquiry/ShortInquiryModal';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { ScrollReveal } from '@/components/ScrollReveal';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const brandName = getBrandName();
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const logoSrc = getLogoSrc();
const schedulerUrl = process.env.NEXT_PUBLIC_SCHEDULER_URL || '';
let schedulerOrigin: string | null = null;
try {
  schedulerOrigin = schedulerUrl ? new URL(schedulerUrl).origin : null;
} catch {
  schedulerOrigin = null;
}
export const metadata: Metadata = {
  title: `${brandName} — Calgary AI Consulting for small businesses`,
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
    title: `${brandName} — Calgary AI Consulting for small businesses`,
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
    title: `${brandName} — Calgary AI Consulting for small businesses`,
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
        {/* Logo is optimized via next/image; avoid preloading raw asset to prevent duplicate fetch */}
        {/* Preconnect/dns-prefetch for analytics */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link
          rel="preconnect"
          href="https://plausible.io"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//plausible.io" />
        {/* Optional preconnect for scheduler host if configured */}
        {schedulerOrigin ? (
          <>
            <link
              rel="preconnect"
              href={schedulerOrigin}
              crossOrigin="anonymous"
            />
            <link
              rel="dns-prefetch"
              href={`//${new URL(schedulerOrigin).host}`}
            />
          </>
        ) : null}
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
        {/** FAQPage JSON-LD moved to page-level to avoid duplication. */}
      </head>
      <body className="relative antialiased font-sans">
        <ShortInquiryProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Nav />
          <main id="main-content" className="pt-32 pb-24 md:pb-0">
            {children}
          </main>
          <ScrollReveal />
          <Footer />
          <MobileStickyCTA />
          <Analytics />
          {process.env.NEXT_PUBLIC_ENABLE_TOASTS === '1' ? (
            <ToastProvider />
          ) : null}
          {process.env.NODE_ENV === 'development' ? (
            <PerformanceMonitor />
          ) : null}
          <ShortInquiryModal />
        </ShortInquiryProvider>
      </body>
    </html>
  );
}
