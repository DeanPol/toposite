'use client';

import { Menu, Mail, Phone, Send, ChevronRight } from 'lucide-react';
import { Button } from '@/components/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/sheet';
import ListItem from '@/components/list';
import { Carousel, CarouselContent, CarouselItem } from '@/components/carousel';
import { cn } from '@/lib/utils';
import { useState, useEffect, Fragment } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import '../i18n';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface NavigationItem {
  name: string;
  href: string;
}

interface ServiceItem {
  title: string;
  image: string;
  longDescription: string;
  subServices: string[];
}

interface StudiesItem {
  name: string;
}

interface EquipmentDetails {
  name: string;
}

interface Specification {
  characteristic: string;
  details?: EquipmentDetails[];
}

interface EquipmentItem {
  entryName: string;
  specifications: Specification[];
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['home', 'services', 'about', 'contact'];

  const { t, i18n } = useTranslation();

  const navigationItems = t('navigation', {
    returnObjects: true,
  }) as NavigationItem[];

  const serviceItems = t('services', {
    returnObjects: true,
  }) as ServiceItem[];

  const studiesItems = t('previousStudies', {
    returnObjects: true,
  }) as StudiesItem[];

  const equipmentItems = t('equipmentEntry', {
    returnObjects: true,
  }) as EquipmentItem[];

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
              <h2 className='text-xl font-bold mb-4 text-center'>
                {t('servicesHeader')}
              </h2>

              <p className='text-muted-foreground text-center max-w-2xl mx-auto'>
                {t('servicesSubtitle')}
              </p>
              <div className='relative px-4 text-center my-8 p-6 rounded-lg bg-[cornsilk] max-w-4xl mx-auto'>
                <p className='text-xs md:text-sm text-muted-foreground max-w-4xl mx-auto'>
                  {t('servicesDisclaimer')}
                </p>
              </div>
              <div className='grid lg:grid-cols-3 gap-8 text-center max-w-7xl mx-auto py-8 mb-4'>
                {serviceItems.map((service, index) => (
                  <div
                    key={index}
                    className='rounded-lg overflow-hidden transition-all hover:shadow-lg bg-card border border-gray-150'
                  >
                    <div className='aspect-video overflow-hidden border-b border-border/50'>
                      <img
                        src={service.image}
                        alt={service.title}
                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 bg-muted'
                      />
                    </div>
                    <div className='p-6'>
                      <h3 className='text-2xl font-semibold mb-4'>
                        {service.title}
                      </h3>
                      <p className='text-muted-foreground mb-6'>
                        {service.longDescription}
                      </p>
                      <div className='mt-6'>
                        <ul className='space-y-2'>
                          {service.subServices?.map((subService, idx) => (
                            <li key={idx} className='flex items-start gap-2'>
                              <ChevronRight className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                              <span className='text-left'>{subService}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </CarouselItem>

          {/* About Section */}
          <CarouselItem className='w-full'>
            <section className='h-screen overflow-y-auto bg-muted py-[8rem]'>
              <div className='container mx-auto p-8 bg-card rounded'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                  <div className='relative aspect-[4/3] rounded-lg overflow-hidden'>
                    <img
                      src='/images/header_banner.webp'
                      alt='Our team collaborating'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='space-y-6'>
                    <div className='inline-block'>
                      <h2 className='text-3xl font-bold mb-2'>
                        {t('studiesSectionTitle')}
                      </h2>
                      <div className='h-1 w-20 bg-primary rounded-full' />
                    </div>
                    <ul className='space-y-3 text-lg text-muted-foreground leading-relaxed'>
                      {studiesItems.map((study, index) => (
                        <ListItem key={index} text={study.name} />
                      ))}
                    </ul>
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-12 items-center mt-12'>
                  <div className='space-y-6'>
                    <div className='inline-block'>
                      <h2 className='text-3xl font-bold mb-2'>
                        {t('equipmentSectionTitle')}
                      </h2>
                      <div className='h-1 w-20 bg-primary rounded-full' />
                    </div>
                    <ul className='list-disc list-inside space-y-4 text-gray-800'>
                      {equipmentItems.map((entry, index) => (
                        <li key={index}>
                          <span className='font-semibold'>
                            {entry.entryName}
                          </span>
                          <ul className=' pl-6 mt-2 text-sm text-gray-600'>
                            {entry.specifications.map(
                              (specification, index) => (
                                <Fragment key={index}>
                                  <li>
                                    {specification.characteristic}
                                    {specification.details && (
                                      <ul className='pl-6'>
                                        {specification.details.map(
                                          (detail, index) => (
                                            <li key={index}>{detail.name}</li>
                                          ),
                                        )}
                                      </ul>
                                    )}
                                  </li>
                                  <br />
                                </Fragment>
                              ),
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='relative aspect-[4/3] rounded-lg overflow-hidden'>
                    <img
                      src='/images/equipment.webp'
                      alt='Our team collaborating'
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
            </section>
          </CarouselItem>

          {/* Contact Section */}
          <CarouselItem className='w-full'>
            <section className='h-screen overflow-y-auto bg-muted pt-[8rem]'>
              <div className='container mx-auto px-4'>
                <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-12'>
                  <div>
                    <h2 className='text-3xl font-bold mb-8'>
                      {t('contactUs')}
                    </h2>
                    <div className='space-y-8'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 p-3 rounded-full'>
                          <Mail className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-medium'>{t('contactEmail')}</h3>
                          <p className='text-muted-foreground'>
                            topographypolitis@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 p-3 rounded-full'>
                          <Phone className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-medium'>{t('contactPhone')}</h3>
                          <p className='text-muted-foreground'>
                            +30 6975518942
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='bg-card p-8 rounded-lg shadow-lg'>
                    <form className='space-y-6'>
                      <div className='grid md:grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-sm font-medium mb-2'>
                            {t('contactFirstName')}
                          </label>
                          <input
                            type='text'
                            className='w-full px-4 py-2 rounded-md border bg-background'
                            placeholder='John'
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium mb-2'>
                            {t('contactLastName')}
                          </label>
                          <input
                            type='text'
                            className='w-full px-4 py-2 rounded-md border bg-background'
                            placeholder='Doe'
                          />
                        </div>
                      </div>

                      <div>
                        <label className='block text-sm font-medium mb-2'>
                          {t('contactEmail')}
                        </label>
                        <input
                          type='email'
                          className='w-full px-4 py-2 rounded-md border bg-background'
                          placeholder='john@example.com'
                        />
                      </div>

                      <div>
                        <label className='block text-sm font-medium mb-2'>
                          {t('contactMessage')}
                        </label>
                        <textarea
                          placeholder='Το μήνυμά σας...'
                          className='w-full px-4 py-2 rounded-md border bg-background h-32'
                        />
                      </div>

                      <Button
                        aria-label='Send Message'
                        className='w-full'
                        size='lg'
                      >
                        <Send className='mr-2 h-4 w-4' /> {t('contactSend')}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
