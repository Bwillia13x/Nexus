import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Drew | Calgary AI Consultant — Nexus AI',
  description: 'Book a 20‑minute intro to identify a high‑impact AI assistant, automation, or analytics pilot for your Calgary SMB.',
};

export default function ContactPage() {
  const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'hello@nexusai.com';
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container-wide text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-title">
            Book a 20‑minute intro
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Calgary SMB? We'll identify a pilot we can ship in ~3 weeks — assistant, automation, or analytics — with sensible guardrails.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Minimal follow-up info */}
      <section className="section">
        <div className="container-wide text-center text-sm text-muted">
          Prefer email? Reach me at{' '}
          <a href={`mailto:${businessEmail}`} className="font-medium underline underline-offset-2">
            {businessEmail}
          </a>.
        </div>
      </section>
    </div>
  );
}