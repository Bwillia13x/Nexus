import FAQPageClient from './FAQPageClient';
import FeatureStrip from '@/components/FeatureStrip';
import CTABox from '@/components/CTABox';
import PageBackground from '@/components/PageBackground';

export const metadata = {
  title: 'FAQ | Prairie Signal',
  description:
    'Answers about costs, data safety, tool choice, what’s included, and how we check results.',
};

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: 'What do you actually do?',
    a: 'We set up and connect useful AI tools so they work with what you already use. We do not build big custom systems or use your data to train AI.',
  },
  {
    q: 'Are you tied to one vendor?',
    a: 'No. We choose the tools that fit your needs and budget. We prefer what you already have when it makes sense.',
  },
  {
    q: 'How do you handle privacy and security?',
    a: 'We keep your private data private. We only use the access we need and remove it when we’re done. NDA available.',
  },
  {
    q: 'How do you know it’s working?',
    a: 'We agree on simple signs like time saved, fewer mistakes, and faster replies.',
  },
  {
    q: 'What’s included?',
    a: 'Set up and connect existing tools, training for your team, and easy instructions. We avoid long, custom builds unless you ask for them.',
  },
  {
    q: 'How much does it cost?',
    a: 'Short overview is a fixed fee; checkups, tool choice, and small pilot setup are fixed price. Exact pricing depends on scope.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Page Background */}
      <PageBackground />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <div className="card-hero hero-reveal text-center">
            <div className="eyebrow mb-2" aria-hidden="true">
              Frequently Asked Questions
            </div>
            <h1 className="text-display gradient-title text-balance text-pretty">
              Common questions
              <span className="sr-only"> about AI for business</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
              Everything you need to know about implementing practical AI
              solutions for your Calgary small business.
            </p>
          </div>

          <FeatureStrip
            ariaLabel="FAQ Highlights"
            items={[
              { title: 'Transparent Pricing', caption: 'Fixed scope offers' },
              { title: 'No Data Training', caption: 'Your info stays private' },
              { title: 'Tool Agnostic', caption: 'We match your stack' },
              { title: 'Same-Day Reply', caption: 'Business-day responses' },
            ]}
          />

          <div className="mt-10">
            <FAQPageClient items={faqs} />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <CTABox />
        </div>
      </section>
    </div>
  );
}
