import './globals.css';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Τεχνικό Μελετητικό Γραφείο | Πολίτης Εδουάρδος-Οδυσσέας',
  description: 'Υπηρεσίες Τεχνικής Μελέτης',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <title>Τεχνικό Μελετητικό Γραφείο | Πολίτης Εδουάρδος-Οδυσσέας</title>
        <meta name='description' content='Τεχνικό Μελετητικό Γραφείο'></meta>
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
