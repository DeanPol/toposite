import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='el'>
      <body className='min-h-screen w-full'>{children}</body>
    </html>
  );
}
