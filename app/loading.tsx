export default function Loading() {
  // Displayed during route transitions and data fetches in App Router.
  return (
    <div aria-live="polite" aria-atomic="true">
      <div
        role="progressbar"
        aria-label="Page loading"
        className="fixed inset-x-0 top-0 z-[9999] h-1"
      >
        <div className="route-progress text-primary" />
      </div>
    </div>
  );
}
