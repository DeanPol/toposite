'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Locale } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (locale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  };

  return (
    <div className='flex gap-2'>
      <button onClick={() => switchLocale('el')}>GR</button>
      <button onClick={() => switchLocale('en')}>EN</button>
    </div>
  );
}
