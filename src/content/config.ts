import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    draft: z.boolean().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishedAt: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
};
