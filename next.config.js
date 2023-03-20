/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ord.ordscan.xyz',
        port: '',
        pathname: '/content/**',
      },
    ],
  },
}

module.exports = nextConfig
