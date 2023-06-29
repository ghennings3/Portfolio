/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'github.com'],
    unoptimized: true,
  },
  output: 'export',
}

module.exports = nextConfig
