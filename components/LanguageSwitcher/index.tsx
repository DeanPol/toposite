import { useTranslation } from 'react-i18next';

interface Languages {
  [key: string]: { nativeName: string };
}
const lngs: Languages = {
  el: { nativeName: 'Greek' },
  en: { nativeName: 'English' },
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div>
      {Object.entries(lngs).map(([key, value]) => (
        <button
          type='submit'
          key={key}
          onClick={() => i18n.changeLanguage(key)}
          disabled={i18n.resolvedLanguage === key}
        >
          {value.nativeName}
        </button>
      ))}
    </div>
  );
}
