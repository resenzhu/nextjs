import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

const i18n = getRequestConfig(
  async ({locale}: {locale: string}): Promise<object> => {
    const locales: string[] = ['en', 'id'];
    if (!locales.includes(locale)) {
      notFound();
    }
    return {
      messages: (await import(`./../dictionaries/${locale}.json`)).default
    };
  }
);

export default i18n;
