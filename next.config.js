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
  reactStrictMode: true,
  webpack: (config, {isServer}) => {
    if (isServer) {
      config.externals = [
        ...config.externals,
        {
          bufferutil: 'bufferutil',
          'utf-8-validate': 'utf-8-validate'
        }
      ];
    }
    config.externals = [...config.externals, 'canvas'];
    return config;
  }
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
            connectSrc: [
              "'self'",
              'https://vitals.vercel-insights.com',
              process.env.NEXT_PUBLIC_APP_SOCKET
            ],
            defaultSrc: ["'self'"],
            fontSrc: ["'self'"],
            formAction: ["'self'"],
            frameSrc: [
              "'self'",
              'https://www.google.com/recaptcha/',
              'https://recaptcha.google.com/recaptcha/'
            ],
            imgSrc: ["'self'", 'data:'],
            manifestSrc: ["'self'"],
            mediaSrc: ["'self'"],
            objectSrc: ["'self'"],
            scriptSrc: [
              "'self'",
              'https://va.vercel-scripts.com',
              'https://www.google.com/recaptcha/',
              'https://www.gstatic.com/recaptcha/',
              'unsafe-inline',
              'unsafe-eval'
            ],
            styleSrc: ["'self'", 'unsafe-inline'],
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
