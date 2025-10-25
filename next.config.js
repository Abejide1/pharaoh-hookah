// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: false,
  distDir: 'out',
  assetPrefix: './', // Add ./ for relative paths
  // Add basePath if your site is not at the root of the domain
  // basePath: '/your-base-path',
  
  // Ensure API routes work in static export
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      // Add other static pages here
    };
  },
  // Handle API routes in static export
  env: {
    // Your environment variables here
  }
};

// For static export
const isProd = process.env.NODE_ENV === 'production';
if (isProd) {
  nextConfig.assetPrefix = './';
}

export default nextConfig;
