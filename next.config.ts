import type { NextConfig } from "next";

const repoName = "junior-moraes";
// Verifica se estamos rodando o build para produção
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  // Aplica o basePath e assetPrefix apenas no GitHub Pages
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}` : "",
};

export default nextConfig;