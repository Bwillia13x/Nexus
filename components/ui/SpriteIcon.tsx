import type { ComponentProps } from 'react';

type SpriteIconProps = {
  name: string; // symbol id inside /icons-sprite.svg (e.g., 'ps--hero--calgary-pin')
  size?: number;
  className?: string;
  title?: string;
  sprite?: 'ui' | 'hero';
} & Omit<ComponentProps<'svg'>, 'className' | 'width' | 'height'>;

export function SpriteIcon({
  name,
  size = 24,
  className,
  title,
  sprite = 'ui',
  ...rest
}: SpriteIconProps) {
  const href =
    sprite === 'hero'
      ? `/icons-sprite-hero.svg#${name}`
      : `/icons-sprite-ui.svg#${name}`;
  const ariaProps = title ? {} : ({ 'aria-hidden': 'true' } as const);
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      {...rest}
      {...ariaProps}
    >
      {title ? <title>{title}</title> : null}
      <use href={href} />
    </svg>
  );
}

export default SpriteIcon;
