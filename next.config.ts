import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for Azure deployment
  reactStrictMode: true,
  distDir: 'build',
  output: 'standalone',
  // Reduce memory usage during build
  experimental: {
    workerThreads: false,
  },
};

export default nextConfig;
