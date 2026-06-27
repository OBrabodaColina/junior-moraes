import type { NextConfig } from "next";

// ATENÇÃO: Substitua 'nome-do-repositorio' pelo nome exato que você vai dar ao seu repositório no GitHub.
const repoName = "junior-moraes"; 

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necessário para imagens funcionarem no GitHub Pages
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
};

export default nextConfig;