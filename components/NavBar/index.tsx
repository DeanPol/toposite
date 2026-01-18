import Link from 'next/link';
import LanguageSwitcher from '../LanguageSwitcher';
import { Locale } from '@/lib/i18n';

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar({
  locale,
  labels,
}: {
  locale: Locale;
  labels: NavItem[];
}) {
  const base = `/${locale}`;

  return (
    <header className='fixed top-0 z-50 h-[5rem] w-full bg-background border-b'>
      <nav className='mx-auto max-w-7xl h-full px-4 flex items-center justify-between'>
        <Link href={`${base}/`}>
          <img
            src='/images/site_logo.webp'
            alt='Technical Office Politis'
            className='h-[60px]'
          />
        </Link>

        <div className='hidden md:flex items-center gap-6'>
          {labels.map((item, index) => (
            <Link key={index} href={`${base}${item.href}`}>
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
