import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [{ source: "/fees", destination: "/contact", permanent: true }];
  },
};

export default nextConfig;
