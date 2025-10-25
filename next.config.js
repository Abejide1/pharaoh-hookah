// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: false,
  distDir: 'out',
  
  // Disable image optimization since we're using static export
  images: {
    unoptimized: true,
  },
  
  // Enable App Router
  experimental: {
    // appDir is now stable in Next.js 14
  },
  
  // Skip API routes in static export
  skipTrailingSlashRedirect: true,
  
  // For static export
  generateBuildId: async () => 'static-build',
};

export default nextConfig;
