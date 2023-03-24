import i18next, { t } from 'i18next';
import type { Lang } from '@/types/lang';
import en from './en.json';
import es from './es.json';

const resources = {
  en,
  es,
};

const getTranslate = async (lang: Lang) => {
  const initialize = async () => {
    return await i18next.init({
      lng: lang,
      debug: true,
      resources,
    });
  };

  if (i18next.isInitialized) {
    return i18next.changeLanguage(lang);
  }

  return await initialize();
};

export { getTranslate };
