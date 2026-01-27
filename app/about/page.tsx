import AboutUs from '@/components/AboutUs';
import { elData } from '@/lib/data/el';

export async function generateMetadata() {
  const baseUrl = 'https://politis-engineering.com';

  return {
    title: 'Σχετικά | Τεχνικό Μελετητικό Γραφείο Πολίτης',
    description:
      'Μάθετε για το τεχνικό γραφείο μας, τον εξοπλισμό (GNSS receivers, Total Station, Drone) και τις προηγούμενες μελέτες στη Νάξο, Κυκλάδες και Αθήνα. Ειδικευμένοι σε τοπογραφικές αποτυπώσεις και τεχνικές εκθέσεις',
    keywords: [
      'τεχνικό γραφείο Νάξος',
      'τοπογραφικός εξοπλισμός',
      'GNSS receivers',
      'Total Station',
      'drone αεροφωτογράφηση',
      'προηγούμενες μελέτες',
      'τεχνικές εκθέσεις',
    ],
    alternates: {
      canonical: '/about',
      languages: {
        el: '/about',
        en: '/en/about',
        'x-default': '/about',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'el_GR',
      alternateLocale: 'en_US',
      url: `${baseUrl}/about`,
      title: 'Σχετικά | Τεχνικό Μελετητικό Γραφείο Πολίτης',
      description:
        'Μάθετε για το τεχνικό γραφείο μας, τον εξοπλισμό και τις προηγούμενες μελέτες',
      images: [
        {
          url: `${baseUrl}/images/equipment.webp`,
          width: 1200,
          height: 630,
          alt: 'Τοπογραφικός Εξοπλισμός',
        },
      ],
    },
  };
}

export default function AboutPage() {
  return (
    <section className='min-h-screen overflow-y-auto bg-muted pt-[8rem] pb-24'>
      <AboutUs
        previousStudies={elData.previousStudies}
        equipmentEntry={elData.equipmentEntry}
        studiesSectionTitle={elData.studiesSectionTitle}
        equipmentSectionTitle={elData.equipmentSectionTitle}
      />
    </section>
  );
}
