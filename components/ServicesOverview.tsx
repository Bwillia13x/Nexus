import { homeContent } from '@/app/_content/home';
import { Section } from './Section';
import SpriteIcon from './ui/SpriteIcon';

export function ServicesOverview() {
  return (
    <Section
      id="services"
      title={homeContent.services.title}
      subtitle={homeContent.services.subtitle}
    >
      <div className="container-wide">
        <div
          className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-3"
          role="list"
        >
          {homeContent.services.items.map((service, index) => (
            <article
              key={service.title}
              className="card-glass group transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 focus-within:ring-offset-eggshell h-full flex flex-col"
              role="listitem"
            >
              <div className="icon-tile mb-6 group-hover:scale-110 group-hover:rotate-[-2deg] transition-all duration-300">
                <SpriteIcon
                  name={
                    index === 0
                      ? 'ps--services--deploy-assistant'
                      : index === 1
                        ? 'ps--services--automate-reporting'
                        : 'ps--services--build-dashboards'
                  }
                  size={28}
                  className="relative z-10"
                />
              </div>
              <h3 className="font-semibold text-xl lg:text-2xl mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-muted text-base lg:text-lg leading-relaxed flex-grow">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
