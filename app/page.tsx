import Script from 'next/script';
import HomeClient from '@/components/HomeClient';

export const metadata = {
  title: 'Τεχνικό Γραφείο Νάξος | Πολίτης Εδουάρδος-Οδυσσέας',
  description:
    'Τοπογραφικές μελέτες, άδειες δόμησης και τεχνικές υπηρεσίες στη Νάξο και τις Κυκλάδες',
};

export default function Page() {
  return (
    <>
      <Script
        id='local-business-schema-el'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Τεχνικό Γραφείο Πολίτης Εδουάρδος-Οδυσσέας',
            image: 'https://your-domain.gr/images/site_logo.webp',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Νάξος',
              addressRegion: 'Κυκλάδες',
              addressCountry: 'GR',
            },
            areaServed: [
              {
                '@type': 'AdministrativeArea',
                name: 'Νάξος',
              },
              {
                '@type': 'AdministrativeArea',
                name: 'Κυκλάδες',
              },
              {
                '@type': 'AdministrativeArea',
                name: 'Αθήνα',
              },
            ],
            email: 'mailto:topographypolitis@gmail.com',
            telephone: '+30 695518942',
            url: 'https://your-domain.gr',
          }),
        }}
      />

      <HomeClient locale='el' />
    </>
  );
}
