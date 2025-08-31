'use client';

import dynamic from 'next/dynamic';
import { sectionContent } from '../_content';

const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'), {
  ssr: false,
  loading: () => (
    <div className="text-center p-8" role="status" aria-live="polite">
      Loading checklist...
    </div>
  ),
});

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
