// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // replaces "next export"
  images: { unoptimized: true }, // needed for GitHub Pages
  basePath: '/Curriculum',
  assetPrefix: '/Curriculum/',
};

module.exports = nextConfig;
