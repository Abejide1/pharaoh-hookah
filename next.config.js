// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Disable React StrictMode for static export
  reactStrictMode: false,
  // Enable static HTML export
  distDir: 'out',
  // Handle static assets
  assetPrefix: '.',
};

export default nextConfig;
