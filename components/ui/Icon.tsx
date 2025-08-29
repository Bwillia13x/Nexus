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
  size = 28,
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

  const hasTextSizeClass =
    typeof className === 'string' &&
    /\btext-(\[[^\]]+\]|xs|sm|base|lg|xl|[2-9]xl)\b/.test(className);

  // If a Tailwind text-* size is provided, make the SVG scale with font-size (1em).
  const finalWidth: number | string = hasTextSizeClass ? '1em' : size;
  const finalHeight: number | string = hasTextSizeClass ? '1em' : size;

  return (
    <Cmp
      width={finalWidth}
      height={finalHeight}
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
