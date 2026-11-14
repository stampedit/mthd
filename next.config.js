/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/the-mthd", destination: "/process", permanent: true },
    ];
  },
};

module.exports = nextConfig;
