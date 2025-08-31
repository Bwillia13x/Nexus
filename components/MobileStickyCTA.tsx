'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useShortInquiry } from '@/components/short-inquiry/ShortInquiryProvider';
import { trackCtaClick } from '@/lib/analytics';

export function MobileStickyCTA() {
  const { open } = useShortInquiry();
  const [hiddenNearContact, setHiddenNearContact] = useState(false);

  // Hide the sticky CTA when the contact section is in view
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const target = document.getElementById('contact');
    if (!target || !(window as any).IntersectionObserver) return;

    const io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.target === target) {
            setHiddenNearContact(entry.isIntersecting);
          }
        }
      },
      {
        root: null,
        // Start hiding a bit before it's fully in view
        rootMargin: '0px 0px -40% 0px',
        threshold: 0,
      }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const handleInquiry = () => {
    trackCtaClick('mobile_sticky_inquiry', 'Quick inquiry', 'sticky_cta');
    open();
  };

  const handleBook = () => {
    trackCtaClick('mobile_sticky_book', 'Book a discovery call', 'sticky_cta');
  };

  const isVisible = !hiddenNearContact;

  return (
    <div
      id="mobile-sticky-cta"
      className={`fixed inset-x-0 bottom-0 z-40 md:hidden pointer-events-none transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      aria-hidden={isVisible ? undefined : true}
    >
      <nav
        aria-label="Quick actions"
        className="pointer-events-auto mx-auto max-w-container px-4 pb-[calc(env(safe-area-inset-bottom)+.5rem)]"
      >
        <div className="rounded-full border border-glass-border bg-white/90 supports-[backdrop-filter]:bg-white/60 backdrop-blur shadow-elev-lg flex gap-2 p-2">
          <button
            type="button"
            onClick={handleInquiry}
            className="flex-1 btn-secondary rounded-full px-4 py-2 text-sm font-semibold"
          >
            Quick inquiry
          </button>
          <Link
            href="/schedule"
            onClick={handleBook}
            className="flex-1 btn-primary rounded-full px-4 py-2 text-sm font-semibold text-center"
          >
            Book a discovery call
          </Link>
        </div>
      </nav>
    </div>
  );
}
