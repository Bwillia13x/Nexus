import * as I from '@/components/icons';
import { Icon } from './Icon';
import type { ComponentProps } from 'react';
import {
  getIconNameByEmoji,
  getIconNameByTool,
  getIconNameByCanonical,
} from '@/lib/icon-map';

export type IconName = keyof typeof I;

type MaybeIconProps = {
  name?: IconName;
  canonical?: string;
  emoji?: string;
  tool?: string;
  size?: number;
  className?: string;
  title?: string;
} & Omit<ComponentProps<'span'>, 'title'>;

export function MaybeIcon({
  name,
  canonical,
  emoji,
  tool,
  size = 24,
  className,
  title,
  ...rest
}: MaybeIconProps) {
  const mappedByEmoji = emoji ? getIconNameByEmoji(emoji) : undefined;
  const mappedByTool = tool ? getIconNameByTool(tool) : undefined;
  const mappedByCanonical = canonical
    ? getIconNameByCanonical(canonical)
    : undefined;
  const resolvedName =
    name || mappedByCanonical || mappedByEmoji || mappedByTool;

  if (resolvedName && (I as any)[resolvedName]) {
    return (
      <Icon
        name={resolvedName}
        size={size}
        className={className}
        title={title}
      />
    );
  }

  // Fallback to emoji rendering if provided
  if (emoji) {
    if (title) {
      return (
        <span role="img" aria-label={title} className={className} {...rest}>
          {emoji}
        </span>
      );
    }
    return (
      <span aria-hidden="true" className={className} {...rest}>
        {emoji}
      </span>
    );
  }

  // Nothing to render
  return null;
}
