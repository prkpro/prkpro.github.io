/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
