import Services from '@/components/Services';
import LeafletMapWrapper from '@/components/LeafletMapWrapper';
import { elData } from '@/lib/data/el';

export async function generateMetadata() {
  const baseUrl = 'https://politis-engineering.com';

  return {
    title: 'Υπηρεσίες | Τεχνικό Μελετητικό Γραφείο Πολίτης',
    description:
      'Πλήρης γκάμα επαγγελματικών υπηρεσιών: τοπογραφικές μελέτες για κτηματολόγιο και οικοδομικές άδειες, ενεργειακές επιθεωρήσεις, μελέτες πυρασφάλειας, τεχνικές εκθέσεις, υπηρεσίες drone και λέιζερ σάρωσης στη Νάξο, Κυκλάδες και Αθήνα',
    keywords: [
      'τοπογραφικές μελέτες',
      'οικοδομικές άδειες',
      'ενεργειακές επιθεώρησεις',
      'μελέτες πυρασφάλειας',
      'υπηρεσίες drone',
      'λέιζερ σάρωση',
      'τοπογραφικό διάγραμμα',
      'τεχνικές εκθέσεις',
    ],
    alternates: {
      canonical: '/services',
      languages: {
        el: '/services',
        en: '/en/services',
        'x-default': '/services',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'el_GR',
      alternateLocale: 'en_US',
      url: `${baseUrl}/services`,
      title: 'Υπηρεσίες | Τεχνικό Μελετητικό Γραφείο Πολίτης',
      description:
        'Πλήρης γκάμα επαγγελματικών υπηρεσιών τοπογραφικών μελετών, οικοδομικών αδειών και τεχνικών υπηρεσιών',
      images: [
        {
          url: `${baseUrl}/images/service_1.webp`,
          width: 1200,
          height: 630,
          alt: 'Τοπογραφικές Μελέτες',
        },
      ],
    },
  };
}

export default function ServicesPage() {
  return (
    <section className='min-h-screen overflow-y-auto bg-muted pt-[8rem] pb-24'>
      <div className='container mx-auto px-4'>
        <Services
          services={elData.services}
          servicesHeader={elData.servicesHeader}
          servicesSubtitle={elData.servicesSubtitle}
          servicesDisclaimer={elData.servicesDisclaimer}
        />
        <div className='max-w-7xl mx-auto p-8 mb-24 bg-card rounded'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='inline-block mb-2'>
              <h2 className='text-3xl font-bold mb-2'>
                {elData.laserScannerTitle}
              </h2>
              <div className='h-1 w-20 bg-primary rounded-full' />
              <p className='text-muted-foreground my-6'>
                {elData.laserScannerDescription}
              </p>
            </div>
            <div className='space-y-6'>
              <LeafletMapWrapper />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
