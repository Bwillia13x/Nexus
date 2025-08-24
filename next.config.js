/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external image domains if needed
    formats: ['image/webp', 'image/avif']
  },
  // Enable SWC minification for better performance
  swcMinify: true
};

module.exports = nextConfig;