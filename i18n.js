import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './public/locales/en.json';
import el from './public/locales/el.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      el: { translation: el },
    },
    lng: 'el',
    fallbackLng: 'el',
    interpolation: { escapeValue: false },
  });
