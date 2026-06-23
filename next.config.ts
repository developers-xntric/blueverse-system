import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fortunate-respect-d9ba68c326.media.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "fortunate-respect-d9ba68c326.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
