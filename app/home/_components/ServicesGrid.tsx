'use client';

import { servicesContent } from '../_content';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {servicesContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {servicesContent.subtitle}
          </p>
        </div>

        <div
          className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-3"
          role="list"
        >
          {servicesContent.items.map((service, index) => (
            <article
              key={service.title}
              className="p-6 rounded-lg border bg-white shadow-elev hover:shadow-elev-lg hover:ring-2 hover:ring-brand-500/30 transition-all duration-300 focus-within:shadow-elev-lg focus-within:ring-2 focus-within:ring-brand-500/40 h-full flex flex-col"
              role="listitem"
            >
              {/* Service icon */}
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-3xl shadow-lg">
                {index === 0 ? '🤖' : index === 1 ? '⚙️' : '📊'}
              </div>

              {/* Service title */}
              <h3 className="font-semibold text-xl lg:text-2xl mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Service description */}
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed flex-grow">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
