'use strict';

const {createSecureHeaders} = require('next-secure-headers');
const withPlugins = require('next-compose-plugins');

/**
 * @type {boolean}
 */
const development = process.env.NODE_ENV !== 'production';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  compiler: {
    removeConsole: !development
  },
  eslint: {
    dirs: ['src']
  },
  generateEtags: false,
  poweredByHeader: false,
  reactStrictMode: true
};

/**
 * @type {import('next').NextConfig}
 **/
const nextHeaders = {
  headers: async () => [
    {
      source: '/:path*',
      headers: createSecureHeaders({
        contentSecurityPolicy: {
          directives: {
            baseURI: ["'self'"],
            childSrc: ["'self'"],
            connectSrc: ["'self'", 'https://vitals.vercel-insights.com'],
            defaultSrc: ["'self'"],
            fontSrc: ["'self'"],
            formAction: ["'self'"],
            frameSrc: ["'self'"],
            imgSrc: ["'self'", 'data:'],
            manifestSrc: ["'self'"],
            mediaSrc: ["'self'"],
            objectSrc: ["'self'"],
            scriptSrc: [
              "'self'",
              'https://va.vercel-scripts.com',
              ...(development ? ["'unsafe-inline'", "'unsafe-eval'"] : [])
            ],
            styleSrc: ["'self'", ...(development ? ["'unsafe-inline'"] : [])],
            workerSrc: ["'self'"]
          }
        },
        expectCT: false,
        forceHTTPSRedirect: false,
        frameGuard: 'sameorigin',
        noopen: 'noopen',
        nosniff: 'nosniff',
        referrerPolicy: 'no-referrer',
        xssProtection: 'block-rendering'
      })
    },
    {
      source: '/:path*',
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          value: process.env.NEXT_PUBLIC_APP_URL
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
