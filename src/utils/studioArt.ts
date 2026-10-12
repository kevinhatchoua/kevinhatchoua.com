import type { StudioFilterId } from './site';

/** Map art tags and slug to Studio filter chip ids (a piece may match several). */
export function studioFilterIdsForArt(tags: string[], id: string): StudioFilterId[] {
	const ids = new Set<StudioFilterId>();
	const lower = tags.map((tag) => tag.toLowerCase());

	if (lower.some((tag) => ['doodle', 'drawing', 'ink', 'portrait'].includes(tag))) {
		ids.add('doodles');
	}
	if (lower.includes('illustration') || id.startsWith('illustration-2014-')) {
		ids.add('illustration');
	}
	if (lower.some((tag) => ['poster', 'print', 'travel', 'typography', 'social'].includes(tag))) {
		ids.add('posters');
	}
	if (lower.some((tag) => ['animation', 'storyboard'].includes(tag))) {
		ids.add('motion');
	}

	if (ids.size === 0) {
		ids.add('illustration');
	}

	return [...ids];
}
