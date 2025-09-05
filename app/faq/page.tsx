import FAQPageClient from './FAQPageClient';
import Image from 'next/image';
import SpriteIcon from '@/components/ui/SpriteIcon';

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
      <div className="page-background">
        <div className="primary-orb" />
        <div className="secondary-orb" />
        <div className="accent-orb" />
        <div className="ambient-vignette" />
        <div className="wave-layer" aria-hidden="true" />
      </div>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex justify-center mb-6">
            <SpriteIcon name="ps--faq--faq-hero_info-bubble" size={64} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-title text-center mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            Costs, safety, tool choice, what’s included, and how we check
            results.
          </p>

          <FAQPageClient items={faqs} />
        </div>
      </section>
    </div>
  );
}
