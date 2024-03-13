'use strict';

/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL,
  generateRobotsTxt: true
};

module.exports = nextSitemapConfig;
