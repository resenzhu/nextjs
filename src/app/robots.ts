import type {MetadataRoute} from 'next';

const Robots = (): MetadataRoute.Robots =>
(
  {
    rules:
    {
      userAgent: '*',
      allow: '/'
    },
    host: process.env.NEXT_PUBLIC_SITE_URL,
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`
  }
);

export default Robots;
