/**
 * @type {import('next').NextConfig}
 */
const domainsEnv = (process.env.IMAGE_DOMAINS || '')
  .split(',')
  .map(d => d.trim())
  .filter(Boolean);
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "font-src 'self' data:",
  "img-src 'self' data: https:",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://plausible.io",
  "style-src 'self' 'unsafe-inline'",
  "connect-src 'self' https://plausible.io https://www.google-analytics.com",
  // Allow embedding of external schedulers (e.g., Cal.com/Calendly) via HTTPS iframes
  "frame-src 'self' https:",
  "frame-ancestors 'self'",
].join('; ');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: domainsEnv, // Configure external image domains via IMAGE_DOMAINS
    formats: ['image/webp', 'image/avif'],
    // Ensure local images are properly optimized
    unoptimized: false,
    // Add device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Add image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/book',
        destination: '/schedule',
        permanent: true,
      },
    ];
  },
  // Remove deprecated swcMinify option
  // Fix lockfile warning
  outputFileTracingRoot: process.cwd(),
  async headers() {
    const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const securityHeaders = [
      { key: 'Content-Security-Policy', value: csp },
      { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
      { key: 'Origin-Agent-Cluster', value: '?1' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
      },
    ];
    const apiCorsHeaders = [
      { key: 'Access-Control-Allow-Origin', value: origin },
      { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
      {
        key: 'Access-Control-Allow-Headers',
        value: 'Content-Type, Authorization',
      },
    ];
    return [
      { source: '/(.*)', headers: securityHeaders },
      { source: '/api/:path*', headers: apiCorsHeaders },
    ];
  },
};

module.exports = nextConfig;
