import { aboutContent as c } from './_content';
import { generateLocalBusinessSchema } from '@/lib/schema';
import { PageToc } from './_components/PageToc';
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
  title: 'About Drew | Calgary AI Consultant — Nexus AI',
  description:
    'Solo AI-integration consultancy for Calgary SMBs. Fast, safe, measurable outcomes for assistants, automations, and analytics.',
};

export default function AboutPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(), null, 2),
        }}
      />

      <main className="relative min-h-screen">
        {/* Unified Background System */}
        <div className="fixed inset-0 -z-10 overflow-hidden ambient-orbs">
          {/* Primary background orb - top left */}
          <div className="ambient-orb absolute -top-32 -left-32 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 via-primary/15 via-secondary/10 to-transparent blur-3xl" />

          {/* Secondary background orb - bottom right */}
          <div className="ambient-orb ambient-orb--slow absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-secondary/20 via-secondary/15 via-primary/10 to-transparent blur-3xl" />

          {/* Tertiary orb for added depth */}
          <div className="ambient-orb absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 blur-2xl opacity-60" />

          {/* Wave background overlay */}
          <div className="wave-layer" aria-hidden="true" />
          {/* Vignette overlay for contrast */}
          <div className="ambient-vignette" />
        </div>

        {/* Hero Section */}
        <AboutHero hero={c.hero} />

        {/* Main Content Grid */}
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,280px] gap-8">
            <div>
              {/* Overview Section */}
              <section id="overview" className="py-16 md:py-24 lg:py-28">
                <IdentityCards who={c.whoIAm} how={c.howIWork} />
              </section>

              {/* Background Section */}
              <section id="background" className="py-16 md:py-24 lg:py-28">
                <BackgroundAndMetrics
                  background={c.background}
                  metrics={c.metrics}
                />
              </section>

              {/* Principles Section */}
              <section id="principles" className="py-16 md:py-24 lg:py-28">
                <PrinciplesGrid items={c.principles} />
              </section>

              {/* Founder Section */}
              <section id="founder" className="py-16 md:py-24 lg:py-28">
                <FounderSnapshot bullets={c.founderSnapshot} />
              </section>

              {/* Process Section */}
              <section id="process" className="py-16 md:py-24 lg:py-28">
                <EngagementTimeline steps={c.process} />
              </section>

              {/* Security Section */}
              <section id="security" className="py-16 md:py-24 lg:py-28">
                <SecurityPanel items={c.security.items} />
              </section>

              {/* FAQ Section */}
              <section id="faq" className="py-16 md:py-24 lg:py-28">
                <FAQ items={c.faq} />
              </section>

              {/* Resources Section */}
              <section id="resources" className="py-16 md:py-24 lg:py-28">
                <ResourcesDownloads items={c.resources} />
              </section>

              {/* Media Section */}
              <section id="media" className="py-16 md:py-24 lg:py-28">
                <MediaKit items={c.media} />
              </section>

              {/* Speaking Section */}
              <section id="speaking" className="py-16 md:py-24 lg:py-28">
                <Speaking talks={c.speaking} />
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-16 md:py-24 lg:py-28">
                <EndCTA />
              </section>
            </div>

            {/* Table of Contents - Desktop Sticky, Mobile Pill */}
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
      </main>
    </>
  );
}
