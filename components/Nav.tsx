'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-glass backdrop-blur-xl border border-glass-border rounded-full px-6 py-3 flex gap-6 md:gap-8 items-center shadow-xl hover:shadow-2xl transition-all duration-500 group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

      <Link
        href="/"
        className="relative z-10 group-hover:scale-105 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell rounded-full"
      >
        <Image
          src="/images/Nexus_Logo.png"
          alt="Nexus AI Logo"
          width={280}
          height={94}
          className="h-14 w-auto"
          priority
        />
      </Link>

      <Link
        href="/contact"
        className="btn-primary text-sm font-semibold relative z-10 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
      >
        Book a call
      </Link>

      <ul className="flex gap-6 md:gap-8 text-sm relative z-10">
        <li>
          <Link
            href="/services"
            className="px-3 py-1.5 rounded-full hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
            data-active={isActive('/services')}
            aria-current={isActive('/services') ? 'page' : undefined}
          >
            <span className="relative z-10">Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full" />
          </Link>
        </li>
        <li>
          <Link
            href="/cases"
            className="px-3 py-1.5 rounded-full hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
            data-active={isActive('/cases')}
            aria-current={isActive('/cases') ? 'page' : undefined}
          >
            <span className="relative z-10">Case Studies</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full" />
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="px-3 py-1.5 rounded-full hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
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
            className="px-3 py-1.5 rounded-full hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-eggshell"
            data-active={isActive('/contact')}
            aria-current={isActive('/contact') ? 'page' : undefined}
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-full" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
