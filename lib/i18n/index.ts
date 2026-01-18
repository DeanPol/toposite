import el from './el.json';
import en from './en.json';

export type Locale = 'el' | 'en';

export const translations: Record<Locale, typeof el> = {
  el,
  en,
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}
