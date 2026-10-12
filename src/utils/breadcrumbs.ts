export interface BreadcrumbItem {
	label: string;
	href?: string;
}

export const projectsCrumb: BreadcrumbItem = { label: 'Projects', href: '/' };

export function crumb(label: string, href?: string): BreadcrumbItem {
	return href ? { label, href } : { label };
}
