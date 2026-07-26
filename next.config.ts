import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [25, 50, 75, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3000, 3840]
  },
};

export default nextConfig;
