import Script from 'next/script';
import HomeClient from '@/components/HomeClient';

export const metadata = {
  title: 'Technical Office in Naxos | Politis Edouardos-Odysseas',
  description:
    'Topographic surveys, building permits and engineering services in Naxos and the Cyclades',
  alternates: {
    languages: {
      el: '/',
      en: '/en',
    },
  },
};

export default function Page() {
  return (
    <>
      <Script
        id='local-business-schema-en'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Technical Office Politis Edouardos-Odysseas',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Naxos',
              addressRegion: 'Cyclades',
              addressCountry: 'GR',
            },
            areaServed: ['Naxos', 'Cyclades', 'Athens', 'Greece'],
            url: 'https://your-domain.gr/en',
          }),
        }}
      />

      <HomeClient locale='en' />
    </>
  );
}
