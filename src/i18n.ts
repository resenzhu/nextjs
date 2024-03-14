import {getRequestConfig} from 'next-intl/server';
import {locales} from '@navigation';
import {notFound} from 'next/navigation';

const i18n = getRequestConfig(
  async ({locale}: {locale: string}): Promise<object> => {
    if (!locales.includes(locale as (typeof locales)[number])) {
      notFound();
    }
    return {
      messages: (await import(`./../dictionaries/${locale}.json`)).default
    };
  }
);

export default i18n;
