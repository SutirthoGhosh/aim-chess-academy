import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Allow static export for Vercel/GitHub Pages compatibility
  trailingSlash: false,
};

export default nextConfig;
