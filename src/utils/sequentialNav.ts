export interface SequentialNeighbor {
	slug: string;
	title: string;
	href: string;
}

export interface SequentialNeighbors {
	prev: SequentialNeighbor | null;
	next: SequentialNeighbor | null;
}

export function sequentialNeighbors<T extends { id: string; data: { title: string } }>(
	entries: T[],
	currentSlug: string,
	basePath: 'blog' | 'work',
): SequentialNeighbors {
	const index = entries.findIndex((entry) => entry.id === currentSlug);
	if (index === -1) {
		return { prev: null, next: null };
	}

	const toNeighbor = (entry: T): SequentialNeighbor => ({
		slug: entry.id,
		title: entry.data.title,
		href: `/${basePath}/${entry.id}`,
	});

	return {
		prev: index < entries.length - 1 ? toNeighbor(entries[index + 1]) : null,
		next: index > 0 ? toNeighbor(entries[index - 1]) : null,
	};
}
