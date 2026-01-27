import Script from 'next/script';
import ResponsiveImage from '@/components/ResponsiveImage';
import Link from 'next/link';
import { elData } from '@/lib/data/el';
import { getLocalBusinessSchema } from '@/lib/seo/localBusinessSchema';
import HomeSections from '@/components/HomeSections';

export async function generateMetadata() {
  const baseUrl = 'https://politis-engineering.com';
  return {
    title: 'Τεχνικό Μελετητικό Γραφείο στη Νάξο | Πολίτης Εδουάρδος-Οδυσσέας',
    description:
      'Επαγγελματικές υπηρεσίες τοπογραφικών μελετών, οικοδομικών αδειών, ενεργειακών επιθεωρήσεων και τεχνικών εκθέσεων στη Νάξο, Κυκλάδες και Αθήνα. Ειδικευμένοι σε τοπογραφικές αποτυπώσεις, μελέτες πυρασφάλειας και υπηρεσίες drone.',
    keywords: [
      'τοπογραφικές μελέτες',
      'οικοδομικές άδειες',
      'ενεργειακές επιθεώρησεις',
      'μελέτες πυρασφάλειας',
      'τεχνικό γραφείο Νάξος',
      'τοπογράφος Κυκλάδες',
      'τεχνικές εκθέσεις',
      'υπηρεσίες drone',
      'αεροφωτογράφηση',
    ],
    alternates: {
      canonical: '/',
      languages: {
        el: '/',
        en: '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'el_GR',
      alternateLocale: 'en_US',
      url: baseUrl,
      siteName: 'Τεχνικό Μελετητικό Γραφείο Πολίτης',
      title: 'Τεχνικό Μελετητικό Γραφείο στη Νάξο | Πολίτης Εδουάρδος-Οδυσσέας',
      description:
        'Επαγγελματικές υπηρεσίες τοπογραφικών μελετών, οικοδομικών αδειών και τεχνικών υπηρεσιών στη Νάξο, Κυκλάδες και Αθήνα',
      images: [
        {
          url: `${baseUrl}/images/site_logo.webp`,
          width: 1200,
          height: 630,
          alt: 'Τεχνικό Μελετητικό Γραφείο Πολίτης',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Τεχνικό Μελετητικό Γραφείο στη Νάξο',
      description:
        'Επαγγελματικές υπηρεσίες τοπογραφικών μελετών και οικοδομικών αδειών',
    },
  };
}

export default function Home() {
  return (
    <>
      {/* LocalBusiness structured data */}
      <Script
        id='local-business-schema-el'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getLocalBusinessSchema({ locale: 'el', url: '/' }),
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
          imageDescription={elData.headerTitle}
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-black/50' />

        <div className='relative container mx-auto px-4 text-center text-white'>
          <div className='mb-12'>
            <h1 className='text-xl md:text-4xl font-bold mb-6 tracking-tight'>
              {elData.headerTitle}
            </h1>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 tracking-tight'>
              {elData.headerName}
            </h1>
          </div>
          <div className='mt-16'>
            <Link
              href='/services'
              className='mr-4 bg-[black] py-3 px-8 rounded-md inline-block'
            >
              {elData.service}
            </Link>
            <Link
              href='/contact'
              className='text-black bg-[white] py-3 px-8 rounded-md inline-block'
            >
              {elData.contact}
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Home Sections */}
      <HomeSections
        locale='el'
        homeIntro={elData.homeIntro}
        homeServicesTitle={elData.homeServicesTitle}
        homeServicesSubtitle={elData.homeServicesSubtitle}
        featuredServices={elData.services.slice(0, 3)}
        homeCtaTitle={elData.homeCtaTitle}
        homeCtaDescription={elData.homeCtaDescription}
        homeCtaButton={elData.homeCtaButton}
        serviceLink='/services'
        contactLink='/contact'
      />
    </>
  );
}
