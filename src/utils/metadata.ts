import type {Metadata} from 'next';

export const rootMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  authors: [
    {
      name: 'Resen',
      url: 'https://www.linkedin.com/in/resen'
    }
  ],
  creator: 'Resen',
  publisher: 'Resen',
  formatDetection: {
    address: false,
    email: false,
    telephone: false
  }
};

export const createMetadata = ({
  title,
  description,
  url
}: {
  title: string;
  description: string;
  url: string;
}): Metadata => ({
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    locale: 'en',
    type: 'website'
  },
  twitter: {
    title: title,
    description: description,
    card: 'summary_large_image'
  }
});
