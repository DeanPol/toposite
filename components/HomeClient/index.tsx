'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Menu } from 'lucide-react';

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

const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const AboutUs = dynamic(() => import('@/components/AboutUs'), { ssr: true });
const ContactUs = dynamic(() => import('@/components/ContactUs'), {
  ssr: false,
});

export default function HomeClient({ locale }: { locale: Locale }) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const sections = ['home', 'services', 'about', 'contact'];

  /* 🔑 Sync i18next with route locale */
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  /* Scroll detection for navbar */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Read ?section= */
  useEffect(() => {
    const section = searchParams.get('section');
    if (!section) return;

    const index = sections.indexOf(section);
    if (index !== -1) setActiveSection(index);
  }, [searchParams]);

  const handleNavigation = (index: number) => {
    setActiveSection(index);
    router.push(`?section=${sections[index]}`, { scroll: false });
  };

  const navigationItems = t('navigation', {
    returnObjects: true,
  }) as NavigationItem[];

  const LeafletMap = useMemo(
    () =>
      dynamic(() => import('@/components/LeafletMap'), {
        ssr: false,
        loading: () => <p>Loading map…</p>,
      }),
    [],
  );

  return (
    <div className='h-screen bg-background overflow-hidden'>
      {/* NAVBAR */}
      <header
        className={cn(
          'fixed top-0 z-50 w-full h-[5rem] transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur border-b'
            : 'bg-transparent',
        )}
      >
        <nav className='h-full px-4 bg-card flex items-center'>
          <div className='mx-auto max-w-7xl w-full flex items-center justify-between'>
            <button onClick={() => handleNavigation(0)} aria-label='Home'>
              <img
                src='/images/site_logo.webp'
                alt='Technical Office Politis logo'
                width={80}
                height={60}
                className='h-[60px]'
              />
            </button>

            {/* Desktop nav */}
            <div className='hidden md:flex items-center gap-6'>
              {navigationItems.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(i)}
                  className={cn(
                    'text-sm font-medium transition-colors',
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
        className='h-screen pt-[5rem] overflow-hidden'
        selectedIndex={activeSection}
        setSelectedIndex={setActiveSection}
        opts={{ align: 'start', loop: false }}
      >
        <CarouselContent className='h-full'>
          {/* HERO */}
          <CarouselItem className='h-full'>
            <section className='relative h-full flex items-center justify-center'>
              <ResponsiveImage
                fileName='header_fit.webp'
                imageDescription='Topographic and engineering services in Naxos'
                desktopWidth={1200}
                desktopHeight={600}
                mobileWidth={400}
                mobileHeight={800}
                lazyload={false}
                className='absolute inset-0 w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-black/50' />

              <div className='relative z-10 text-center text-white px-4'>
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
          <CarouselItem className='h-full'>
            <section className='h-full overflow-y-auto bg-muted pt-[8rem]'>
              <Services />
              <div className='container mx-auto max-w-7xl p-8'>
                <LeafletMap />
              </div>
            </section>
          </CarouselItem>

          {/* ABOUT */}
          <CarouselItem className='h-full'>
            <section className='h-full overflow-y-auto bg-muted py-[8rem]'>
              <AboutUs />
            </section>
          </CarouselItem>

          {/* CONTACT */}
          <CarouselItem className='h-full'>
            <section className='h-full overflow-y-auto bg-muted pt-[8rem]'>
              <ContactUs />
            </section>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
