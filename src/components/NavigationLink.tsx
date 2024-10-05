'use client';

import { Link } from '@/navigation';
import clsx from 'clsx';
import { Pathnames } from 'next-intl/routing';
import {useSelectedLayoutSegment} from 'next/navigation';
import { ComponentProps } from 'react';

export default function NavigationLink<Pathname extends Pathnames>({
    href,
    ...rest
  }: ComponentProps<typeof Link<Pathname>>) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;
  
    return (
      <Link
        aria-current={isActive ? 'page' : undefined}
        className={clsx(
          'inline-block px-2 py-3 transition-colors',
          isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
        )}
        href={href}
        {...rest}
      />
    );
  }