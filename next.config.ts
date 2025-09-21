import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚨 This allows production builds to succeed even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
  /* other config options can go here */
};

export default nextConfig;
