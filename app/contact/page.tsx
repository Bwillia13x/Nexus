import { ContactForm } from '@/components/ContactForm';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata = {
  title: 'Contact Nexus AI | Calgary AI Consulting',
  description:
    'Get in touch to discuss your AI transformation needs. Quick response guaranteed for Calgary SMBs.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      <ContactForm />
    </div>
  );
}
