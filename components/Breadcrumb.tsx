'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

export function Breadcrumb() {
  const pathname = usePathname();

  // Skip breadcrumb on home page
  if (pathname === '/') return null;

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;

      // Convert segment to readable label
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // Handle special cases
      if (segment === 'cases') label = 'Case Studies';
      if (segment === 'ai-assistant-calgary-retail')
        label = 'AI Assistant - Calgary Retail';
      if (segment === 'automation-pilot-ops')
        label = 'Automation Pilot - Operations';

      breadcrumbs.push({
        label,
        href: currentPath,
        current: isLast,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav
      className="container-wide py-4 px-4"
      aria-label="Breadcrumb navigation"
    >
      <ol className="flex items-center space-x-2 text-sm text-muted">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-muted/50" aria-hidden="true">
                /
              </span>
            )}
            {breadcrumb.current ? (
              <span className="text-ink font-medium" aria-current="page">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="hover:text-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
