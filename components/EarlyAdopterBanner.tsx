export function EarlyAdopterBanner() {
  return (
    <section className="py-8 px-4">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-glass-border bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 backdrop-blur-xl p-8 text-center group hover:scale-[1.02] transition-all duration-500">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-2xl">🚀</span>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                  Founding Cohort
                </h3>
                <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full font-medium">
                  Limited
                </span>
              </div>

              <p className="text-muted mb-4 max-w-2xl mx-auto leading-relaxed">
                <span className="font-semibold text-ink">
                  3 pilot slots/month
                </span>{' '}
                for Calgary SMBs. Fixed scope, fixed price, and priority
                support.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Priority scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span>Direct founder access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>No‑code first, vendor‑neutral</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse" />
            <div
              className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 animate-pulse"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
