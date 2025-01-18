/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add this to fix RSC payload fetch error
  experimental: {
    appDir: true,
    serverActions: true
  }
};

module.exports = nextConfig;