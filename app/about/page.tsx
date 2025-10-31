import { aboutContent as c } from './_content';
import { generateLocalBusinessSchema } from '@/lib/schema';
import {
  generateBreadcrumbList,
  generateStructuredDataScript,
} from '@/lib/schema-org';
import { PageToc } from './_components/PageToc';
import PageBackground from '@/components/PageBackground';
import { AboutHero } from './_components/AboutHero';
import { IdentityCards } from './_components/IdentityCards';
import { BackgroundAndMetrics } from './_components/BackgroundAndMetrics';
import { PrinciplesGrid } from './_components/PrinciplesGrid';
import { FounderSnapshot } from './_components/FounderSnapshot';
import { EngagementTimeline } from './_components/EngagementTimeline';
import { SecurityPanel } from './_components/SecurityPanel';
import { FAQ } from './_components/FAQ';
import { ResourcesDownloads } from './_components/ResourcesDownloads';
import { MediaKit } from './_components/MediaKit';
import { Speaking } from './_components/Speaking';
import { EndCTA } from './_components/EndCTA';

export const metadata = {
  title: 'About Drew | Calgary AI Consultant — Prairie Signal',
  description:
    'Solo AI-integration consultancy for Calgary small businesses. Fast, safe, measurable outcomes for assistants, automations, and analytics.',
  openGraph: {
    title: 'About Prairie Signal — Calgary AI Consultant',
    description:
      'Solo AI-integration consultancy for Calgary small businesses. Practical, safe, measurable outcomes.',
    images: ['/og-about.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Prairie Signal — Calgary AI Consultant',
    description:
      'Solo AI-integration consultancy for Calgary small businesses. Practical, safe, measurable outcomes.',
    images: ['/og-about.svg'],
  },
};

export default function AboutPage() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const breadcrumbs = generateBreadcrumbList([
    { name: 'Home', url: site + '/' },
    { name: 'About', url: site + '/about' },
  ]);
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(), null, 2),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateStructuredDataScript(breadcrumbs)}
      />

      <div className="relative min-h-screen">
        {/* Unified Page Background */}
        <PageBackground />

        {/* Hero Section */}
        <AboutHero hero={c.hero} />

        {/* Main Content Grid */}
        <div className="container-wide px-4">
          <div className="grid grid-cols-1 2xl:grid-cols-[minmax(0,1fr),280px] gap-8 2xl:gap-12 max-w-[1280px] mx-auto items-start">
            <div>
              {/* Overview Section */}
              <section
                id="overview"
                className="py-16 md:py-24 lg:py-28 cv-auto"
                data-reveal-once
              >
                <IdentityCards who={c.whoIAm} how={c.howIWork} />
              </section>

              {/* Background Section */}
              <section
                id="background"
                className="py-16 md:py-24 lg:py-28 cv-auto"
                data-reveal-once
              >
                <BackgroundAndMetrics
                  background={c.background}
                  metrics={c.metrics}
                />
              </section>

              {/* Principles Section */}
              <section
                id="principles"
                className="py-16 md:py-24 lg:py-28 cv-auto"
                data-reveal-once
              >
                <PrinciplesGrid items={c.principles} />
              </section>

              {/* Founder Section */}
              <section
                id="founder"
                className="py-16 md:py-24 lg:py-28 cv-auto"
                data-reveal-once
              >
                <FounderSnapshot bullets={c.founderSnapshot} />
              </section>

              {/* Process Section */}
              <section
                id="process"
                className="py-16 md:py-24 lg:py-28 cv-auto"
                data-reveal-once
              >
                <EngagementTimeline steps={c.process} />
              </section>

              {/* Security Section */}
              <section
                id="security"
                className="py-16 md:py-24 lg:py-28 cv-auto"
                data-reveal-once
              >
                <SecurityPanel items={c.security.items} />
              </section>

              {/* FAQ Section */}
              <section
                id="faq"
                className="py-16 md:py-24 lg:py-28 cv-auto"
                data-reveal-once
              >
                <FAQ items={c.faq} />
              </section>

              {/* Resources Section */}
              <section
                id="resources"
                className="py-16 md:py-24 lg:py-28 cv-auto"
              >
                <ResourcesDownloads items={c.resources} />
              </section>

              {/* Media Section */}
              <section id="media" className="py-16 md:py-24 lg:py-28 cv-auto">
                <MediaKit items={c.media} />
              </section>

              {/* Speaking Section */}
              <section
                id="speaking"
                className="py-16 md:py-24 lg:py-28 cv-auto"
              >
                <Speaking talks={c.speaking} />
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-16 md:py-24 lg:py-28">
                <EndCTA />
              </section>
            </div>

            {/* Table of Contents - visible on very large screens */}
            <div className="hidden 2xl:block">
              <PageToc
                sections={[
                  'Overview',
                  'Background',
                  'Principles',
                  'Founder',
                  'Process',
                  'Security',
                  'FAQ',
                  'Resources',
                  'Media',
                  'Speaking',
                  'Contact',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
