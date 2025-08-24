/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external image domains if needed
    formats: ['image/webp', 'image/avif'],
    // Ensure local images are properly optimized
    unoptimized: false,
    // Add device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Add image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Remove deprecated swcMinify option
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Fix lockfile warning
  outputFileTracingRoot: process.cwd(),
};

module.exports = nextConfig;
