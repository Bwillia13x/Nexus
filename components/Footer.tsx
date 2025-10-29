import Image from 'next/image';
import { getBrandName, getLogoSrc } from '@/lib/brand';
import MotionToggle from '@/components/MotionToggle';

export function Footer() {
  const brandName = getBrandName();
  const year = new Date().getFullYear();
  const xUrl =
    process.env.NEXT_PUBLIC_X_URL || process.env.NEXT_PUBLIC_TWITTER_URL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const businessName = brandName;
  const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_TELEPHONE;
  const businessStreet = process.env.NEXT_PUBLIC_BUSINESS_STREET;
  const locality = process.env.NEXT_PUBLIC_BUSINESS_LOCALITY || 'Calgary';
  const region = process.env.NEXT_PUBLIC_BUSINESS_REGION || 'AB';
  const postal = process.env.NEXT_PUBLIC_BUSINESS_POSTAL;
  const country = process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || 'Canada';
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
  const schedulerUrl = process.env.NEXT_PUBLIC_SCHEDULER_URL;
  const linkProps = (url?: string) =>
    url
      ? { href: url, target: '_blank', rel: 'noopener noreferrer' }
      : { href: '#' };

  return (
    <footer className="py-20 lg:py-24 px-4 border-t border-glass-border bg-glass backdrop-blur-xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-secondary/[0.03] to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-12 lg:mb-16">
          <div className="flex justify-center mb-6">
            {(() => {
              const logoSrc = getLogoSrc();
              return (
                <div className="relative h-14 w-[192px] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-110">
                  <Image
                    src={logoSrc}
                    alt={`${brandName} Logo`}
                    fill
                    className="object-contain"
                    priority
                    sizes="192px"
                  />
                </div>
              );
            })()}
          </div>

          {/* NAP Information */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-3 transition-colors duration-300">
              {businessName}
            </h3>
            {businessStreet && (
              <p className="text-sm text-muted leading-relaxed">
                {businessStreet}
                <br />
                {locality}, {region} {postal}
                <br />
                {country}
              </p>
            )}
            {businessPhone && (
              <p className="text-sm text-muted mt-3">
                <a
                  href={`tel:${businessPhone}`}
                  className="hover:text-primary-text transition-colors duration-300 ease-out"
                >
                  {businessPhone}
                </a>
              </p>
            )}
          </div>

          {/* Service Area */}
          <div className="mb-8">
            <p className="text-sm font-semibold mb-3 tracking-wide">
              Service Area
            </p>
            <p className="text-sm text-muted">
              Calgary • Airdrie • Cochrane • Okotoks
            </p>
          </div>

          <p className="text-sm text-muted mb-6 max-w-lg mx-auto leading-relaxed transition-transform duration-500 ease-out group-hover:scale-[1.01]">
            © {year} Prairie Signal. Crafting the future of intelligent
            solutions.
          </p>

          {/* No Data Training Statement */}
          <p className="text-xs text-muted mb-6 max-w-md mx-auto flex items-center justify-center gap-2">
            <span className="text-base">🔒</span>
            <span>We never use your private data to train AI models.</span>
          </p>

          {/* Prefer in-site booking page if scheduler is configured; otherwise allow external booking URL */}
          {schedulerUrl ? (
            <div className="mt-8">
              <a
                href="/book"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base"
              >
                Book a discovery call
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ) : bookingUrl ? (
            <div className="mt-8">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base"
              >
                Book a discovery call
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ) : null}
        </div>
        <div className="flex justify-center gap-4">
          <a
            {...linkProps(xUrl)}
            aria-label="X (Twitter)"
            className="w-14 h-14 rounded-2xl flex items-center justify-center border border-glass-border bg-glass-2 backdrop-blur-xl hover:bg-glass hover:border-glass-border-hover transition-all duration-300 ease-out group/icon relative overflow-hidden hover-lift"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-400 ease-out" />
            <span className="text-xl relative z-10 transition-transform duration-200 group-hover/icon:scale-105">
              𝕏
            </span>
          </a>
          <a
            {...linkProps(linkedinUrl)}
            aria-label="LinkedIn"
            className="w-14 h-14 rounded-2xl flex items-center justify-center border border-glass-border bg-glass-2 backdrop-blur-xl hover:bg-glass hover:border-glass-border-hover transition-all duration-300 ease-out group/icon relative overflow-hidden hover-lift"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-400 ease-out" />
            <span className="text-lg font-bold relative z-10 transition-transform duration-200 group-hover/icon:scale-105">
              in
            </span>
          </a>
          <a
            {...linkProps(githubUrl)}
            aria-label="GitHub"
            className="w-14 h-14 rounded-2xl flex items-center justify-center border border-glass-border bg-glass-2 backdrop-blur-xl hover:bg-glass hover:border-glass-border-hover transition-all duration-300 ease-out group/icon relative overflow-hidden hover-lift"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-400 ease-out" />
            <span className="text-xl relative z-10 transition-transform duration-200 group-hover/icon:scale-105">
              ◐
            </span>
          </a>
        </div>
        <div className="mt-8 flex justify-center">
          <MotionToggle />
        </div>
        <div className="mt-12 pt-10 border-t border-glass-border">
          <div className="flex flex-wrap justify-center gap-8 mb-6 text-xs font-medium text-muted">
            <a
              href="/privacy"
              className="hover:text-primary-text transition-colors duration-300 ease-out"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-primary-text transition-colors duration-300 ease-out"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-xs text-muted transition-transform duration-500 ease-out group-hover:scale-[1.01]">
            Building tomorrow's intelligence, today
          </p>
        </div>
      </div>
    </footer>
  );
}
