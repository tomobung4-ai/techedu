import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eiqtodkmxuwrupkqvykl.supabase.co",
      },
    ],
  },
};

export default nextConfig;