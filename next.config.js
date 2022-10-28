/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/work',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
