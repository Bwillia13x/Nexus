import { useId, type SVGProps } from 'react';

export function IconBase({ children, ...props }: SVGProps<SVGSVGElement>) {
  const id = useId();
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
      <defs>
        <linearGradient id={`nx-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6F69F6" />
          <stop offset="1" stopColor="#A06EF6" />
        </linearGradient>
      </defs>
      {/* If you hand-craft stroke icons, place geometry inside this group */}
      <g
        fill="none"
        stroke={`url(#nx-${id})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}
