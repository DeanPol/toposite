import AboutUs from '@/components/AboutUs';
import { enData } from '@/lib/data/en';

export async function generateMetadata() {
  const baseUrl = 'https://politis-engineering.com';

  return {
    title: 'About Us | Technical Office Politis',
    description:
      'Learn about our technical office, equipment (GNSS receivers, Total Station, Drone) and previous studies in Naxos, Cyclades, and Athens. Specialized in topographic surveys and technical reports',
    keywords: [
      'technical office Naxos',
      'surveying equipment',
      'GNSS receivers',
      'Total Station',
      'drone aerial photography',
      'previous studies',
      'technical reports',
    ],
    alternates: {
      canonical: '/en/about',
      languages: {
        el: '/about',
        en: '/en/about',
        'x-default': '/about',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: 'el_GR',
      url: `${baseUrl}/en/about`,
      title: 'About Us | Technical Office Politis',
      description:
        'Learn about our technical office, equipment, and previous studies',
      images: [
        {
          url: `${baseUrl}/images/equipment.webp`,
          width: 1200,
          height: 630,
          alt: 'Surveying Equipment',
        },
      ],
    },
  };
}

export default function EnAboutPage() {
  return (
    <section className='min-h-screen overflow-y-auto bg-muted pt-[8rem] pb-24'>
      <AboutUs
        previousStudies={enData.previousStudies}
        equipmentEntry={enData.equipmentEntry}
        studiesSectionTitle={enData.studiesSectionTitle}
        equipmentSectionTitle={enData.equipmentSectionTitle}
      />
    </section>
  );
}
