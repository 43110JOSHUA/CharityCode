import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for Azure deployment
  output: 'standalone',
  // Reduce memory usage during build
  experimental: {
    workerThreads: false,
  },

  // Suppress SASS deprecation warnings from Bootstrap
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import'],
    quietDeps: true,
  },
};

export default nextConfig;
