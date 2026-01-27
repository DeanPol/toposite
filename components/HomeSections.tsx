import React from 'react';
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';

interface ServiceItem {
  title: string;
  image: string;
  longDescription: string;
}

interface HomeSectionsProps {
  locale: 'el' | 'en';
  homeIntro: string;
  homeServicesTitle: string;
  homeServicesSubtitle: string;
  featuredServices: ServiceItem[];
  homeCtaTitle: string;
  homeCtaDescription: string;
  homeCtaButton: string;
  serviceLink: string;
  contactLink: string;
}

export default function HomeSections({
  locale,
  homeIntro,
  homeServicesTitle,
  homeServicesSubtitle,
  featuredServices,
  homeCtaTitle,
  homeCtaDescription,
  homeCtaButton,
  serviceLink,
  contactLink,
}: HomeSectionsProps) {
  return (
    <>
      {/* Intro Section */}
      <section className='py-16 bg-background'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <p className='text-lg md:text-xl text-muted-foreground text-center leading-relaxed'>
            {homeIntro}
          </p>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className='py-16 bg-muted'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              {homeServicesTitle}
            </h2>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              {homeServicesSubtitle}
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className='bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border'
              >
                <div className='aspect-video overflow-hidden'>
                  <ResponsiveImage
                    fileName={`service_${index + 1}.webp`}
                    desktopWidth={400}
                    desktopHeight={232}
                    mobileWidth={350}
                    mobileHeight={200}
                    lazyload={true}
                    imageDescription={service.title}
                    className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-muted-foreground text-sm mb-4 line-clamp-3'>
                    {service.longDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <Link
              href={serviceLink}
              className='inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors'
            >
              {locale === 'el' ? 'Δείτε Όλες τις Υπηρεσίες' : 'View All Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-primary'>
        <div className='container mx-auto px-4 text-center max-w-3xl'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4 text-primary-foreground'>
            {homeCtaTitle}
          </h2>
          <p className='text-lg mb-8 text-primary-foreground/80'>{homeCtaDescription}</p>
          <Link
            href={contactLink}
            className='inline-block bg-background text-foreground px-8 py-4 rounded-md font-medium hover:bg-background/90 transition-colors text-lg'
          >
            {homeCtaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
