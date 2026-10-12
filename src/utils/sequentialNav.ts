export interface SequentialNeighbor {
	slug: string;
	title: string;
	href: string;
}

export interface SequentialNeighbors {
	prev: SequentialNeighbor | null;
	next: SequentialNeighbor | null;
}

export interface SequentialNeighborsOptions {
	/** When true, first/last items link to each other (studio art). */
	loop?: boolean;
}

export function sequentialNeighbors<T extends { id: string; data: { title: string } }>(
	entries: T[],
	currentSlug: string,
	basePath: 'blog' | 'work',
	options: SequentialNeighborsOptions = {},
): SequentialNeighbors {
	const { loop = false } = options;
	const index = entries.findIndex((entry) => entry.id === currentSlug);
	if (index === -1 || entries.length === 0) {
		return { prev: null, next: null };
	}

	if (entries.length === 1) {
		return { prev: null, next: null };
	}

	const toNeighbor = (entry: T): SequentialNeighbor => ({
		slug: entry.id,
		title: entry.data.title,
		href: `/${basePath}/${entry.id}`,
	});

	const prevIndex =
		index < entries.length - 1 ? index + 1 : loop ? 0 : -1;
	const nextIndex = index > 0 ? index - 1 : loop ? entries.length - 1 : -1;

	return {
		prev: prevIndex >= 0 ? toNeighbor(entries[prevIndex]) : null,
		next: nextIndex >= 0 ? toNeighbor(entries[nextIndex]) : null,
	};
}
