'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';

type BaseLinkProps = React.ComponentProps<typeof Link>;

interface RoiPrefillLinkProps extends BaseLinkProps {
  pilotId?: string;
  analyticsContext?: string;
}

export default function RoiPrefillLink({
  pilotId,
  analyticsContext = 'home',
  onClick,
  ...linkProps
}: RoiPrefillLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (typeof window === 'undefined') return;
    const dataLayer = (window as any).dataLayer;
    if (!dataLayer) return;
    dataLayer.push({
      event: 'cta_click',
      cta: 'roi_prefill',
      pilotId,
      context: analyticsContext,
      href:
        typeof linkProps.href === 'string'
          ? linkProps.href
          : (linkProps.href.pathname ?? ''),
    });
  };

  return <Link {...linkProps} onClick={handleClick} />;
}
