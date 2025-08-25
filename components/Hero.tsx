import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section
      className="relative flex min-h-[84vh] items-center justify-center section pt-8"
      id="top"
    >
      <div className="container-wide max-w-3xl text-center">
        {/* Logo at the top */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/Nexus_Logo.png"
            alt="Nexus AI Logo"
            width={400}
            height={160}
            className="h-32 md:h-40 w-auto mb-4"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 gradient-title-animated">
          Calgary AI Consulting for SMBs
        </h1>
        <p className="text-lg md:text-xl text-muted mb-8">
          Solo AI-integration consultancy helping Calgary businesses automate
          workflows, deploy AI assistants, and unlock data-driven insights.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#contact" className="btn-primary">
            Book a Calgary consult<span className="ml-2">→</span>
          </Link>
          <Link href="#services" className="btn-outline">
            What I do
          </Link>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span className="icon text-muted text-sm">Scroll</span>
        </div>
      </div>
    </section>
  );
}
