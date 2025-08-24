'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="navigation"
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-glass backdrop-blur-xl border border-glass-border rounded-full px-8 py-4 flex gap-8 items-center shadow-xl hover:shadow-2xl transition-all duration-500 group"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

      <Link
        href="/"
        className="relative z-10 group-hover:scale-105 transition-transform duration-300"
        onClick={closeMobileMenu}
        aria-label="Nexus AI Home"
      >
        <Image
          src="/images/Nexus_Logo.png"
          alt="Nexus AI Logo"
          width={120}
          height={40}
          className="h-8 w-auto"
          priority
        />
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden relative z-10 w-8 h-8 flex flex-col justify-center items-center gap-1"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle mobile menu"
        aria-controls="mobile-menu"
      >
        <span
          className={`w-6 h-0.5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
        />
        <span
          className={`w-6 h-0.5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`w-6 h-0.5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
        />
      </button>

      {/* Desktop navigation */}
      <ul className="hidden md:flex gap-8 text-sm relative z-10" role="menubar">
        <li role="none">
          <Link
            href="/services"
            className="px-4 py-2 rounded-full hover:bg-glass-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
            role="menuitem"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </Link>
        </li>
        <li role="none">
          <Link
            href="/cases"
            className="px-4 py-2 rounded-full hover:bg-glass-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
            role="menuitem"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Case Studies</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </Link>
        </li>
        <li role="none">
          <Link
            href="/about"
            className="px-4 py-2 rounded-full hover:bg-glass-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
            role="menuitem"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </Link>
        </li>
        <li role="none">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full hover:bg-glass-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
            role="menuitem"
            onClick={closeMobileMenu}
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </Link>
        </li>
      </ul>

      {/* Mobile navigation menu */}
      <div
        id="mobile-menu"
        className={`absolute top-full left-0 right-0 mt-4 bg-glass backdrop-blur-xl border border-glass-border rounded-2xl shadow-2xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        role="menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="py-4 space-y-2">
          <li role="none">
            <Link
              href="/services"
              className="block px-6 py-3 text-ink hover:bg-glass-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-inset"
              role="menuitem"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li role="none">
            <Link
              href="/cases"
              className="block px-6 py-3 text-ink hover:bg-glass-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-inset"
              role="menuitem"
              onClick={closeMobileMenu}
            >
              Case Studies
            </Link>
          </li>
          <li role="none">
            <Link
              href="/about"
              className="block px-6 py-3 text-ink hover:bg-glass-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-inset"
              role="menuitem"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li role="none">
            <Link
              href="/contact"
              className="block px-6 py-3 text-ink hover:bg-glass-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 focus-visible:ring-inset"
              role="menuitem"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
