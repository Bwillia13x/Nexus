'use client';

import { usePathname } from 'next/navigation';

export function Canonical() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const pathname = usePathname() || '/';
  try {
    const href = new URL(pathname, base).toString();
    return <link rel="canonical" href={href} />;
  } catch {
    // Fallback to base URL if URL construction fails
    return <link rel="canonical" href={base} />;
  }
}
