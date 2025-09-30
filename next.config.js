/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.navan.com'],
    formats: ['image/webp', 'image/avif'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig