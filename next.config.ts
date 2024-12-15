import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
      },
      {
        hostname: "randomuser.me",
      },
      {
        hostname: "doodleipsum.com",
      },
    ],
  },
};

export default nextConfig;
