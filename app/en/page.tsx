import Script from 'next/script';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { enData } from '@/lib/data/en';
import { getLocalBusinessSchema } from '@/lib/seo/localBusinessSchema';
import HomeSections from '@/components/HomeSections';

export async function generateMetadata() {
  const baseUrl = 'https://politis-engineering.com';

  return {
    title: 'Technical Office in Naxos | Politis Edouardos-Odysseas',
    description:
      'Professional topographic surveys, building permits, energy inspections, and fire safety studies in Naxos, Cyclades, and Athens. Specialized in topographic mapping, fire safety studies, and drone services.',
    keywords: [
      'topographic surveys',
      'building permits',
      'energy inspections',
      'fire safety studies',
      'technical office Naxos',
      'surveyor Cyclades',
      'technical reports',
      'drone services',
      'aerial photography',
      'engineering services Greece',
    ],
    alternates: {
      canonical: '/en',
      languages: {
        el: '/',
        en: '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: 'el_GR',
      url: `${baseUrl}/en`,
      siteName: 'Technical Office Politis',
      title: 'Technical Office in Naxos | Politis Edouardos-Odysseas',
      description:
        'Professional topographic surveys, building permits, and engineering services in Naxos, Cyclades, and Athens',
      images: [
        {
          url: `${baseUrl}/images/site_logo.webp`,
          width: 1200,
          height: 630,
          alt: 'Technical Office Politis',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Technical Office in Naxos',
      description:
        'Professional topographic surveys and building permits services',
    },
  };
}

export default function EnHomePage() {
  return (
    <>
      {/* LocalBusiness structured data */}
      <Script
        id='local-business-schema-en'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getLocalBusinessSchema({ locale: 'en', url: '/en' }),
          ),
        }}
      />

      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center'>
        <ResponsiveImage
          fileName='header_fit.webp'
          desktopWidth={1920}
          desktopHeight={1080}
          mobileWidth={600}
          mobileHeight={338}
          lazyload={true}
          imageDescription={enData.headerTitle}
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-black/50' />

        <div className='relative container mx-auto px-4 text-center text-white'>
          <div className='mb-12'>
            <h1 className='text-xl md:text-4xl font-bold mb-6 tracking-tight'>
              {enData.headerTitle}
            </h1>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 tracking-tight'>
              {enData.headerName}
            </h1>
          </div>
          <div className='mt-16'>
            <Link
              href='/en/services'
              className='mr-4 bg-[black] py-3 px-8 rounded-md inline-block'
            >
              {enData.service}
            </Link>
            <Link
              href='/en/contact'
              className='text-black bg-[white] py-3 px-8 rounded-md inline-block'
            >
              {enData.contact}
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Home Sections */}
      <HomeSections
        locale='en'
        homeIntro={enData.homeIntro}
        homeServicesTitle={enData.homeServicesTitle}
        homeServicesSubtitle={enData.homeServicesSubtitle}
        featuredServices={enData.services.slice(0, 3)}
        homeCtaTitle={enData.homeCtaTitle}
        homeCtaDescription={enData.homeCtaDescription}
        homeCtaButton={enData.homeCtaButton}
        serviceLink='/en/services'
        contactLink='/en/contact'
      />
    </>
  );
}
