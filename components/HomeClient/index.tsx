'use client';

import { Menu } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet';
import { Carousel, CarouselContent, CarouselItem } from '@/components/carousel';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ResponsiveImage from '@/components/ResponsiveImage';

import '../../i18n';
import { useTranslation } from 'react-i18next';

interface NavigationItem {
  name: string;
  href: string;
}

type Locale = 'el' | 'en';

export default function HomeClient({ locale }: { locale: Locale }) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const sections = ['home', 'services', 'about', 'contact'];

  // 🔑 Ensure correct language on mount
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Read ?section=
  useEffect(() => {
    const section = searchParams.get('section');
    if (!section) return;

    const index = sections.indexOf(section);
    if (index !== -1) {
      setActiveSection(index);
    }
  }, [searchParams]);

  const handleNavigation = (index: number) => {
    setActiveSection(index);
    router.push(`?section=${sections[index]}`, { scroll: false });
  };

  const returnToHome = () => handleNavigation(0);

  // Client-only components
  const LeafletMap = useMemo(
    () =>
      dynamic(() => import('@/components/LeafletMap'), {
        ssr: false,
        loading: () => <p>Loading map…</p>,
      }),
    [],
  );

  const Services = dynamic(() => import('@/components/Services'), {
    ssr: true,
  });
  const AboutUs = dynamic(() => import('@/components/AboutUs'), { ssr: true });
  const ContactUs = dynamic(() => import('@/components/ContactUs'), {
    ssr: false,
  });

  const navigationItems = t('navigation', {
    returnObjects: true,
  }) as NavigationItem[];

  return (
    <div className='min-h-screen bg-background'>
      {/* NAVBAR */}
      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur border-b'
            : 'bg-transparent',
        )}
      >
        <nav className='h-[5rem] px-4 content-center bg-card'>
          <div className='mx-auto max-w-7xl flex items-center justify-between'>
            <button onClick={returnToHome} aria-label='Home'>
              <img
                src='/images/site_logo.webp'
                alt='Technical Office Politis logo'
                width={80}
                height={60}
                className='h-[60px]'
              />
            </button>

            {/* Desktop nav */}
            <div className='hidden md:flex gap-6 items-center'>
              {navigationItems.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(i)}
                  className={cn(
                    'text-sm font-medium',
                    activeSection === i ? 'text-primary' : 'hover:text-primary',
                  )}
                >
                  {item.name}
                </button>
              ))}
              <LanguageSwitcher />
            </div>

            {/* Mobile nav */}
            <Sheet>
              <SheetTrigger asChild className='md:hidden'>
                <button aria-label='Menu'>
                  <Menu className='h-6 w-6' />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle />
                <div className='mt-8 flex flex-col gap-4'>
                  {navigationItems.map((item, i) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(i)}
                      className='text-lg text-left'
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

      {/* MAIN CONTENT */}
      <Carousel
        selectedIndex={activeSection}
        setSelectedIndex={setActiveSection}
        opts={{ align: 'start', loop: false }}
        className='min-h-[calc(100vh-5rem)] pt-[5rem]'
      >
        <CarouselContent>
          {/* HERO */}
          <CarouselItem className='min-h-[calc(100vh-5rem)]'>
            <section className='relative min-h-[calc(100vh-5rem)] flex items-center justify-center'>
              <ResponsiveImage
                fileName='header_fit.webp'
                imageDescription='Topographic and engineering services in Naxos'
                desktopWidth={1200}
                desktopHeight={600}
                mobileWidth={400}
                mobileHeight={800}
                lazyload={false}
                className='absolute inset-0 object-cover'
              />
              <div className='absolute inset-0 bg-black/50' />

              <div className='relative text-center text-white px-4'>
                <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                  {t('headerName')}
                </h1>
                <p className='text-lg md:text-xl mb-10'>{t('headerTitle')}</p>

                <div className='flex justify-center gap-4'>
                  <button
                    onClick={() => handleNavigation(1)}
                    className='bg-black px-8 py-3 rounded-md'
                  >
                    {t('service')}
                  </button>
                  <button
                    onClick={() => handleNavigation(3)}
                    className='bg-white text-black px-8 py-3 rounded-md'
                  >
                    {t('contact')}
                  </button>
                </div>
              </div>
            </section>
          </CarouselItem>

          {/* SERVICES */}
          <CarouselItem className='min-h-[calc(100vh-5rem)]'>
            <section className='min-h-[calc(100vh-5rem)] bg-muted pt-[8rem]'>
              <Services />
              <div className='container mx-auto max-w-7xl p-8'>
                <LeafletMap />
              </div>
            </section>
          </CarouselItem>

          {/* ABOUT */}
          <CarouselItem className='min-h-[calc(100vh-5rem)]'>
            <section className='min-h-[calc(100vh-5rem)] bg-muted pt-[8rem]'>
              <AboutUs />
            </section>
          </CarouselItem>

          {/* CONTACT */}
          <CarouselItem className='min-h-[calc(100vh-5rem)]'>
            <section className='min-h-[calc(100vh-5rem)] bg-muted pt-[8rem]'>
              <ContactUs />
            </section>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
