import type { CollectionEntry } from 'astro:content';
import { Lang } from '@/types/lang';

export const stripLangFromSlug = (slug: CollectionEntry<'blog'>['slug']) =>
  slug.split('/').slice(1).join('/');

export const getLangFromSlug = (slug: CollectionEntry<'blog'>['slug']) =>
  slug.split('/')[0];

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(/\/?([a-z]{2}-?[a-z]{0,2})\/?/);
  const result = langCodeMatch ? (langCodeMatch[1] as Lang) : Lang.en;
  const exist = Object.values(Lang).some((lang) => result.includes(lang));

  return exist ? result : Lang.en;
}
