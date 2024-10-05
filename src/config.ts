import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ['en', 'es'] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
    '/':'/',
    '/pathnames':'/pathnames',
    '/profile':'/profile',
    'sign-in':'sign-in',
    'sign-up':'sign-up',
}

export const localePrefix: LocalePrefix<Locales> = "always";