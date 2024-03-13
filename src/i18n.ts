import {getRequestConfig} from 'next-intl/server';

const i18n = getRequestConfig(
  async ({locale}: {locale: string}): Promise<object> => ({
    messages: (await import(`./../dictionaries/${locale}.json`)).default
  })
);

export default i18n;
