'use client';

import { servicesContent } from '../_content';
import SpriteIcon from '@/components/ui/SpriteIcon';

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 cv-auto"
      aria-labelledby="services-title"
      data-reveal-once
    >
      <div className="mx-auto max-w-container px-4">
        <div className="text-center mb-12">
          <h2
            id="services-title"
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
          >
            {servicesContent.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {servicesContent.subtitle}
          </p>
        </div>

        <div
          className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-3 stagger-children"
          role="list"
        >
          {servicesContent.items.map((service, index) => (
            <article
              key={service.title}
              className="card-glass glass-liquid h-full flex flex-col focus-within:ring-2 focus-within:ring-primary/30"
              data-reveal
              role="listitem"
            >
              {/* Service icon */}
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-glass border border-glass-border text-3xl shadow-lg">
                {(() => {
                  const name =
                    index === 0
                      ? 'ps--services--deploy-assistant'
                      : index === 1
                        ? 'ps--services--automate-reporting'
                        : 'ps--services--build-dashboards';
                  return (
                    <SpriteIcon
                      name={name}
                      size={32}
                      className="text-primary"
                    />
                  );
                })()}
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
