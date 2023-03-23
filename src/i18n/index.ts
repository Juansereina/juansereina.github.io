import i18next, { t } from 'i18next';

import main from './main.json';
import nav from './nav.json';

const resources = {
  ...main,
  ...nav,
};

const getTranslate = async (lang: 'en' | 'es') => {
  const initialize = async () => {
    return await i18next.init({
      lng: lang,
      debug: true,
      resources,
    });
  };

  if (!i18next.isInitialized) {
    return t;
  }

  return await initialize();
};

export { getTranslate };
