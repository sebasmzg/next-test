
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import {Inter} from 'next/font/google';
import { locales } from "@/config";
import {ReactNode} from 'react';
import Navigation from "@/components/Navigation";
import clsx from 'clsx';
import Providers from "../providers";

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang="en">
      <body className={clsx(inter.className, "flex h-full flex-col")}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
        <Navigation />
        {children}
        </NextIntlClientProvider>
        </Providers>
        
      </body>
    </html>
  );
}
