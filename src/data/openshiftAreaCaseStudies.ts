/** Portfolio deep-dives for OpenShift console areas with in-flight UX work. */
export type OpenshiftAreaCaseStudyMeta = {
	slug: string;
	title: string;
	summary: string;
	/** Console area labels from the prototype areas table. */
	areas: string[];
};

export const openshiftAreaCaseStudies: OpenshiftAreaCaseStudyMeta[] = [
	{
		slug: 'openshift-console-ecosystem-olmv1',
		title: 'Ecosystem: OLM Classic and Next-Gen coexistence',
		summary:
			'Separated catalog and Installed Operators experiences with a Classic / Next-Gen toggle, compatibility filtering, and GA-ready lifecycle flows.',
		areas: ['Ecosystem', 'Software Catalog', 'Installed Operators'],
	},
	{
		slug: 'openshift-console-gitops',
		title: 'GitOps console plugin',
		summary:
			'Progressive delivery surfaces, GitOps-protected edit patterns, and Lightspeed-backed remediation entry points for unhealthy Applications.',
		areas: ['GitOps'],
	},
	{
		slug: 'openshift-console-networking',
		title: 'Networking console plugin',
		summary:
			'NetworkPolicy and MultiNetworkPolicy parity, configuration overview, and topology-oriented troubleshooting patterns.',
		areas: ['Networking'],
	},
	{
		slug: 'openshift-console-cluster-updates',
		title: 'Cluster updates and agentic execution',
		summary:
			'Update-agent Phase 2 interaction models, skip-level EUS upgrade touchpoints, and alignment with shared Agentic Runs patterns.',
		areas: ['Cluster Management', 'Agentic Runs'],
	},
	{
		slug: 'openshift-console-global-search',
		title: 'Global search experience',
		summary:
			'Post-5.0 design program for predictable defaults, query composition, and findability at scale on the Administration Search page.',
		areas: ['Administration search'],
	},
];

export function caseStudyBySlug(slug: string): OpenshiftAreaCaseStudyMeta | undefined {
	return openshiftAreaCaseStudies.find((item) => item.slug === slug);
}
