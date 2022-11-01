/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://raw.githubusercontent.com/ethmth/resume/main/resume.pdf",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
