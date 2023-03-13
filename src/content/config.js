import { defineCollection, z } from 'astro:content';
import { parse } from 'date-fns';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishedAt: z.string().transform((date) => {
      const format = 'dd/MM/yyyy';
      return parse(date, format, new Date());
    }),
  }),
});

export const collections = {
  blog: blogCollection,
};
