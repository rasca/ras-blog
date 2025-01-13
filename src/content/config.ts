import { defineCollection, z } from "astro:content";

const mediaItem = z.object({
  type: z.enum(['image', 'video']),
  src: z.string(),
  alt: z.string().optional(),
});

const writings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const art = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    media: z.record(z.string(), z.array(mediaItem)).default({}),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

export const collections = {
  writings,
  art,
  projects,
};
