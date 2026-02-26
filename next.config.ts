// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 🚨 TEMP only for launch (remove after stabilization)
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          (process.env.NEXT_PUBLIC_API_BASE_URL ??
            "http://localhost:8080") + "/api/:path*",
      },
    ];
  },
};

export default nextConfig;
