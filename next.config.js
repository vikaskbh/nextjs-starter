/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Optimize images
  images: {
    domains: ["your-cdn.com", "images.unsplash.com"],
    formats: ["image/avif", "image/webp"], // Modern formats
  },

  // Optimize output for production
  poweredByHeader: false, // Hides "X-Powered-By: Next.js" for security
  compress: true,         // Ensures gzip compression

  // i18n setup (if you add multi-language later)
  // i18n: {
  //   locales: ["en", "fr"],
  //   defaultLocale: "en",
  // },
}

module.exports = nextConfig
