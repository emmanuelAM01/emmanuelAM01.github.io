import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Ensures all routes end with a slash
  output: "export", // Enables static export mode
};

export default nextConfig;
