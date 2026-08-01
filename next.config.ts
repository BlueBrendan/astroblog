import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [25, 50, 75, 80, 82, 85, 88, 90],
    deviceSizes: [750, 828, 1080, 1200, 1920, 2048, 3000]
  },
};

export default nextConfig;
