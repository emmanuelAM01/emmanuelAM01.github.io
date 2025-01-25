import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Necessary for static export
  },
  trailingSlash: true, // Ensures all paths end with a `/`
  output: "export", // Static export mode
  basePath: "/lever-web", // Subdirectory for GitHub Pages
  assetPrefix: "/lever-web/", // Prefix for static assets
};

export default nextConfig;
