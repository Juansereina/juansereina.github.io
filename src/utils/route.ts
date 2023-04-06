import type { CollectionEntry } from 'astro:content';
import { Lang } from '@/types/lang';

export const getLangFromSlug = (slug: CollectionEntry<'blog'>['slug' | 'id']) =>
  slug.split('/')[0];

type ReturnType = keyof typeof Lang;

export function getLanguageFromURL(pathname: string): ReturnType {
  const langCodeMatch = pathname.match(/\/?([a-z]{2}-?[a-z]{0,2})\/?/);
  const result = langCodeMatch ? (langCodeMatch[1]) as ReturnType : Lang.en;
  const exist = Object.values(Lang).some((lang) => result.includes(lang));

  return exist ? result : Lang.en;
}
