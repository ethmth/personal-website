/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
