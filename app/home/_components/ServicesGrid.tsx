'use client';

import { servicesContent } from '../_content';
import Image from 'next/image';

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 cv-auto"
      aria-labelledby="services-title"
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
          className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-3"
          role="list"
        >
          {servicesContent.items.map((service, index) => (
            <article
              key={service.title}
              className="card-glass glass-liquid h-full flex flex-col focus-within:ring-2 focus-within:ring-primary/30"
              role="listitem"
            >
              {/* Service icon */}
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-secondary text-white text-3xl shadow-lg">
                {(() => {
                  const src =
                    index === 0
                      ? '/icons-svg/services/deploy-assistant.svg'
                      : index === 1
                        ? '/icons-svg/services/automate-reporting.svg'
                        : '/icons-svg/services/build-dashboards.svg';
                  const alt =
                    index === 0
                      ? 'Deploy assistant'
                      : index === 1
                        ? 'Automate reporting'
                        : 'Build dashboards';
                  return <Image src={src} alt={alt} width={32} height={32} />;
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
