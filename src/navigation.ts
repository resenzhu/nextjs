import type {LocalePrefix} from 'next-intl/dist/types/src/shared/types';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'id'] as const;
export const defaultLocale: (typeof locales)[number] = 'en';
export const localePrefix: LocalePrefix = 'always';
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({
    locales: locales,
    localePrefix: localePrefix
  });
