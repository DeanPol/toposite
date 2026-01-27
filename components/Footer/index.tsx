'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { elData } from '@/lib/data/el';
import { enData } from '@/lib/data/en';

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const data = isEnglish ? enData : elData;

  return (
    <footer className='text-center py-4 text-sm bg-white border-t mt-auto'>
      <div className='container mx-auto px-4'>
        <p className='mb-2'>
          &copy; {new Date().getFullYear()} Created by Politis. All rights
          reserved.
        </p>
        <p className='text-muted-foreground'>{data.address}</p>
      </div>
    </footer>
  );
}
