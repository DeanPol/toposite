'use client';

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import LanguageSwitcher from '../LanguageSwitcher';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet';
import { useState, useEffect } from 'react';
import { elData } from '@/lib/data/el';
import { enData } from '@/lib/data/en';

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Determine current locale from pathname
  const locale = pathname.startsWith('/en') ? 'en' : 'el';
  const basePath = locale === 'el' ? '' : '/en';
  const navigationItems: NavItem[] =
    locale === 'en' ? enData.navigation : elData.navigation;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a path is active
  const isActive = (href: string) => {
    const fullPath = `${basePath}${href === '/' ? '' : href}`;
    if (href === '/') {
      return pathname === '/' || pathname === '/en';
    }
    return pathname === fullPath;
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b'
          : 'bg-transparent',
      )}
    >
      <nav className='px-4 h-[5rem] bg-card content-center'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <Link href={basePath || '/'}>
            <img
              alt='Site Logo'
              src='/images/site_logo.webp'
              className='h-[60px]'
              height={60}
              width={80}
              loading='eager'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-6'>
            {navigationItems.map((item, index) => {
              const href = item.href === '/' ? basePath || '/' : `${basePath}${item.href}`;
              return (
                <Link
                  key={index}
                  href={href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'text-primary'
                      : 'hover:text-primary',
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className='md:hidden'>
              <button aria-label='Burger Menu'>
                <Menu className='h-6 w-6' />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle></SheetTitle>
              <div className='flex flex-col gap-4 mt-8'>
                {navigationItems.map((item, index) => {
                  const href = item.href === '/' ? basePath || '/' : `${basePath}${item.href}`;
                  return (
                    <Link
                      key={item.name}
                      href={href}
                      className={cn(
                        'text-lg font-medium transition-colors text-left',
                        isActive(item.href)
                          ? 'text-primary'
                          : 'hover:text-primary',
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <LanguageSwitcher />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
