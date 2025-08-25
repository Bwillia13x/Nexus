import Link from 'next/link';

interface AboutHeroProps {
  hero: {
    title: string;
    subtitle: string;
    badges: string[];
  };
}

export function AboutHero({ hero }: AboutHeroProps) {
  return (
    <section className="relative">
      {/* Background gradient only */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="relative z-10 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
          <div className="text-center">
            {/* H1 - LCP element */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[15px] md:text-base leading-7">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-[15px] md:text-base leading-7">
              {hero.subtitle}
            </p>

            {/* Badge row */}
            <div className="flex justify-center gap-3 mb-12 flex-wrap">
              {hero.badges.map((badge, index) => (
                <div
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border shadow-sm"
                >
                  <span className="text-sm font-medium text-foreground">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact?intent=discovery"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                Book a call
                <span className="ml-2 text-lg">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur border border-border text-foreground rounded-full font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-border"
              >
                See services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
