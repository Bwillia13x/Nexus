import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section
      className="relative flex min-h-[60vh] md:min-h-[80vh] items-center justify-center section pt-8"
      id="top"
      aria-labelledby="hero-heading"
    >
      {/* Orbs for subtle floating background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-16 md:-top-32 -left-16 md:-left-32 w-48 md:w-96 h-48 md:h-96 rounded-full bg-gradient-to-br from-primary/40 via-secondary/30 to-transparent filter blur-2xl animate-pulse" />
        <div className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 w-40 md:w-80 h-40 md:h-80 rounded-full bg-gradient-to-br from-secondary/40 via-primary/30 to-transparent filter blur-2xl animate-pulse" />
      </div>

      <div className="container-wide max-w-3xl text-center px-4">
        {/* Logo at the top */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/Nexus_Logo.png"
            alt="Nexus AI Logo"
            width={400}
            height={160}
            className="h-24 md:h-32 lg:h-40 w-auto mb-4"
            priority
          />
        </div>

        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 gradient-title"
        >
          Calgary AI Consulting for SMBs
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted mb-8 px-4">
          Solo AI-integration consultancy helping Calgary businesses automate
          workflows, deploy AI assistants, and unlock data-driven insights.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
          <Link
            href="#contact"
            className="btn-primary w-full sm:w-auto justify-center min-h-[44px]"
            aria-label="Book a Calgary consultation"
          >
            Book a Calgary consult
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
          <Link
            href="#services"
            className="btn-outline w-full sm:w-auto justify-center min-h-[44px]"
            aria-label="Learn about our services"
          >
            What I do
          </Link>
        </div>
      </div>
    </section>
  );
}
