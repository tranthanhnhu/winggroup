import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for hostings without Node.js (Hostinger shared)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
