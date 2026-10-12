export const OPENSHIFT_PROTOTYPE_BASE_URL = 'https://openshift-platform-prototype.vercel.app';

export type OpenShiftPrototypeAreaRow = {
	name: string;
	description: string;
	/** Path on the hosted prototype (no origin). */
	prototypePath: string;
	/** Indented sub-area under a parent (e.g. Ecosystem). */
	isSubArea?: boolean;
	/** Work collection id for an area deep-dive case study, when an active epic exists. */
	caseStudySlug?: string;
};

export const openshiftPrototypeAreas: OpenShiftPrototypeAreaRow[] = [
	{
		name: 'Overview / Dashboard',
		description:
			'Cluster-at-a-glance health, capacity, and entry points into day-two operations without jumping straight into YAML.',
		prototypePath: '/',
	},
	{
		name: 'Ecosystem',
		description:
			'Discover, install, and lifecycle operators and platform add-ons that extend what the cluster can run.',
		prototypePath: '/ecosystem/software-catalog',
		caseStudySlug: 'openshift-console-ecosystem-olmv1',
	},
	{
		name: 'Software Catalog',
		description:
			'Browse curated and community operators, compare capabilities, and walk install and update flows before they ship in product.',
		prototypePath: '/ecosystem/software-catalog',
		isSubArea: true,
		caseStudySlug: 'openshift-console-ecosystem-olmv1',
	},
	{
		name: 'Installed Operators',
		description:
			'Inventory what is on the cluster, inspect subscriptions, and rehearse upgrade and troubleshooting patterns.',
		prototypePath: '/ecosystem/installed-operators',
		isSubArea: true,
		caseStudySlug: 'openshift-console-ecosystem-olmv1',
	},
	{
		name: 'Workloads',
		description:
			'List and drill into pods, deployments, and related objects with patterns for dense tables, details, and topology.',
		prototypePath: '/workloads',
	},
	{
		name: 'GitOps',
		description:
			'Argo CD and progressive delivery surfaces, including rollouts and experiments, aligned with how teams ship on OpenShift.',
		prototypePath: '/gitops/overview',
		caseStudySlug: 'openshift-console-gitops',
	},
	{
		name: 'Virtualization',
		description:
			'KubeVirt-style VM management: catalogs, instance types, migration, and settings that mirror operator workflows.',
		prototypePath: '/virtualization/virtualmachines',
	},
	{
		name: 'Networking',
		description:
			'Services, routes, policies, and topology views that help admins see traffic and configuration relationships.',
		prototypePath: '/networking/topology',
		caseStudySlug: 'openshift-console-networking',
	},
	{
		name: 'Observe',
		description:
			'Monitoring and insight entry points that connect metrics, alerts, and activity without leaving the console frame.',
		prototypePath: '/observe',
	},
	{
		name: 'Agentic Runs',
		description:
			'Prototypes for agent-assisted cluster operations: run history, status, and detail for guided automation.',
		prototypePath: '/agentic-runs',
		caseStudySlug: 'openshift-console-cluster-updates',
	},
	{
		name: 'Cluster Management',
		description:
			'Cluster settings, updates, namespaces, and quotas: the administration layer for platform owners.',
		prototypePath: '/administration/cluster-settings',
		caseStudySlug: 'openshift-console-cluster-updates',
	},
];

export function openshiftPrototypeUrl(path: string): string {
	const base = OPENSHIFT_PROTOTYPE_BASE_URL.replace(/\/$/, '');
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${base}${normalized}`;
}
