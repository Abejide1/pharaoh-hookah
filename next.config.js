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
  
  // Ensure static export works
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      // Add other pages here if needed
    };
  },
};

export default nextConfig;
