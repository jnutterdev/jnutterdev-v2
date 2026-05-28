import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    status: z.enum(['active', 'archived', 'draft']),
    github_url: z.string().optional(),
    live_url: z.string().optional(),
    thumbnail: z.string().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    cover_image: z.string().optional(),
  }),
});

export const collections = { projects, blog };
