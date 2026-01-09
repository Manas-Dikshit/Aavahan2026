/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Ensure Next.js uses this project directory as the workspace root
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    // Disable webpack filesystem cache in development to avoid
    // intermittent ENOENT rename errors on Windows (PackFileCacheStrategy).
    if (dev && config.cache) {
      config.cache = false;
    }

    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
