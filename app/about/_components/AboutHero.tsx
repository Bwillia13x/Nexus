import Link from 'next/link';
import Image from 'next/image';

interface AboutHeroProps {
  hero: {
    title: string;
    subtitle: string;
    badges: string[];
  };
}

export function AboutHero({ hero }: AboutHeroProps) {
  return (
    <section className="relative" aria-labelledby="about-hero-title">
      {/* Background gradient + mesh overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-secondary/5" />
      <div className="absolute inset-0 -z-10 hero-mesh" />

      <div className="relative z-10 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="text-center">
            {/* Small hero illustration */}
            <div className="flex justify-center mb-6">
              <Image
                src="/icons/about/hero/profile-hex-spark.png"
                alt="About"
                width={72}
                height={72}
              />
            </div>
            {/* H1 - LCP element */}
            <h1
              id="about-hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 gradient-title"
            >
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              {hero.subtitle}
            </p>

            {/* Badge row */}
            <ul
              className="flex justify-center gap-3 mb-12 flex-wrap"
              role="list"
            >
              {hero.badges.map((badge, index) => (
                <li key={index}>
                  <div className="chip">
                    <span className="text-sm font-medium">{badge}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mb-12 md:mb-16">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link
                  href="/contact?intent=discovery"
                  className="btn-primary shadow-elev hover:shadow-elev-lg min-w-[200px] sm:min-w-[240px] text-base sm:text-lg"
                >
                  <Image
                    src="/icons/cta/book-call_alt-calendar-check.png"
                    alt="Book a call"
                    width={24}
                    height={24}
                    className="mr-2 inline-block"
                  />
                  Book a discovery call <span className="ml-2">→</span>
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary shadow-elev hover:shadow-elev-lg min-w-[200px] sm:min-w-[240px] text-base sm:text-lg"
                >
                  See services
                </Link>
              </div>
            </div>

            {/* Scroll cue */}
            <div className="scroll-cue" aria-hidden="true">
              <span className="icon text-muted-foreground text-sm">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
