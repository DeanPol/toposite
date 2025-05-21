import './globals.css';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Technical Office | Politis Edouardos-Odysseas',
  description: 'Technical Studies Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <title>Technical Office | Politis Edouardos-Odysseas</title>
        <meta
          name='description'
          content='Topographic Studies - Technical Reports - Building Permits - POLITIS EDOUARDOS-ODYSSEAS | topographypolitis@gmail.com | +30 695518942'
        />
        <meta
          name='keywords'
          content='technical studies, building permits in Greece, engineering in Greece, Greek engineering services, civil engineering Greece, structural engineering Greece, Naxos topography, Greece topography'
        ></meta>
      </head>
      <body className={inter.className}>
        <Suspense fallback={<></>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
