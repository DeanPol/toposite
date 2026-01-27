import Script from 'next/script';
import ContactUs from '@/components/ContactUs';
import { enData } from '@/lib/data/en';
import { getLocalBusinessSchema } from '@/lib/seo/localBusinessSchema';

export async function generateMetadata() {
  const baseUrl = 'https://politis-engineering.com';

  return {
    title: 'Contact Us | Technical Office Politis',
    description:
      'Contact our technical office in Naxos. Phone: +30 6975518942, Email: topographypolitis@gmail.com. Services in Naxos, Cyclades, and Athens',
    keywords: [
      'contact technical office Naxos',
      'surveyor Naxos contact',
      'engineering services contact',
      'topographic services Cyclades',
    ],
    alternates: {
      canonical: '/en/contact',
      languages: {
        el: '/contact',
        en: '/en/contact',
        'x-default': '/contact',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      alternateLocale: 'el_GR',
      url: `${baseUrl}/en/contact`,
      title: 'Contact Us | Technical Office Politis',
      description:
        'Contact our technical office in Naxos for topographic surveys and building permits',
    },
  };
}

export default function EnContactPage() {
  return (
    <>
      {/* LocalBusiness structured data for contact page */}
      <Script
        id='local-business-schema-contact-en'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getLocalBusinessSchema({ locale: 'en', url: '/en/contact' }),
          ),
        }}
      />
      <section className='min-h-screen overflow-y-auto bg-muted pt-[8rem] pb-24'>
        <ContactUs
          contactUs={enData.contactUs}
          contactEmail={enData.contactEmail}
          contactPhone={enData.contactPhone}
          contactAddress={enData.contactAddress}
          address={enData.address}
          contactFirstName={enData.contactFirstName}
          contactLastName={enData.contactLastName}
          contactMessage={enData.contactMessage}
          contactMessagePlaceholder={enData.contactMessagePlaceholder}
          contactSend={enData.contactSend}
          contactStatusFail={enData.contactStatusFail}
          contactStatusSuccess={enData.contactStatusSuccess}
        />
      </section>
    </>
  );
}
