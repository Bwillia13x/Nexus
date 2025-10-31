'use client';

import { useEffect } from 'react';

function isReducedMotion() {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let cleanup: (() => void) | null = null;
    const rafId = window.requestAnimationFrame(() => {
      const root = document.getElementById('main-content') || document.body;
      const SELECTOR = 'section, [data-reveal], .reveal-on-scroll';

      const getTargets = (scope: ParentNode) =>
        Array.from(scope.querySelectorAll<HTMLElement>(SELECTOR)).filter(
          el => !el.classList.contains('reveal-initialized')
        );

      const ensureRevealClass = (el: HTMLElement) => {
        if (!el.classList.contains('reveal-on-scroll')) {
          el.classList.add('reveal-on-scroll');
        }
      };

      const revealOnce = isReducedMotion();

      const hasRevealOnceFlag = (el: HTMLElement) =>
        el.hasAttribute('data-reveal-once') ||
        el.dataset.reveal === 'once' ||
        el.classList.contains('reveal-once');

      const revealAllNow = () => {
        for (const el of getTargets(root)) {
          ensureRevealClass(el);
          el.classList.add('revealed', 'reveal-initialized');
        }
      };

      if (revealOnce) {
        revealAllNow();
        cleanup = null;
        return;
      }

      const io = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              el.classList.add('revealed');
            } else {
              // Toggle off to get appear/disappear effect unless flagged once
              if (!hasRevealOnceFlag(el)) {
                el.classList.remove('revealed');
              }
            }
          }
        },
        {
          root: null,
          rootMargin: '0px 0px -10% 0px',
          threshold: [0.1, 0.25, 0.5],
        }
      );

      // Observe current elements
      for (const el of getTargets(root)) {
        ensureRevealClass(el);
        // Make initially visible to avoid flicker, IO will remove if out of view
        el.classList.add('revealed', 'reveal-initialized');
        io.observe(el);
      }

      // Watch for new elements on client-side navigations
      const mo = new MutationObserver(mutations => {
        for (const m of mutations) {
          for (const node of Array.from(m.addedNodes)) {
            if (!(node instanceof HTMLElement)) continue;
            if (
              node.matches(SELECTOR) &&
              !node.classList.contains('reveal-initialized')
            ) {
              ensureRevealClass(node);
              node.classList.add('reveal-initialized');
              io.observe(node);
            }
            const descendants = node.querySelectorAll?.(SELECTOR);
            if (descendants) {
              for (const el of Array.from(descendants)) {
                if (
                  el instanceof HTMLElement &&
                  !el.classList.contains('reveal-initialized')
                ) {
                  ensureRevealClass(el as HTMLElement);
                  el.classList.add('reveal-initialized');
                  io.observe(el);
                }
              }
            }
          }
        }
      });

      mo.observe(root, { childList: true, subtree: true });

      cleanup = () => {
        mo.disconnect();
        io.disconnect();
      };
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      cleanup?.();
    };
  }, []);

  return null;
}
