export default function LanguageSwitcher() {
  
  interface Languages{
    [key: string]: {nativeName: string}
  }
  const lngs = {
    el: {nativeName: 'Greek'},
    en: {nativeName: 'English'}
  }

  return (
    <div>
      {lngs.map((lng) => (
        <button></button>
      ))}
    </div>

  );
}