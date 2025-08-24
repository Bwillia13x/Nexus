import Image from 'next/image';

export function Footer() {
  const year = new Date().getFullYear();
  const xUrl =
    process.env.NEXT_PUBLIC_X_URL || process.env.NEXT_PUBLIC_TWITTER_URL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const locality = process.env.NEXT_PUBLIC_BUSINESS_LOCALITY || 'Calgary';
  const region = process.env.NEXT_PUBLIC_BUSINESS_REGION || 'AB';
  const country = process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || 'Canada';
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  const linkProps = (url?: string) =>
    url
      ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
      : { href: '#' };

  return (
    <footer
      className="py-16 px-4 border-t border-glass-border bg-glass backdrop-blur-xl relative overflow-hidden group"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/Nexus_Logo.png"
              alt="Nexus AI Logo"
              width={160}
              height={60}
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <h2 id="footer-heading" className="sr-only">
            Footer Information
          </h2>
          <p className="text-muted mb-6 max-w-md mx-auto leading-relaxed group-hover:scale-105 transition-transform duration-300 delay-100">
            © {year} Nexus AI. Crafting the future of intelligent solutions.
          </p>
          <p className="text-sm text-muted group-hover:scale-105 transition-transform duration-300 delay-200">
            {locality}, {region}
          </p>
          {bookingUrl ? (
            <div className="mt-6">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-primary to-secondary shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 font-semibold min-h-[44px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
                aria-label="Book a consultation call"
              >
                Book a call{' '}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          ) : null}
        </div>
        <div className="flex justify-center gap-6">
          <a
            {...linkProps(xUrl)}
            aria-label="Follow us on X (Twitter)"
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-glass-border bg-glass-2 backdrop-blur-xl hover:bg-glass hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group/icon relative overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
            <span className="text-xl relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
              𝕏
            </span>
          </a>
          <a
            {...linkProps(linkedinUrl)}
            aria-label="Connect with us on LinkedIn"
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-glass-border bg-glass-2 backdrop-blur-xl hover:bg-glass hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group/icon relative overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
            <span className="text-lg font-bold relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
              in
            </span>
          </a>
          <a
            {...linkProps(githubUrl)}
            aria-label="View our projects on GitHub"
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-glass-border bg-glass-2 backdrop-blur-xl hover:bg-glass hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group/icon relative overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
            <span className="text-xl relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
              ◐
            </span>
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-glass-border">
          <p className="text-xs text-muted group-hover:scale-105 transition-transform duration-300 delay-300">
            Building tomorrow's intelligence, today
          </p>
        </div>
      </div>
    </footer>
  );
}
