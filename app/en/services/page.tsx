import Services from '@/components/Services';
import LeafletMapWrapper from '@/components/LeafletMapWrapper';
import { enData } from '@/lib/data/en';

export async function generateMetadata() {
  const baseUrl = 'https://politis-engineering.com';

  return {
    title: 'Services | Technical Office Politis',
    description:
      'Complete range of professional services: topographic surveys for cadastre and building permits, energy inspections, fire safety studies, technical reports, drone services, and laser scanning in Naxos, Cyclades, and Athens',
    keywords: [
      'topographic surveys',
      'building permits',
      'energy inspections',
      'fire safety studies',
      'drone services',
      'laser scanning',
      'topographic diagram',
      'technical reports',
    ],
    alternates: {
      canonical: '/en/services',
      languages: {
        el: '/services',
        en: '/en/services',
        'x-default': '/services',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: 'el_GR',
      url: `${baseUrl}/en/services`,
      title: 'Services | Technical Office Politis',
      description:
        'Complete range of professional topographic surveys, building permits, and engineering services',
      images: [
        {
          url: `${baseUrl}/images/service_1.webp`,
          width: 1200,
          height: 630,
          alt: 'Topographic Surveys',
        },
      ],
    },
  };
}

export default function EnServicesPage() {
  return (
    <section className='min-h-screen overflow-y-auto bg-muted pt-[8rem] pb-24'>
      <div className='container mx-auto px-4'>
        <Services
          services={enData.services}
          servicesHeader={enData.servicesHeader}
          servicesSubtitle={enData.servicesSubtitle}
          servicesDisclaimer={enData.servicesDisclaimer}
        />
        <div className='max-w-7xl mx-auto p-8 mb-24 bg-card rounded'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='inline-block mb-2'>
              <h2 className='text-3xl font-bold mb-2'>
                {enData.laserScannerTitle}
              </h2>
              <div className='h-1 w-20 bg-primary rounded-full' />
              <p className='text-muted-foreground my-6'>
                {enData.laserScannerDescription}
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
