# Scroll Reveal System

A performant, accessible scroll-triggered animation system that progressively reveals content as the user scrolls.

## How It Works

- **Global Observer**: The `ScrollReveal` component in `components/ScrollReveal.tsx` uses `IntersectionObserver` to detect when elements enter/exit the viewport.
- **Automatic Targets**: All `section` elements are automatically observed. Additional elements can opt-in via `data-reveal` or `.reveal-on-scroll`.
- **CSS Transitions**: The `.reveal-on-scroll` class (defined in `styles/globals.css`) applies opacity and transform animations that trigger when the `revealed` class is toggled.
- **Reduced Motion**: Users with `prefers-reduced-motion` see all content immediately with no animations.

## Usage

### Automatic Reveal (Sections)

All `<section>` elements automatically reveal on scroll with no extra markup required:

```tsx
<section id="services" className="py-16">
  {/* Content here */}
</section>
```

### Opt-In Reveal (Non-Sections)

Add `data-reveal` to any element to include it in the scroll reveal:

```tsx
<article data-reveal className="card-glass">
  {/* Content here */}
</article>
```

### Reveal Once

By default, elements "disappear" when scrolled out of view. To keep them revealed after first intersection, use:

- `data-reveal-once` attribute
- `data-reveal="once"` attribute
- `reveal-once` class

```tsx
<section data-reveal-once className="py-16">
  {/* Reveals once, stays visible */}
</section>
```

### Staggered Children

Apply `stagger-children` or `stagger-fast` to a container to stagger each child's entrance:

```tsx
<div className="grid gap-6 stagger-children" role="list">
  <article data-reveal>...</article>
  <article data-reveal>...</article>
  <article data-reveal>...</article>
</div>
```

Each child will animate in sequence with a slight delay.

## Tuning

### Observer Settings

Adjust thresholds and rootMargin in `components/ScrollReveal.tsx`:

```ts
const io = new IntersectionObserver(
  entries => {
    /* ... */
  },
  {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Trigger when element is 10% from bottom
    threshold: [0.1, 0.25, 0.5], // Multiple intersection checkpoints
  }
);
```

### Animation Timing

Adjust durations and easings in `styles/globals.css`:

```css
.reveal-on-scroll {
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.stagger-children > * {
  animation: fadeInScale 0.6s var(--ease-standard) both;
}
```

## Accessibility

- **Reduced Motion**: Content is immediately visible for users with `prefers-reduced-motion: reduce`.
- **No Content Flicker**: Elements are initially set to `revealed` to prevent flicker; the observer removes the class if they're out of view.
- **Keyboard Navigation**: Reveal state doesn't interfere with focus or keyboard navigation.

## Performance

- **Content Visibility**: Sections use `cv-auto` (content-visibility: auto) to defer rendering until scrolled into view.
- **Transform GPU**: Animations use `transform` and `opacity` for hardware acceleration.
- **Single Observer**: One global `IntersectionObserver` handles all elements.
- **Mutation Observer**: Dynamically added elements (e.g., on client-side navigation) are automatically detected and observed.

## Files

- `components/ScrollReveal.tsx`: Core logic (IntersectionObserver, MutationObserver).
- `styles/globals.css`: CSS definitions for `.reveal-on-scroll`, `.revealed`, stagger utilities, and keyframes.
- `app/layout.tsx`: Integration point (renders `<ScrollReveal />` after `#main-content`).

## Examples

### Homepage

- Service cards reveal individually with stagger.
- Sections reveal once and stay visible.

### About/Services Pages

- Long-form sections reveal once as user scrolls through the page.

### Cases

- Hero cards and pilot tiles reveal with stagger for a polished entrance.
