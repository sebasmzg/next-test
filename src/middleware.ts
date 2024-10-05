import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

//Next Intl
export default createMiddleware({
  locales,
  defaultLocale: 'en',
});
 
export const config = {

  matcher: ['/', '/(es|en)/:path*']
};

//NextAuth
export { auth as middleware } from "@/auth"