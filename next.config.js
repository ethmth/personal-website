/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/resume_pdf",
        destination:
          "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf",
        permanent: true,
      },
      {
        source: "/firebase",
        destination: "https://github.com/ethmth/devfest-23-firebase",
        permanent: true,
      },
      {
        source: "/scooter-data",
        destination:
          "https://raw.githubusercontent.com/ethmth/e-scooter-data/main/data/labeled.csv",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
