import { Hero } from '@/components/Hero';
import { ServicesOverview } from '@/components/ServicesOverview';
import { CaseStudiesOverview } from '@/components/CaseStudiesOverview';
import { ContactForm } from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <CaseStudiesOverview />
      <ContactForm />
    </>
  );
}
