'use client';

import { ContactForm } from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to explore AI for your Calgary business? Let's discuss your
            goals and see how we can help.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
