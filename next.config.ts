import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['randomuser.me'],  // Allow loading images from randomuser.me
  },
};

export default nextConfig;
