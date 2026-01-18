// app/[locale]/layout.tsx
import Navbar from '@/components/NavBar';
import { getTranslations, Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

const locales: Locale[] = ['el', 'en'];

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>; // ✅ awaitable for top-level dynamic routes
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params; // ✅ await required
  const locale = rawLocale as Locale;

  if (!locales.includes(locale)) notFound();

  const t = getTranslations(locale);

  return (
    <>
      <Navbar locale={locale} labels={t.navigation} />
      {children}
    </>
  );
}
