import type { NextConfig } from "next";

const strapiUrl = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
const strapiConfig = strapiUrl ? new URL(strapiUrl) : null;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: strapiConfig
      ? [
          {
            protocol: strapiConfig.protocol.replace(":", "") as "http" | "https",
            hostname: strapiConfig.hostname,
          },
        ]
      : [],
      domains: ["fortunate-respect-d9ba68c326.media.strapiapp.com"]
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
