/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // This disables all ESLint errors during build
  },
};

module.exports = nextConfig;
