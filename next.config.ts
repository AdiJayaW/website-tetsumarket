import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true, // Wajib ada untuk mengizinkan IP ini
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jdirpjnvesgnjwziotcj.supabase.co",
      },
    ],
  },
};

export default nextConfig;