export const stripLangFromSlug = (slug) => {
  const startWithSlash = slug.startsWith('/');
  const sliceAt = startWithSlash ? 2 : 1;

  return slug.split('/').slice(sliceAt).join('/');
};
