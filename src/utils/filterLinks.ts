export function homeProjectFilterHref(filterId: string): string {
	if (!filterId || filterId === 'all') return '/';
	return `/?filter=${encodeURIComponent(filterId)}`;
}

export function blogTagFilterHref(filterId: string): string {
	if (!filterId || filterId === 'all') return '/blog';
	return `/blog?filter=${encodeURIComponent(filterId)}`;
}

export function readFilterFromLocation(
	paramName = 'filter',
	validIds?: Set<string>,
): string {
	if (typeof window === 'undefined') return 'all';
	const value = new URLSearchParams(window.location.search).get(paramName);
	if (!value) return 'all';
	if (validIds && !validIds.has(value)) return 'all';
	return value;
}

export function setFilterInLocation(filterId: string, paramName = 'filter') {
	if (typeof window === 'undefined') return;
	const url = new URL(window.location.href);
	if (!filterId || filterId === 'all') {
		url.searchParams.delete(paramName);
	} else {
		url.searchParams.set(paramName, filterId);
	}
	window.history.replaceState({}, '', url);
}
