"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">Something went wrong</h1>
        <p className="text-muted mb-6">{error?.message || 'An unexpected error occurred.'}</p>
        <button onClick={reset} className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-primary to-secondary shadow-md hover:-translate-y-1 transition">
          Try again
        </button>
      </div>
    </main>
  );
}
