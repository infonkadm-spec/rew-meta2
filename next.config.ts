import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Excluir o diretório xpay do build
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/xpay/**'],
    };
    return config;
  },
};

export default nextConfig;
