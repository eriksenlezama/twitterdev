/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'pbs.twimg.com',
      'firebasestorage.googleapis.com'
    ]
  }
}

module.exports = nextConfig
