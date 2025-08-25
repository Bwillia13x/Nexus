'use client';

import { faqContent } from '../_content';

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqContent.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-white shadow-elev hover:shadow-elev-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
