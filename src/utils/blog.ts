import type { CollectionEntry } from 'astro:content';

const MARKDOWN_IMAGE = /!\[[^\]]*\]\(([^)]+)\)/;

/** First `![alt](url)` in post body. */
export function firstImageFromMarkdown(body: string): string | undefined {
	const match = body.match(MARKDOWN_IMAGE);
	return match?.[1]?.trim();
}

const BLOG_PLACEHOLDER = '/images/blog/placeholder.svg';

export function resolveBlogThumbnail(
	entry: Pick<CollectionEntry<'blog'>, 'id' | 'data' | 'body'>,
): string {
	const explicit = entry.data.thumbnail;
	if (explicit) return explicit;

	const fromBody = entry.body ? firstImageFromMarkdown(entry.body) : undefined;
	if (fromBody) return fromBody;

	return BLOG_PLACEHOLDER;
}
