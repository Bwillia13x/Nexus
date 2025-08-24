import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center section" id="top">
      {/* Orbs for subtle floating background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary/40 via-secondary/30 to-transparent filter blur-2xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-secondary/40 via-primary/30 to-transparent filter blur-2xl animate-pulse" />
      </div>
      <div className="container-wide max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 gradient-title">
          Calgary AI Consulting for SMBs
        </h1>
        <p className="text-lg md:text-xl text-muted mb-8">
          Solo AI-integration consultancy helping Calgary businesses automate workflows, deploy AI assistants, and unlock data-driven insights.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#contact"
            className="btn-primary"
          >
            Book a Calgary consult<span className="ml-2">→</span>
          </Link>
          <Link
            href="#services"
            className="btn-outline"
          >
            What I do
          </Link>
        </div>
      </div>
    </section>
  );
}