import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: isProd ? "/lever-web" : "", // Adjust to match your repository name
  assetPrefix: isProd ? "/lever-web/" : "", // Ensure assets load correctly
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  trailingSlash: true, // Required for static exports
  output: "export", // Enable static export mode
};

export default nextConfig;
