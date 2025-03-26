/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  //swcMinify: true,
  async redirects() {
    return [
      // {
      //   source: "/resume_pdf",
      //   destination:
      //     "https://docs.google.com/gview?url=https://raw.githubusercontent.com/ethmth/resume/main/EthanThomasResume.pdf&embedded=true",
      //   permanent: false,
      // },
      {
        source: "/reactive_resume",
        destination: "https://rxresu.me/rrethan/ethan-thomas",
        permanent: false,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

module.exports = nextConfig;
