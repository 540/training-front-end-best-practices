/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dulces-petalos.herokuapp.com',
      }
    ]
  }
}

module.exports = nextConfig
