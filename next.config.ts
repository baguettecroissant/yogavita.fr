import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy URLs from Semrush
      {
        source: '/corporate-yoga',
        destination: '/studios', // Redirect to directory
        permanent: true,
      },
      {
        source: '/yoga-en-anglais',
        destination: '/studios',
        permanent: true,
      },
      {
        source: '/yoga-en-ville',
        destination: '/studios',
        permanent: true,
      },
      {
        source: '/yoga-for-children',
        destination: '/',
        permanent: true,
      },
      {
        source: '/yoga-pour-enfant',
        destination: '/',
        permanent: true,
      },
      {
        source: '/c/cours-particuliers-yoga',
        destination: '/studios',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/a-propos',
        permanent: true,
      },
      // Catch-all for other potentially broken legacy links to homepage
      // Be careful not to loop, so only specific patterns or just rely on 404
    ];
  },
};

export default nextConfig;
