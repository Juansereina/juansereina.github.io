// Code only for CSR

export const stripLangFromSlug = (slug) => {
  const startWithSlash = slug.startsWith('/');
  const sliceAt = startWithSlash ? 2 : 1;

  return slug.split('/').slice(sliceAt).join('/');
};

export const saveLang = (lang) => localStorage.setItem('lang', lang);
export const getCurrentLang = () => localStorage.getItem('lang');
