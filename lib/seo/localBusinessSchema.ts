export interface LocalBusinessSchemaProps {
  locale: 'el' | 'en';
  url: string;
}

export function getLocalBusinessSchema({
  locale,
  url,
}: LocalBusinessSchemaProps) {
  const cycladesIslands = [
    'Naxos',
    'Paros',
    'Mykonos',
    'Santorini',
    'Tinos',
    'Andros',
    'Syros',
    'Milos',
    'Sifnos',
    'Serifos',
    'Kythnos',
    'Kea',
    'Amorgos',
    'Ios',
    'Folegandros',
    'Sikinos',
    'Anafi',
    'Koufonisia',
    'Donousa',
    'Schinousa',
    'Heraklia',
    'Antiparos',
    'Despotiko',
  ];

  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name:
      locale === 'el'
        ? 'Τεχνικό Μελετητικό Γραφείο Πολίτης Εδουάρδος-Οδυσσέας'
        : 'Technical Office Politis Edouardos-Odysseas',
    description:
      locale === 'el'
        ? 'Τοπογραφικές μελέτες, οικοδομικές άδειες, ενεργειακές επιθεωρήσεις, μελέτες πυρασφάλειας και τεχνικές υπηρεσίες στη Νάξο, Κυκλάδες και Αθήνα'
        : 'Topographic surveys, building permits, energy inspections, fire safety studies and engineering services in Naxos, Cyclades and Athens',
    url: `https://politis-engineering.com${url}`,
    telephone: '+30 6975518942',
    email: 'topographypolitis@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: locale === 'el' ? 'Χώρα' : 'Chora',
      addressLocality: 'Naxos',
      addressRegion: 'Cyclades',
      postalCode: '84300',
      addressCountry: 'GR',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Naxos',
      },
      {
        '@type': 'State',
        name: 'Cyclades',
      },
      {
        '@type': 'City',
        name: 'Athens',
      },
      {
        '@type': 'Country',
        name: 'Greece',
      },
      ...cycladesIslands.map((island) => ({
        '@type': 'City' as const,
        name: island,
      })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:
        locale === 'el'
          ? 'Επαγγελματικές Υπηρεσίες'
          : 'Professional Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name:
              locale === 'el'
                ? 'Τοπογραφικές Μελέτες'
                : 'Topographic Surveys',
            description:
              locale === 'el'
                ? 'Ακριβής αποτύπωση ακινήτων σύμφωνα με το Ελληνικό Γεωδαιτικό Σύστημα Αναφοράς 1987'
                : 'Accurate property mapping according to the Hellenic Geodetic Reference System 1987',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name:
              locale === 'el'
                ? 'Οικοδομικές Άδειες'
                : 'Building Permits',
            description:
              locale === 'el'
                ? 'Αρχιτεκτονικές και στατικές μελέτες για νέα οικοδομικά έργα'
                : 'Architectural and structural studies for new building projects',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name:
              locale === 'el'
                ? 'Ενεργειακές Επιθεωρήσεις'
                : 'Energy Inspections',
            description:
              locale === 'el'
                ? 'Ενεργειακή επιθεώρηση και έκδοση πιστοποιητικού ενεργειακής απόδοσης'
                : 'Energy inspection and issuance of energy performance certificate',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name:
              locale === 'el'
                ? 'Μελέτες Πυρασφάλειας'
                : 'Fire Safety Studies',
            description:
              locale === 'el'
                ? 'Μελέτες εγκαταστάσεων και δικτύων ενεργητικής πυροπροστασίας'
                : 'Studies for fire protection and active fire safety systems',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name:
              locale === 'el'
                ? 'Τεχνικές Εκθέσεις'
                : 'Technical Reports',
            description:
              locale === 'el'
                ? 'Τεκμηριωμένες τεχνικές εκθέσεις για ιδιοκτησιακές διαφορές και εφαρμογή τίτλων ιδιοκτησίας'
                : 'Well-documented technical reports for property disputes and application of property titles',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name:
              locale === 'el'
                ? 'Υπηρεσίες Drone'
                : 'Drone Services',
            description:
              locale === 'el'
                ? 'Αεροβιντεοσκόπηση και αεροφωτογράφηση υψηλής ανάλυσης'
                : 'High-resolution aerial videography and photography',
          },
        },
      ],
    },
    image: 'https://politis-engineering.com/images/site_logo.webp',
    logo: 'https://politis-engineering.com/images/site_logo.webp',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.linkedin.com/in/edwardpolitis/',
    ],
  };

  return baseSchema;
}
