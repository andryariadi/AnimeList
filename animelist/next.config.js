/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
    domains: ["img.youtube.com"],
  },
};

module.exports = nextConfig;
