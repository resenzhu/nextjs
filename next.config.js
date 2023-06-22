'use strict';

const withPlugins = require('next-compose-plugins');

const nextConfig =
{
  eslint:
  {
    dirs: ['src']
  },
  generateEtags: false,
  poweredByHeader: false,
  reactStrictMode: true
};

const nextHeaders =
{
  headers: async () =>
  [
    {
      source: '/:path*',
      headers:
      [
        {
          key: 'Access-Control-Allow-Origin',
          value: process.env.NEXT_PUBLIC_SITE_URL
        },
        {
          key: 'Access-Control-Allow-Methods',
          value: 'GET, HEAD, OPTIONS'
        }
      ]
    }
  ]
};

const composedPlugins = withPlugins([nextHeaders], nextConfig);

module.exports = composedPlugins;
