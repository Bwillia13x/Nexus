'use client';

import React from 'react';

export function SchedulerEmbed({ url }: { url: string }) {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto" aria-busy={!loaded}>
      {!loaded && (
        <div
          className="h-[600px] w-full rounded-xl border border-glass-border bg-white/60 animate-pulse"
          aria-hidden="true"
        />
      )}
      {!loaded && (
        <div aria-live="polite" className="sr-only">
          Loading scheduler…
        </div>
      )}
      <iframe
        src={url}
        className={`w-full h-[600px] border border-glass-border rounded-xl bg-white/50 supports-[backdrop-filter]:bg-white/40 backdrop-blur-sm ${
          loaded ? 'animate-fade-in' : 'invisible'
        }`}
        title="Schedule a call"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={() => setLoaded(true)}
      />
      <p className="mt-3 text-sm text-muted text-center">
        Trouble with the embed?{' '}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          Open the scheduler in a new tab
        </a>
        .
      </p>
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.35s ease-out both;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
