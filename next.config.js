/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'via.placeholder.com'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
