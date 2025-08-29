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
  size = 28,
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
    const hasTextSizeClass =
      typeof className === 'string' &&
      /\btext-(\[[^\]]+\]|xs|sm|base|lg|xl|[2-9]xl)\b/.test(className);
    // Only apply inline fontSize when a Tailwind text-* size isn't already provided
    const mergedStyle = !hasTextSizeClass
      ? { ...(rest as any).style, fontSize: size }
      : (rest as any).style;
    if (title) {
      return (
        <span
          role="img"
          aria-label={title}
          className={className}
          {...rest}
          style={mergedStyle}
        >
          {emoji}
        </span>
      );
    }
    return (
      <span
        aria-hidden="true"
        className={className}
        {...rest}
        style={mergedStyle}
      >
        {emoji}
      </span>
    );
  }

  // Nothing to render
  return null;
}
