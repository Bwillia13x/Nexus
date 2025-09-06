import Link from 'next/link';
import SpriteIcon from '@/components/ui/SpriteIcon';

interface AboutHeroProps {
  hero: {
    title: string;
    subtitle: string;
    badges: string[];
  };
}

export function AboutHero({ hero }: AboutHeroProps) {
  return (
    <section
      className="relative py-20 md:py-28"
      aria-labelledby="about-hero-title"
    >
      {/* Background gradient + mesh overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-secondary/5" />
      <div className="absolute inset-0 -z-10 hero-mesh" />

      <div className="relative z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="card-hero hero-reveal text-center">
            {/* H1 - LCP element */}
            <h1
              id="about-hero-title"
              className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-title text-balance text-pretty"
            >
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
              {hero.subtitle}
            </p>

            {/* Badge row */}
            <ul
              className="mt-5 flex flex-wrap justify-center gap-2"
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
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link
                  href="/contact?intent=discovery"
                  className="btn-primary shadow-elev hover:shadow-elev-lg min-w-[200px] sm:min-w-[240px] text-base sm:text-lg"
                >
                  <SpriteIcon
                    name="ps--cta--book-call_alt-calendar-check"
                    size={24}
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
