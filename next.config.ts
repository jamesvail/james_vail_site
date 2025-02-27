import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {},
  },
  compiler: {
    styledComponents: true, 
  },
  typescript: {
    ignoreBuildErrors: false, // ts checks
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
};

export default nextConfig;
