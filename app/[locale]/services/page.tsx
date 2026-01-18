import Services from '@/components/Services';
import LeafletMap from '@/components/LeafletMap';
import { getTranslations, Locale } from '@/lib/i18n';

export default function ServicesPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getTranslations(params.locale);

  return (
    <section className='h-full overflow-y-auto bg-muted p-8'>
      <h1 className='text-3xl font-bold mb-6'>{t.servicesHeader}</h1>
      <p className='text-muted-foreground text-center max-w-2xl mx-auto'>
        {t.servicesSubtitle}
      </p>

      <Services data={t.services} />

      <div className='container mx-auto max-w-7xl p-8'>
        <LeafletMap />
      </div>
    </section>
  );
}
