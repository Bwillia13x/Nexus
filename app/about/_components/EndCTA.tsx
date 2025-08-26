import Link from 'next/link';

export function EndCTA() {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto card-glass glass-liquid p-12 rounded-4xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
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
              className="btn-primary shadow-elev hover:shadow-elev-lg min-w-[200px] sm:min-w-[240px] text-base sm:text-lg"
            >
              Book discovery call <span className="ml-2">→</span>
            </Link>
            <Link
              href="/services"
              className="btn-secondary shadow-elev hover:shadow-elev-lg min-w-[200px] sm:min-w-[240px] text-base sm:text-lg"
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
