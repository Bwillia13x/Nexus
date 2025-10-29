# Visual Design Audit & Improvement Plan

**Date**: 2025-01-28  
**Status**: Phase 1 Complete | Phase 2 In Progress

---

## Current State Analysis

### Strengths ✓

- **Solid token foundation** in `styles/tokens.css`
- **Comprehensive color palette** with primary (#6f69f6), secondary (#a06ef6), semantic colors
- **Modern typography scale** using CSS custom properties
- **Glass morphism system** with multiple variants (glass, glass-2, glass-3)
- **Accessibility-first** with focus states, reduced motion support, skip links
- **Inter font** via next/font with proper fallbacks
- **Consistent spacing scale** (4/8-based)
- **Comprehensive shadow system** (xs through 2xl)
- **Icon system** using SVG sprites and React components

### Issues Found ⚠️

#### 1. **Duplication & Redundancy**

- **Multiple `.btn-primary` definitions** (lines 217-225, 529-558 in globals.css)
- **Overlapping card classes**: card-glass, card-elevated, card-hero, card-filled, card-minimal, card-outlined
- **Shadow definitions** in both tokens.css and tailwind.config.js

#### 2. **Typography Inconsistency**

- Mix of utility classes (`.text-display`, `.text-heading`) and direct Tailwind
- Line-length not consistently constrained (some max-w-2xl, some max-w-4xl)
- Responsive type steps could be smoother (missing fluid clamps)

#### 3. **Glass/Elevation Complexity**

- Too many glass variants (glass, glass-2, glass-3, glass-liquid)
- Inconsistent backdrop-blur usage (some 8px, some 24px, some xl token)
- Shadow + blur combinations not standardized

#### 4. **Color System**

- `--primary-text` and `--secondary-text` duplicates semantic intent
- Missing dark mode tokens entirely
- No clear semantic color roles beyond success/warning/error

#### 5. **Motion**

- Multiple animation durations across files
- No centralized easing curve tokens (some cubic-bezier inline)
- Heavy orb animations may impact performance on low-end devices

#### 6. **Component Patterns**

- `.icon-tile` hardcoded gradient (should accept semantic prop)
- CTA buttons always primary (no ghost/text variants)
- Card spacing not fully consistent (p-6 md:p-8 vs p-8 md:p-10)

---

## Proposed Improvements

### Phase 2: Token System Refinement

#### 2.1 Consolidate Colors

```css
/* Semantic roles */
--color-brand-primary: #6f69f6;
--color-brand-secondary: #a06ef6;
--color-accent: #f59e0b; /* warm accent for CTAs */

/* Text */
--color-text-primary: #101114;
--color-text-secondary: #4b5563;
--color-text-tertiary: #6b7280;
--color-text-inverse: #ffffff;

/* Surfaces */
--color-surface-base: #ffffff;
--color-surface-elevated: #fafafa;
--color-surface-overlay: rgba(255, 255, 255, 0.95);

/* Borders */
--color-border-subtle: #e9e9ef;
--color-border-medium: #d1d5db;
--color-border-strong: #9ca3af;
```

#### 2.2 Streamline Glass System

- **Reduce to 2 variants**: `glass-subtle` (0.55 alpha) and `glass` (0.7 alpha)
- **Standardize blur**: 16px for all glass surfaces
- **Remove**: glass-2, glass-3, glass-liquid pseudo-element complexity

#### 2.3 Typography Scale (Fluid)

```css
--font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--font-size-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem);
--font-size-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
--font-size-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 2rem);
--font-size-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.5rem);
--font-size-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);
```

#### 2.4 Motion Tokens

```css
--duration-instant: 100ms;
--duration-fast: 150ms;
--duration-base: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;

--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Phase 3: Component Primitives

#### 3.1 Button System

- **Variants**: Primary, Secondary, Outline, Ghost, Text
- **Sizes**: sm (h-10 text-sm), md (h-12 text-base), lg (h-14 text-lg)
- **States**: Consistent hover lift (-2px), active scale (0.98), focus ring

#### 3.2 Card System

```css
.card {
  /* Base: elevated surface with subtle border */
  @apply rounded-2xl bg-surface border border-border-subtle p-6;
}

.card-elevated {
  /* Higher elevation with shadow */
  @apply card shadow-elev hover:shadow-elev-lg;
}

.card-glass {
  /* Translucent overlay */
  @apply card bg-glass backdrop-blur-[16px];
}
```

#### 3.3 Badge/Chip System

- **Sizes**: sm, md, lg
- **Variants**: filled, subtle, outline
- **Colors**: Use semantic roles (primary, secondary, success, warning, error)

### Phase 4: Visual Language

#### 4.1 Hero Gradient Mesh

- **Reduce intensity**: Current orbs at 0.25/0.2 opacity → 0.15/0.12
- **Simplify animation**: Remove accent-orb, keep only primary + secondary
- **Mobile optimization**: Smaller orbs, reduced blur on <sm breakpoint

#### 4.2 Iconography

- **Standardize sizes**: 16px, 20px, 24px, 32px only
- **Stroke weight**: Consistent 2px across all icons
- **Color usage**: Use `currentColor` for theming, avoid hardcoded fills

#### 4.3 Spacing

- **Section padding**: Consistent `py-16 md:py-24` site-wide
- **Content max-width**: `max-w-container` (1120px) for primary, `max-w-4xl` for narrow
- **Card grids**: Standard `gap-6` on mobile, `gap-8` on desktop

### Phase 5: Page-Level Polish

#### Home

- [ ] Unify hero gradient intensity
- [ ] Standardize case highlight card spacing
- [ ] Align CTA button sizes (all lg)

#### Services

- [ ] Equalize service card heights with `grid-auto-fit`
- [ ] Feature strip: consistent icon sizing
- [ ] Process steps: visual hierarchy improvements

#### About

- [ ] Background metrics card: align with new card system
- [ ] Principles grid: consistent icon treatment

### Phase 6: Accessibility

#### Focus States

- [ ] Visible 2px ring with 2px offset on all interactive elements
- [ ] Contrast check all text/background pairs (WCAG AA minimum)

#### ARIA

- [ ] Fix list/listitem nesting issues in CaseStudiesSection
- [ ] Verify landmark roles across all pages

### Phase 7: Performance

#### Optimization Targets

- [ ] Reduce heavy blur layers (current: up to 64px blur on orbs)
- [ ] Optimize icon sprites (ensure single sprite load, no inline duplicates)
- [ ] Audit layout shift (hero images, cards)

---

## Implementation Timeline

**Week 1**:

- [x] Audit complete
- [ ] Phase 2: Token system refinement (colors, typography, motion)
- [ ] Phase 3: Button + Card primitives

**Week 2**:

- [ ] Phase 3: Badge/Input primitives
- [ ] Phase 4: Visual language (hero mesh, iconography, spacing)

**Week 3**:

- [ ] Phase 5: Page-level polish (Home, Services, About, Cases)
- [ ] Phase 6: A11y pass (contrast, focus, ARIA)

**Week 4**:

- [ ] Phase 7: Performance optimization
- [ ] Final QA and rollout

---

## Success Metrics

- **Fewer component variants**: 12 card classes → 3 core classes
- **Consistent spacing**: 100% sections using py-16/24
- **Zero a11y regressions**: axe-core clean on all pages
- **Faster page load**: Reduce heavy blur/shadow layers by 30%
- **Unified typography**: All text uses fluid clamp() scale
