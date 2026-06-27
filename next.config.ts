import type { NextConfig } from "next";

const repoName = "junior-moraes";
const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: prefix,
  assetPrefix: prefix,
  // Criamos uma variável de ambiente acessível em todo o código:
  env: {
    NEXT_PUBLIC_BASE_PATH: prefix,
  },
};

export default nextConfig;