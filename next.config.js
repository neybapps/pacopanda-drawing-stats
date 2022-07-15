/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  webpack: {
    optimizeCSS: true,
  }
}

module.exports = nextConfig
