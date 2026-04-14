import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(155),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    category: z.enum(['strategie', 'energiewet', 'technologie', 'financieel']),
    relatedSlugs: z.array(z.string()).min(2),
    seoTitle: z.string().max(60),
    ogImage: z.string().optional(),
    isPillar: z.boolean().default(false),
  }),
});

const kennisbank = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(155),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cluster: z.enum(['basis', 'energiedelen', 'groepen', 'toekomst']),
    relatedSlugs: z.array(z.string()).min(2),
    seoTitle: z.string().max(60),
    ogImage: z.string().optional(),
  }),
});

export const collections = { blog, kennisbank };
