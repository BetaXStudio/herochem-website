/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    inlineCss: true,
    useCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Add remote patterns for your CDN here if needed
    ],
  },
  // Allow dev server access from local network devices
  allowedDevOrigins: ["192.168.1.6", "localhost", "127.0.0.1"],
  async redirects() {
    return [
      {
        source: "/product/:path*",
        destination: "/categories",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/categories",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
