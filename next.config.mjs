/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // <- tells Next.js to generate static HTML
  images: {
    unoptimized: true,    // <- required if using next/image for static export
  },
}

module.exports = nextConfig;
