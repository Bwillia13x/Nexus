import * as I from '@/components/icons';
import { cn } from '@/lib/utils';
import type { ComponentProps, ComponentType, SVGProps } from 'react';

type IconProps = {
  name: keyof typeof I;
  size?: number;
  className?: string;
  title?: string;
} & Omit<ComponentProps<'svg'>, 'width' | 'height'>;

export function Icon({
  name,
  size = 24,
  className,
  title,
  ...rest
}: IconProps) {
  const Cmp = (I as any)[name] as
    | ComponentType<SVGProps<SVGSVGElement>>
    | undefined;

  if (!Cmp) {
    // Fail silently for unknown names to avoid runtime crashes in early stages
    return null;
  }

  return (
    <Cmp
      width={size}
      height={size}
      className={cn(
        'inline-block align-middle text-[color:var(--icon,inherit)] fill-current',
        className
      )}
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      {...rest}
    />
  );
}
