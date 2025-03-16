'use client';

import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import dynamic from 'next/dynamic';

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet';
import { Carousel, CarouselContent, CarouselItem } from '@/components/carousel';

import '../i18n';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ResponsiveImage from '@/components/ResponsiveImage';

interface NavigationItem {
  name: string;
  href: string;
}

const ServicesComponent = dynamic(() => import('@/components/Services'), {
  ssr: true, // Load only on client-side
});

const AboutUsComponent = dynamic(() => import('@/components/AboutUs'), {
  ssr: true, // Load only on client-side
});

const ContactUsComponent = dynamic(() => import('@/components/ContactUs'), {
  ssr: false, // Load only on client-side
});

export default function Home() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState<number>(0);
  const sections = ['home', 'services', 'about', 'contact'];

  const { t, i18n } = useTranslation();

  const navigationItems = t('navigation', {
    returnObjects: true,
  }) as NavigationItem[];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const index = sections.indexOf(section);
      if (index !== -1) {
        setActiveSection(index);
      }
    }
  }, [searchParams]);

  const handleNavigation = (index: number) => {
    setActiveSection(index);
    router.push(`?section=${sections[index]}`);
  };

  const returnToHome = () => {
    setActiveSection(0);
    router.push('?section=home');
  };

  return (
    <div className='min-h-screen bg-background'>
      {/* Navbar */}
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
            <button onClick={() => returnToHome()}>
              <img
                alt='Site Logo'
                src='/images/site_logo.webp'
                className='h-[60px]'
                height={60}
                width={80}
                loading='eager'
              />
            </button>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-6'>
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(index)}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    activeSection === index
                      ? 'text-primary'
                      : 'hover:text-primary',
                  )}
                >
                  {item.name}
                </button>
              ))}
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
                  {navigationItems.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        handleNavigation(index);
                      }}
                      className={cn(
                        'text-lg font-medium transition-colors text-left',
                        activeSection === index
                          ? 'text-primary'
                          : 'hover:text-primary',
                      )}
                    >
                      {item.name}
                    </button>
                  ))}
                  <LanguageSwitcher />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <Carousel
        className='w-full h-screen'
        selectedIndex={activeSection}
        setSelectedIndex={setActiveSection}
        opts={{
          align: 'start',
          loop: false,
        }}
      >
        <CarouselContent>
          {/* Hero Banner */}
          <CarouselItem className='w-full'>
            <section className='relative h-screen flex items-center justify-center'>
              <div className='absolute inset-0'>
                <ResponsiveImage
                  fileName='header_fit.webp'
                  imageDescription='Hero background'
                  desktopWidth={952}
                  desktopHeight={500}
                  mobileWidth={380}
                  mobileHeight={800}
                  lazyload={false}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/50' />
              </div>
              <div className='absolute container mx-auto px-4 text-center text-white'>
                <div className='mb-12'>
                  <h1 className='text-xl md:text-4xl font-bold mb-6 tracking-tight'>
                    {t('headerTitle')}
                  </h1>
                  <h1 className='text-4xl md:text-6xl font-bold mb-6 tracking-tight'>
                    {t('headerName')}
                  </h1>
                </div>
                <div className='mt-16'>
                  <button
                    className='mr-4 bg-[black] py-0 px-8 h-11 rounded-md'
                    onClick={() => handleNavigation(1)}
                  >
                    {t('service')}
                  </button>
                  <button
                    className='text-black bg-[white] py-0 px-8 h-11 rounded-md'
                    onClick={() => handleNavigation(3)}
                  >
                    {t('contact')}
                  </button>
                </div>
              </div>
            </section>
          </CarouselItem>

          {/* Services Section */}
          <CarouselItem className='w-full'>
            <section className='h-screen overflow-y-auto bg-muted pt-[8rem]'>
              <ServicesComponent />
            </section>
          </CarouselItem>

          {/* About Section */}
          <CarouselItem className='w-full'>
            <section className='h-screen overflow-y-auto bg-muted py-[8rem]'>
              <AboutUsComponent />
            </section>
          </CarouselItem>

          {/* Contact Section */}
          <CarouselItem className='w-full'>
            <section className='h-screen overflow-y-auto bg-muted pt-[8rem]'>
              <ContactUsComponent />
            </section>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
