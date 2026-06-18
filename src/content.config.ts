import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
    tech: z.array(z.string()).default([]),
    status: z.enum(['active', 'archived', 'draft']).optional(),
    github_url: z.string().optional(),
    live_url: z.string().optional(),
    thumbnail: z.string().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    blueskyUrl: z.string().url().optional(),
    mastodonUrl: z.string().url().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()),
    cover_image: z.string().optional(),
    blueskyUrl: z.string().url().optional(),
    mastodonUrl: z.string().url().optional(),
  }),
});

export const collections = { projects, blog };
