/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      const esbuildLoader = require('esbuild-loader');

      // Use ESBuild for JavaScript and TypeScript files
      config.module.rules.push({
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2020', // Faster execution in modern browsers
        },
      });

      // Minimize JS with ESBuild (faster than Terser)
      config.optimization.minimizer = [
        new (require('esbuild-loader').EsbuildPlugin)({
          target: 'es2020',
        }),
      ];
    }

    return config;
  },
};

module.exports = nextConfig;
