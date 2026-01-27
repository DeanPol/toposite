import Script from 'next/script';
import ContactUs from '@/components/ContactUs';
import { elData } from '@/lib/data/el';
import { getLocalBusinessSchema } from '@/lib/seo/localBusinessSchema';

export async function generateMetadata() {
  const baseUrl = 'https://politis-engineering.com';

  return {
    title: 'Επικοινωνία | Τεχνικό Μελετητικό Γραφείο Πολίτης',
    description:
      'Επικοινωνήστε με το τεχνικό γραφείο μας στη Νάξο. Τηλέφωνο: +30 6975518942, Email: topographypolitis@gmail.com. Υπηρεσίες σε Νάξο, Κυκλάδες και Αθήνα',
    keywords: [
      'επαγγελματική επικοινωνία Νάξος',
      'τοπογράφος Νάξος',
      'τεχνικό γραφείο επικοινωνία',
      'τοπογραφικές υπηρεσίες Κυκλάδες',
    ],
    alternates: {
      canonical: '/contact',
      languages: {
        el: '/contact',
        en: '/en/contact',
        'x-default': '/contact',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'el_GR',
      alternateLocale: 'en_US',
      url: `${baseUrl}/contact`,
      title: 'Επικοινωνία | Τεχνικό Μελετητικό Γραφείο Πολίτης',
      description:
        'Επικοινωνήστε με το τεχνικό γραφείο μας στη Νάξο για τοπογραφικές μελέτες και οικοδομικές άδειες',
    },
  };
}

export default function ContactPage() {
  return (
    <>
      {/* LocalBusiness structured data for contact page */}
      <Script
        id='local-business-schema-contact-el'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getLocalBusinessSchema({ locale: 'el', url: '/contact' }),
          ),
        }}
      />
      <section className='min-h-screen overflow-y-auto bg-muted pt-[8rem] pb-24'>
        <ContactUs
          contactUs={elData.contactUs}
          contactEmail={elData.contactEmail}
          contactPhone={elData.contactPhone}
          contactAddress={elData.contactAddress}
          address={elData.address}
          contactFirstName={elData.contactFirstName}
          contactLastName={elData.contactLastName}
          contactMessage={elData.contactMessage}
          contactMessagePlaceholder={elData.contactMessagePlaceholder}
          contactSend={elData.contactSend}
          contactStatusFail={elData.contactStatusFail}
          contactStatusSuccess={elData.contactStatusSuccess}
        />
      </section>
    </>
  );
}
