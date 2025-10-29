import { ContactHero } from './_components/ContactHero';
import { InquiryForm } from './_components/InquiryForm';
import { SidebarCards } from './_components/SidebarCards';
import { CONTACT_CONTENT } from './_content';
import {
  generateContactPageSchema,
  generateStructuredDataScript,
  generateBreadcrumbList,
} from '@/lib/schema-org';

export const metadata = {
  title: 'Contact Drew | Calgary AI Consultant — Prairie Signal',
  description:
    'Book a discovery call. Tell us what you want to improve, and we will suggest a simple first step that works with your current tools.',
  robots: 'index,follow',
  keywords:
    'Calgary AI consultant, AI advisory, AI readiness audit, no‑code pilots, contact Prairie Signal',
  openGraph: {
    title: 'Contact Prairie Signal - Calgary AI Consultants',
    description:
      'Book a discovery call to talk through a simple, practical first step for your Calgary business.',
    url:
      (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') +
      '/contact',
    siteName: 'Prairie Signal',
    type: 'website',
    images: ['/og-contact.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Prairie Signal - Calgary AI Consultants',
    description:
      'Book a discovery call to talk through a simple, practical first step.',
    images: ['/og-contact.svg'],
  },
};

export default function ContactPage() {
  const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL;

  const contactPageSchema = generateContactPageSchema();
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const breadcrumbs = generateBreadcrumbList([
    { name: 'Home', url: site + '/' },
    { name: 'Contact', url: site + '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript(
          contactPageSchema
        )}
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

        {/* Hero Section */}
        <ContactHero />

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
            <div className="grid lg:grid-cols-[minmax(0,1fr),360px] gap-6 lg:gap-8">
              {/* Form Section */}
              <InquiryForm />

              {/* Sidebar Cards */}
              <SidebarCards />
            </div>
          </div>
        </section>

        {/* Minimal follow-up info */}
        <section className="py-12">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 text-center text-sm text-muted">
            {businessEmail ? (
              <p className="mb-2">
                Prefer email? Reach me at{' '}
                <a
                  href={`mailto:${businessEmail}`}
                  className="link font-medium"
                >
                  {businessEmail}
                </a>
                .
              </p>
            ) : null}
            <p className="text-xs">{CONTACT_CONTENT.privacy.note}</p>
          </div>
        </section>
      </div>
    </>
  );
}
