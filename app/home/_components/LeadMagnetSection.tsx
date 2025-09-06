'use client';

import { sectionContent } from '../_content';
import LeadMagnet from '@/components/LeadMagnet';

export default function LeadMagnetSection() {
  return (
    <section
      id="readiness"
      className="py-16 md:py-24 cv-auto"
      aria-labelledby="readiness-title"
    >
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2
            id="readiness-title"
            className="text-3xl md:text-4xl font-bold mb-4 text-balance"
          >
            {sectionContent.readiness.title}
          </h2>
        </div>

        <LeadMagnet />
      </div>
    </section>
  );
}
