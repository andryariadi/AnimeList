/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
    ],
    domains: ["img.youtube.com"],
  },
};

module.exports = nextConfig;
