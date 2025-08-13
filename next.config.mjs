/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static export
  images: {
    unoptimized: true,    // required for next/image on static export
  },
};

export default nextConfig;
