import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://cl0avqtjow.ufs.sh/f/**')],
  },
};

export default nextConfig;
