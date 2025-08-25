import { Hero } from '@/components/Hero';
import { ServicesOverview } from '@/components/ServicesOverview';
import { CaseStudiesOverview } from '@/components/CaseStudiesOverview';
import { ContactForm } from '@/components/ContactForm';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Unified Background System */}
      <div className="fixed inset-0 -z-10 overflow-hidden ambient-orbs">
        {/* Primary background orb - top left */}
        <div className="ambient-orb absolute -top-40 -left-40 w-[780px] h-[780px] rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent" />
        {/* Secondary background orb - bottom right */}
        <div className="ambient-orb ambient-orb--slow absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full bg-gradient-to-br from-secondary/25 via-secondary/10 to-transparent" />
        {/* Vignette overlay for contrast */}
        <div className="ambient-vignette" />
      </div>

      <Hero />
      <ServicesOverview />
      <CaseStudiesOverview />
      <ContactForm />
    </div>
  );
}
