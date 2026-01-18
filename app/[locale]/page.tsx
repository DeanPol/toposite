import Script from 'next/script';
import ResponsiveImage from '@/components/ResponsiveImage';
import { getTranslations, Locale } from '@/lib/i18n';

interface PageProps {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params; // ✔️ Await required for top-level dynamic routes
  const t = getTranslations(locale);

  return {
    title:
      locale === 'en'
        ? 'Technical Office in Naxos | Politis Edouardos-Odysseas'
        : 'Τεχνικό Μελετητικό Γραφείο στη Νάξο | Πολίτης Εδουάρδος-Οδυσσέας',
    description:
      locale === 'en'
        ? 'Topographic surveys, building permits and engineering services in Naxos and the Cyclades'
        : 'Τοπογραφικές μελέτες, οικοδομικές άδειες και τεχνικές υπηρεσίες στη Νάξο και Κυκλάδες',
    alternates: {
      languages: {
        el: '/',
        en: '/en',
      },
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params; // ✔️ Await required
  const t = getTranslations(locale);

  return (
    <>
      {/* LocalBusiness structured data */}
      <Script
        id={`local-business-schema-${locale}`}
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name:
              locale === 'en'
                ? 'Technical Office Politis Edouardos-Odysseas'
                : 'Τεχνικό Μελετητικό Γραφείο Πολίτης Εδουάρδος-Οδυσσέας',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Naxos',
              addressRegion: 'Cyclades',
              addressCountry: 'GR',
            },
            areaServed: ['Naxos', 'Cyclades', 'Athens', 'Greece'],
            url:
              locale === 'en'
                ? 'https://politis-engineering.com/en'
                : 'https://politis-engineering.com/',
          }),
        }}
      />

      {/* Hero Section */}
      <section className='relative h-full flex items-center justify-center'>
        <ResponsiveImage
          fileName='header_fit.webp'
          alt={t.headerTitle || 'Technical Office'}
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-black/50' />

        <div className='relative text-center text-white px-4'>
          <h1 className='text-5xl font-bold mb-6'>{t.headerTitle}</h1>
          <p className='text-xl mb-10'>{t.headerName}</p>
        </div>
      </section>
    </>
  );
}
