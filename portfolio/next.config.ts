import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: "/professional-site/portfolio",
  assetPrefix: "/professional-site/portfolio"
};

export default nextConfig;
