import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  serverExternalPackages: ["googleapis"],
  async redirects() {
    return [{ source: "/fees", destination: "/contact", permanent: true }];
  },
};

export default nextConfig;
