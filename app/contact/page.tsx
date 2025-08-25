import { ContactHero } from './_components/ContactHero';
import { InquiryForm } from './_components/InquiryForm';
import { SidebarCards } from './_components/SidebarCards';
import { CONTACT_CONTENT } from './_content';
import {
  generateContactPageSchema,
  generateStructuredDataScript,
} from '@/lib/schema-org';

export const metadata = {
  title: 'Contact Drew | Calgary AI Consultant — Nexus AI',
  description:
    'Book a 30-minute discovery call to identify a focused AI pilot we can ship in ~30 days — assistant, automation, or analytics — with clear guardrails.',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://nexus-ai.com/contact',
  },
  keywords:
    'Calgary AI consultant, AI pilot program, AI automation Calgary, AI assistant setup, contact Nexus AI',
  openGraph: {
    title: 'Contact Nexus AI - Calgary AI Consultants',
    description:
      'Book a 30-minute discovery call to identify a focused AI pilot for your Calgary SMB.',
    url: 'https://nexus-ai.com/contact',
    siteName: 'Nexus AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Nexus AI - Calgary AI Consultants',
    description:
      'Book a 30-minute discovery call to identify a focused AI pilot for your Calgary SMB.',
  },
};

export default function ContactPage() {
  const businessEmail =
    process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'hello@nexusai.com';

  const contactPageSchema = generateContactPageSchema();

  return (
    <>
      <link rel="canonical" href="https://nexus-ai.com/contact" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript(
          contactPageSchema
        )}
      />
      <main className="relative min-h-screen">
        {/* Unified Background System */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Primary background orb - top left */}
          <div className="absolute -top-32 -left-32 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 via-primary/15 via-secondary/10 to-transparent filter blur-3xl animate-pulse" />

          {/* Secondary background orb - bottom right */}
          <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-secondary/20 via-secondary/15 via-primary/10 to-transparent filter blur-3xl animate-pulse" />
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
            <p className="mb-2">
              Prefer email? Reach me at{' '}
              <a
                href={`mailto:${businessEmail}`}
                className="font-medium underline underline-offset-2 hover:text-primary transition-colors"
              >
                {businessEmail}
              </a>
              .
            </p>
            <p className="text-xs">{CONTACT_CONTENT.privacy.note}</p>
          </div>
        </section>
      </main>
    </>
  );
}
