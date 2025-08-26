import Image from 'next/image';

export function Footer() {
  const year = new Date().getFullYear();
  const xUrl =
    process.env.NEXT_PUBLIC_X_URL || process.env.NEXT_PUBLIC_TWITTER_URL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Nexus AI';
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_TELEPHONE;
  const businessStreet = process.env.NEXT_PUBLIC_BUSINESS_STREET;
  const locality = process.env.NEXT_PUBLIC_BUSINESS_LOCALITY || 'Calgary';
  const region = process.env.NEXT_PUBLIC_BUSINESS_REGION || 'AB';
  const postal = process.env.NEXT_PUBLIC_BUSINESS_POSTAL;
  const country = process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || 'Canada';
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  const linkProps = (url?: string) =>
    url
      ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
      : { href: '#' };

  return (
    <footer className="py-16 px-4 border-t border-glass-border bg-glass backdrop-blur-xl relative overflow-hidden group">
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

          {/* NAP Information */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">{businessName}</h3>
            {businessStreet && (
              <p className="text-sm text-muted">
                {businessStreet}
                <br />
                {locality}, {region} {postal}
                <br />
                {country}
              </p>
            )}
            {businessPhone && (
              <p className="text-sm text-muted mt-2">
                <a
                  href={`tel:${businessPhone}`}
                  className="hover:text-primary transition-colors"
                >
                  {businessPhone}
                </a>
              </p>
            )}
          </div>

          {/* Service Area */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Service Area</p>
            <p className="text-sm text-muted">
              Calgary • Airdrie • Cochrane • Okotoks
            </p>
          </div>

          <p className="text-muted mb-4 max-w-md mx-auto leading-relaxed group-hover:scale-105 transition-transform duration-300 delay-100">
            © {year} Nexus AI. Crafting the future of intelligent solutions.
          </p>

          {/* No Data Training Statement */}
          <p className="text-xs text-muted mb-4 max-w-md mx-auto">
            🔒 We never use your private data to train AI models.
          </p>

          {bookingUrl ? (
            <div className="mt-6">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a call <span className="ml-2">→</span>
              </a>
            </div>
          ) : null}
        </div>
        <div className="flex justify-center gap-6">
          <a
            {...linkProps(xUrl)}
            aria-label="X (Twitter)"
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-glass-border bg-glass-2 backdrop-blur-xl hover:bg-glass hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group/icon relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
            <span className="text-xl relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
              𝕏
            </span>
          </a>
          <a
            {...linkProps(linkedinUrl)}
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-glass-border bg-glass-2 backdrop-blur-xl hover:bg-glass hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group/icon relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
            <span className="text-lg font-bold relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
              in
            </span>
          </a>
          <a
            {...linkProps(githubUrl)}
            aria-label="GitHub"
            className="w-12 h-12 rounded-2xl flex items-center justify-center border border-glass-border bg-glass-2 backdrop-blur-xl hover:bg-glass hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group/icon relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
            <span className="text-xl relative z-10 group-hover/icon:scale-110 transition-transform duration-300">
              ◐
            </span>
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-glass-border">
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-xs text-muted">
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
          <p className="text-xs text-muted group-hover:scale-105 transition-transform duration-300 delay-300">
            Building tomorrow's intelligence, today
          </p>
        </div>
      </div>
    </footer>
  );
}
