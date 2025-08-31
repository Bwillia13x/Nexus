'use client';

import Link from 'next/link';
import { trackCtaClick } from '@/lib/analytics';

export default function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href="/"
        className="btn-primary inline-flex items-center gap-2"
        onClick={() =>
          trackCtaClick('thank_you_return_home', 'Return to Home', 'thank_you')
        }
      >
        <span>Return to Home</span>
        <span>←</span>
      </Link>
      <Link
        href="/playbooks"
        className="btn-secondary inline-flex items-center gap-2"
        onClick={() =>
          trackCtaClick(
            'thank_you_playbooks_click',
            'Get Playbooks & Templates',
            'thank_you'
          )
        }
      >
        <span>Get Playbooks & Templates</span>
        <span>📚</span>
      </Link>
    </div>
  );
}
