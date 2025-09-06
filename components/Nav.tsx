'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getBrandName, getLogoSrc } from '@/lib/brand';
import { trackScheduleClick, trackCtaClick } from '@/lib/analytics';
import { useShortInquiry } from '@/components/short-inquiry/ShortInquiryProvider';

export function Nav() {
  const brandName = getBrandName();
  const pathname = usePathname();
  const { open } = useShortInquiry();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  // Allow closing with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  // Prevent background scroll and inert the page when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const toInert: HTMLElement[] = [];
    const main = document.getElementById('main-content');
    if (main) toInert.push(main);
    const footer = document.querySelector('footer');
    if (footer) toInert.push(footer as HTMLElement);
    const sticky = document.getElementById('mobile-sticky-cta');
    if (sticky) toInert.push(sticky);
    toInert.forEach(el => el.setAttribute('inert', ''));

    return () => {
      document.body.style.overflow = prev;
      toInert.forEach(el => el.removeAttribute('inert'));
    };
  }, [menuOpen]);
  // Basic focus management: focus first link on open, return focus to toggle on close
  useEffect(() => {
    if (menuOpen) {
      firstMobileLinkRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [menuOpen]);

  // Trap focus inside the mobile menu when open (Tab/Shift+Tab)
  const handleMenuTrapFocus = (e: React.KeyboardEvent) => {
    if (!menuOpen || e.key !== 'Tab') return;
    const root = menuRef.current;
    if (!root) return;
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(selector));
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const active = document.activeElement as HTMLElement | null;
    if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    }
  };

  // Derived classes for cleaner template strings
  const bgClass = scrolled
    ? 'bg-glass-2 shadow-elev-lg'
    : 'bg-glass shadow-elev';
  const padClass = scrolled
    ? 'px-2.5 py-2 sm:px-4 sm:py-2.5'
    : 'px-3 py-2.5 sm:px-6 sm:py-3';
  const navClass = `fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 border border-glass-border rounded-full flex items-center gap-4 sm:gap-6 md:gap-8 backdrop-blur-xl transition-all duration-500 group ${bgClass} hover:shadow-elev-lg max-w-[calc(100vw-1rem)] ${padClass}`;

  return (
    <>
      <nav
        id="navigation"
        aria-label="Primary"
        className={navClass}
        data-scrolled={scrolled}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

        <Link
          href="/"
          className="relative z-10 group-hover:scale-105 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell rounded-full shrink-0"
        >
          {(() => {
            const logoSrc = getLogoSrc();
            const logoBox = scrolled
              ? 'relative h-8 w-[112px] sm:h-12 sm:w-[160px]'
              : 'relative h-10 w-[120px] sm:h-14 sm:w-[180px]';
            return (
              <div className={logoBox}>
                <Image
                  src={logoSrc}
                  alt={`${brandName} Logo`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(min-width: 640px) 160px, 112px"
                />
              </div>
            );
          })()}
        </Link>

        {/* Desktop links centered between logo and CTA */}
        <ul className="hidden md:flex items-center gap-6 md:gap-8 text-sm relative z-10 ml-1 sm:ml-2">
          <li>
            <Link
              href="/services"
              className="px-3 py-1.5 rounded-full hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 font-medium leading-none hover:text-primary group/link relative overflow-hidden nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
              data-active={isActive('/services')}
              aria-current={isActive('/services') ? 'page' : undefined}
            >
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/training"
              className="px-3 py-1.5 rounded-full hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 font-medium leading-none hover:text-primary group/link relative overflow-hidden nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
              data-active={isActive('/training')}
              aria-current={isActive('/training') ? 'page' : undefined}
            >
              <span className="relative z-10">Training</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/playbooks"
              className="px-3 py-1.5 rounded-full hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 font-medium leading-none hover:text-primary group/link relative overflow-hidden nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
              data-active={isActive('/playbooks')}
              aria-current={isActive('/playbooks') ? 'page' : undefined}
            >
              <span className="relative z-10">Playbooks</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="px-3 py-1.5 rounded-full hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 font-medium leading-none hover:text-primary group/link relative overflow-hidden nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
              data-active={isActive('/faq')}
              aria-current={isActive('/faq') ? 'page' : undefined}
            >
              <span className="relative z-10">FAQ</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="px-3 py-1.5 rounded-full hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 font-medium leading-none hover:text-primary group/link relative overflow-hidden nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
              data-active={isActive('/about')}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full" />
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-full hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 font-medium leading-none hover:text-primary group/link relative overflow-hidden nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
              data-active={isActive('/contact')}
              aria-current={isActive('/contact') ? 'page' : undefined}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full" />
            </Link>
          </li>
        </ul>

        {/* Spacer pushes CTA to the right on desktop */}
        <div className="hidden md:block flex-1" />

        <button
          type="button"
          className="btn-outline hidden md:inline-flex text-sm font-semibold relative z-10 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell shrink-0 whitespace-nowrap px-4 py-2"
          onClick={() => {
            trackCtaClick('quick_inquiry_click', 'Quick inquiry', 'nav');
            open();
          }}
        >
          Quick inquiry
        </button>

        <Link
          href="/book"
          className="btn-primary hidden md:inline-flex text-sm font-semibold relative z-10 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell shrink-0 whitespace-nowrap px-4 py-2 sm:px-6 sm:py-3"
          onClick={() => trackScheduleClick('nav')}
        >
          Book a discovery call
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          ref={menuButtonRef}
          className="btn-outline md:hidden relative z-10 h-11 w-11 p-0 rounded-full"
          aria-controls="mobile-menu"
          {...(menuOpen ? { 'aria-expanded': 'true' } : {})}
          aria-haspopup="dialog"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="sr-only">
            {menuOpen ? 'Close menu' : 'Open menu'}
          </span>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen ? (
        <>
          <div
            id="mobile-menu-overlay"
            className="fixed inset-0 z-30 bg-black/30 md:hidden"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            className="fixed z-40 left-4 right-4 top-24 border border-glass-border rounded-2xl bg-glass-2 backdrop-blur-xl shadow-elev-lg md:hidden transition-all duration-200 ease-out"
            role="dialog"
            aria-modal="true"
            ref={menuRef}
            tabIndex={-1}
            onKeyDown={handleMenuTrapFocus}
          >
            <ul className="flex flex-col p-2 text-sm">
              <li>
                <Link
                  href="/services"
                  ref={firstMobileLinkRef}
                  className="block px-4 py-3 rounded-xl font-medium nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
                  data-active={isActive('/services')}
                  aria-current={isActive('/services') ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li className="px-2 pt-1 pb-2">
                <button
                  type="button"
                  className="btn-outline w-full justify-center px-4 py-2"
                  onClick={() => {
                    trackCtaClick(
                      'quick_inquiry_click',
                      'Quick inquiry',
                      'nav'
                    );
                    open();
                    setMenuOpen(false);
                  }}
                >
                  Quick inquiry
                </button>
              </li>
              <li className="px-2 pb-2">
                <Link
                  href="/book"
                  className="btn-primary w-full justify-center px-4 py-2"
                  onClick={() => {
                    trackScheduleClick('nav');
                    setMenuOpen(false);
                  }}
                >
                  Book a discovery call
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="block px-4 py-3 rounded-xl font-medium nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
                  data-active={isActive('/training')}
                  aria-current={isActive('/training') ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="/playbooks"
                  className="block px-4 py-3 rounded-xl font-medium nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
                  data-active={isActive('/playbooks')}
                  aria-current={isActive('/playbooks') ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Playbooks
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block px-4 py-3 rounded-xl font-medium nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
                  data-active={isActive('/faq')}
                  aria-current={isActive('/faq') ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-3 rounded-xl font-medium nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
                  data-active={isActive('/about')}
                  aria-current={isActive('/about') ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-4 py-3 rounded-xl font-medium nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
                  data-active={isActive('/contact')}
                  aria-current={isActive('/contact') ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </>
  );
}
