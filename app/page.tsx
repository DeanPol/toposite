'use client';

import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/sheet';
import { Carousel, CarouselContent, CarouselItem } from '@/components/carousel';
import ContactUs from '@/components/ContactUs';

import '../i18n';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';

interface NavigationItem {
  name: string;
  href: string;
}

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
              />
            </button>

            <LanguageSwitcher />

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
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className='md:hidden'>
                <Button aria-label='Burger Menu' variant='ghost' size='icon'>
                  <Menu className='h-6 w-6' />
                </Button>
              </SheetTrigger>
              <SheetContent>
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
                <img
                  src='/images/header_fit.webp'
                  alt='Hero background'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/50' />
              </div>
              <div className='relative container mx-auto px-4 text-center text-white'>
                <div className='mb-12'>
                  <h1 className='text-xl md:text-4xl font-bold mb-6 tracking-tight'>
                    {t('headerTitle')}
                  </h1>
                  <h1 className='text-4xl md:text-6xl font-bold mb-6 tracking-tight'>
                    {t('headerName')}
                  </h1>
                </div>
                <div className='mt-16'>
                  <Button
                    size='lg'
                    className='mr-4'
                    onClick={() => handleNavigation(1)}
                  >
                    {t('service')}
                  </Button>
                  <Button
                    size='lg'
                    variant='outline'
                    className='text-black'
                    onClick={() => handleNavigation(3)}
                  >
                    {t('contact')}
                  </Button>
                </div>
              </div>
            </section>
          </CarouselItem>

          {/* Services Section */}
          <CarouselItem className='w-full'>
            <section className='h-screen overflow-y-auto bg-muted pt-[8rem]'>
              <Services />
            </section>
          </CarouselItem>

          {/* About Section */}
          <CarouselItem className='w-full'>
            <section className='h-screen overflow-y-auto bg-muted py-[8rem]'>
              <AboutUs />
            </section>
          </CarouselItem>

          {/* Contact Section */}
          <CarouselItem className='w-full'>
            <section className='h-screen overflow-y-auto bg-muted pt-[8rem]'>
              <ContactUs />
            </section>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
