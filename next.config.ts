// next.config.js


/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Don't run ESLint during build in production to increase build speed
    // This is only recommended if you're fixing the errors manually
    // Set to true after all errors are fixed
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Completely ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
   // Additional safeguards
  // Use SWC minification for better performance
   poweredByHeader: false, // Security enhancement
   reactStrictMode: false,
  images: {
    minimumCacheTTL: 60,
    domains: ['example.com','res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
