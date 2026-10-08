export const site = {
	name: 'Kevin Hatchoua',
	tagline: 'Community, craft, and design that stays human.',
	githubUrl: 'https://github.com/kevinhatchoua',
	nav: [
		{ href: '/', label: 'Projects' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' },
	],
} as const;

export const homeFilters = [
	{ id: 'all', label: 'All' },
	{ id: 'aix', label: 'AIX' },
	{ id: 'art', label: 'Art' },
	{ id: 'brand-design', label: 'Brand design' },
	{ id: 'design-system', label: 'Design System' },
	{ id: 'mentorship', label: 'Mentorship' },
	{ id: 'ux-strategy', label: 'UX Strategy' },
] as const;

export const categoryToFilterId: Record<string, string> = {
	AIX: 'aix',
	Art: 'art',
	'Brand design': 'brand-design',
	'Design System': 'design-system',
	Mentorship: 'mentorship',
	'UX Strategy': 'ux-strategy',
};

export const blogFilterTags = [
	'Design thinking',
	'Thought leadership',
	'UX design',
	'AI',
] as const;

export type BlogFilterTag = (typeof blogFilterTags)[number];

export const blogFilters = [
	{ id: 'all', label: 'All Posts' },
	{ id: 'design-thinking', label: 'Design thinking' },
	{ id: 'thought-leadership', label: 'Thought leadership' },
	{ id: 'ux-design', label: 'UX design' },
	{ id: 'ai', label: 'AI' },
] as const;

export const blogTagToFilterId: Record<BlogFilterTag, string> = {
	'Design thinking': 'design-thinking',
	'Thought leadership': 'thought-leadership',
	'UX design': 'ux-design',
	AI: 'ai',
};
