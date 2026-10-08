import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the two content variants run side by side without sharing a build folder.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/careers",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
