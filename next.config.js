/** @type {import('next').NextConfig} */

const BLOG_URL = 'https://majestic-tapioca-729c26.netlify.app'
// const BLOG_URL = 'http://localhost:4000'

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
