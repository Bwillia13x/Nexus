export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">Page not found</h1>
        <p className="text-muted mb-6">Sorry, we couldn’t find the page you’re looking for.</p>
        <a href="/" className="inline-block px-6 py-3 rounded-full text-white bg-gradient-to-r from-primary to-secondary shadow-md hover:-translate-y-1 transition">
          Go home
        </a>
      </div>
    </main>
  );
}
