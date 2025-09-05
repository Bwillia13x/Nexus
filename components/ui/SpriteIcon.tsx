import type { ComponentProps } from 'react';

type SpriteIconProps = {
  name: string; // symbol id inside /icons-sprite.svg (e.g., 'ps--hero--calgary-pin')
  size?: number;
  className?: string;
  title?: string;
} & Omit<ComponentProps<'svg'>, 'className' | 'width' | 'height'>;

export function SpriteIcon({
  name,
  size = 24,
  className,
  title,
  ...rest
}: SpriteIconProps) {
  return (
    <svg
      width={size}
      height={size}
      aria-hidden={title ? undefined : true}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <use href={`/icons-sprite.svg#${name}`} />
    </svg>
  );
}

export default SpriteIcon;
