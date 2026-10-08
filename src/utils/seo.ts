export type SeoProps = {
	title: string;
	description?: string;
	path?: string;
};

const siteName = 'Kevin Hatchoua';

export function pageTitle(title: string): string {
	if (title === 'Home') return siteName;
	return `${title} · ${siteName}`;
}

export function canonicalUrl(site: string, path = '/'): string {
	const base = site.replace(/\/$/, '');
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${base}${normalized === '/' ? '' : normalized}`;
}
