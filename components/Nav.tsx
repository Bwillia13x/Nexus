import Link from 'next/link';
import Image from 'next/image';

export function Nav() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-glass backdrop-blur-xl border border-glass-border rounded-full px-8 py-4 flex gap-8 items-center shadow-xl hover:shadow-2xl transition-all duration-500 group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

      <Link
        href="/"
        className="relative z-10 group-hover:scale-105 transition-transform duration-300"
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

      <ul className="flex gap-8 text-sm relative z-10">
        <li>
          <Link
            href="/services"
            className="px-4 py-2 rounded-full hover:bg-glass-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden"
          >
            <span className="relative z-10">Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </Link>
        </li>
        <li>
          <Link
            href="/cases"
            className="px-4 py-2 rounded-full hover:bg-glass-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden"
          >
            <span className="relative z-10">Case Studies</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="px-4 py-2 rounded-full hover:bg-glass-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden"
          >
            <span className="relative z-10">About</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full hover:bg-glass-2 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium hover:text-primary group/link relative overflow-hidden"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
