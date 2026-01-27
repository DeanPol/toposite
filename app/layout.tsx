import './globals.css';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://politis-engineering.com'),
  title: {
    default: 'Τεχνικό Μελετητικό Γραφείο στη Νάξο | Πολίτης Εδουάρδος-Οδυσσέας',
    template: '%s | Πολίτης Εδουάρδος-Οδυσσέας',
  },
  description:
    'Τοπογραφικές μελέτες, οικοδομικές άδειες και τεχνικές υπηρεσίες στη Νάξο και Κυκλάδες',
  alternates: {
    canonical: '/',
    languages: {
      'el': '/',
      'en': '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    alternateLocale: 'en_US',
    url: 'https://politis-engineering.com',
    siteName: 'Τεχνικό Μελετητικό Γραφείο Πολίτης',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='el' className='scroll-smooth' suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Suspense fallback={<></>}>
          <Navbar />
          <main className='flex-1'>{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
