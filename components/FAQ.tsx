import { homeContent } from '@/app/_content/home';
import { MaybeIcon } from '@/components/ui/MaybeIcon';

export function FAQ() {
  const faqs = homeContent.faq.items.map((item, index) => ({
    ...item,
    icon: ['🔒', '☁️', '🛠️', '📊', '🛡️', '🔄', '📋'][index] || '❓',
  }));

  return (
    <div className="container-wide max-w-5xl mx-auto">
      <div className="space-y-8 md:space-y-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="card-glass p-6 md:p-8 hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4 md:gap-6">
              <div className="flex-shrink-0 mt-1">
                <MaybeIcon
                  emoji={faq.icon}
                  className="text-3xl"
                  title={faq.question}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg md:text-xl mb-4 text-ink group-hover:text-primary transition-colors leading-tight">
                  {faq.question}
                </h3>
                <p className="text-muted leading-relaxed text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 md:mt-20 text-center">
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-3xl border border-glass-border bg-glass backdrop-blur-xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Still have questions?
          </h3>
          <p className="text-lg text-muted mb-8 leading-relaxed">
            Book a free discovery call and we’ll answer your questions about
            readiness, tool selection, and safe no‑code pilots.
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-4">
            Book Discovery Call <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
