import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
	}),
});

export const workCategories = [
	'AIX',
	'Art',
	'Brand design',
	'Design System',
	'Mentorship',
	'UX Strategy',
] as const;

const work = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		year: z.number().int(),
		role: z.string(),
		category: z.enum(workCategories).default('UX Strategy'),
		tags: z.array(z.string()).default([]),
		heroImage: z.string().optional(),
		order: z.number().int().default(0),
		draft: z.boolean().default(false),
		externalUrl: z.string().url().optional(),
	}),
});

export const collections = { blog, work };
