import type { CollectionEntry } from 'astro:content';

export const stripLangFromSlug = (slug: CollectionEntry<'blog'>['slug']) =>
  slug.split('/').slice(1).join('/');

export const getLangFromSlug = (slug: CollectionEntry<'blog'>['slug']) =>
  slug.split('/')[0];
