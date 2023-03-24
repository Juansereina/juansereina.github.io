import type { CollectionEntry } from 'astro:content';

export const stripLangFromSlug = (slug: CollectionEntry<'blog'>['slug']) =>
  slug.split('/').slice(1).join('/');

export const getLangFromSlug = (slug: CollectionEntry<'blog'>['slug']) =>
  slug.split('/')[0];

enum Lang {
  en = 'en',
  es = 'es',
}

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(/\/?([a-z]{2}-?[a-z]{0,2})\/?/);
  const result = langCodeMatch ? langCodeMatch[1] : Lang.en;
  const exist = result.includes(Lang.en || Lang.es);

  return exist ? result : Lang.en;
}
