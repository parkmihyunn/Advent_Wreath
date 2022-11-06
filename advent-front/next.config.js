/** @type {import('next').NextConfig} */
// 이미지 사용 코드 추가
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
module.exports = withImages();