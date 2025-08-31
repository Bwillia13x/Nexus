'use client';

import { faqContent } from '../_content';

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24 cv-auto"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2
            id="faq-title"
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6" role="list">
          {faqContent.map((faq, index) => (
            <div
              key={index}
              className="card-glass glass-liquid transition-all duration-300"
              role="listitem"
              aria-labelledby={`faq-q-${index}`}
            >
              <h3
                id={`faq-q-${index}`}
                className="text-xl font-semibold mb-3 text-balance"
              >
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
