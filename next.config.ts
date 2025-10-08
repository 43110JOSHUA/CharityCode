import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for Azure deployment
  output: 'standalone',
  // Reduce memory usage during build
  experimental: {
    workerThreads: false,
  },
};

export default nextConfig;
