import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    domains: ["fortunate-respect-d9ba68c326.strapiapp.comhttps", "fortunate-respect-d9ba68c326.media.strapiapp.com"]
  }
};

export default nextConfig;
