import i18next, { t } from 'i18next';

import en from './en.json';
import es from './es.json';

const resources = {
  en,
  es,
};

const getTranslate = async (lang: 'en' | 'es') => {
  const initialize = async () => {
    return await i18next.init({
      lng: lang,
      debug: true,
      resources,
    });
  };

  if (i18next.isInitialized) {
    return t;
  }

  return await initialize();
};

export { getTranslate };
