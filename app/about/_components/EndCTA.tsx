import Link from 'next/link';

export function EndCTA() {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto p-12 rounded-4xl border border-border bg-gradient-to-br from-white/90 via-white/80 to-white/90 backdrop-blur-xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            Calgary SMBs: Ready to Pilot AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-7">
            Book a 30-minute intro. We'll identify a small, high-impact pilot we
            can ship in ~30 days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              href="/contact?intent=discovery"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Book discovery call
              <span className="ml-2 text-lg">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur border border-border text-foreground rounded-full font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-border"
            >
              See services
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Based in Calgary. Remote-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
