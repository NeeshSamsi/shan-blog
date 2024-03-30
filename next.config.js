/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  redirects: async () => [
    {
      source: "/posts",
      destination: "/collections",
      permanent: true,
    },
    {
      source: "/stats",
      destination:
        "https://umami.neeshsamsi.com/websites/7138dd24-bcab-45ab-a5cb-5da110afa793",
      permanent: true,
    },
  ],
}

module.exports = nextConfig
