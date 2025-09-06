'use client';

import Link from 'next/link';
import Image from 'next/image';
import SpriteIcon from '@/components/ui/SpriteIcon';

export default function QuickLinks() {
  return (
    <section aria-labelledby="quick-links-title" className="py-6 md:py-8">
      <div className="mx-auto max-w-container px-4">
        <h2 id="quick-links-title" className="sr-only">
          Quick links
        </h2>
        <ul
          role="list"
          className="grid grid-cols-2 gap-3 sm:gap-4 md:max-w-2xl md:mx-auto"
        >
          <li>
            <Link
              href="/cases"
              className="group block rounded-xl border border-glass-border bg-glass p-4 shadow-elev hover:shadow-elev-lg transition-all focus-ring"
            >
              <div className="flex items-center gap-3">
                <SpriteIcon
                  name="ps--nav--case-studies"
                  size={32}
                  className="text-primary"
                />
                <span className="font-medium">Case studies</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="group block rounded-xl border border-glass-border bg-glass p-4 shadow-elev hover:shadow-elev-lg transition-all focus-ring"
            >
              <div className="flex items-center gap-3">
                <SpriteIcon
                  name="ps--nav--faq"
                  size={32}
                  className="text-primary"
                />
                <span className="font-medium">FAQ</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
