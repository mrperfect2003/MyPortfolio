/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    // For static exports, we need unoptimized: true
    // To enable optimization, deploy with a server (Vercel, etc.)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'keshav-raj.web.app',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
