/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/landscaping-gallery', destination: '/gallery', permanent: true },
      { source: '/core-aeration-gallery', destination: '/gallery', permanent: true },
      { source: '/leaf-cleanup-gallery', destination: '/gallery', permanent: true },
      { source: '/snow-service-gallery', destination: '/gallery', permanent: true },
      { source: '/our-equipment', destination: '/gallery', permanent: true },
      { source: '/lawn-care-and-maintenance-gallery', destination: '/gallery', permanent: true },
      { source: '/covid-19', destination: '/', permanent: true },
      { source: '/resources', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
