import {DateTime} from 'luxon';
import type {MetadataRoute} from 'next';

const Sitemap = (): MetadataRoute.Sitemap => [
  {
    url: process.env.NEXT_PUBLIC_APP_URL,
    lastModified: DateTime.utc().toString()
  }
];

export default Sitemap;
