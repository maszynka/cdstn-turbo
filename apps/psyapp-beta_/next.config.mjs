import withBundleAnalyzer from '@next/bundle-analyzer';

// TODO cache-control headers don't work for static files
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  eslint: {
    ignoreDuringBuilds: process.env.SKIP_LINTER === 'true'
  },
  typescript: {
    ignoreBuildErrors: process.env.SKIP_LINTER === 'true'
  }
};

// eslint-disable-next-line import/no-unused-modules
export default process.env.ANALYZE === 'true'
  ? withBundleAnalyzer()(nextConfig)
  : nextConfig;
