/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/resume_pdf",
        destination:
          "https://docs.google.com/gview?url=https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf&embedded=true",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
