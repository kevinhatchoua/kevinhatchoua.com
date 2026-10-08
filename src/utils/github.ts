export interface GitHubContributionItem {
	title: string;
	href: string;
	occurredAt: Date;
	kind: string;
}

const GITHUB_API = 'https://api.github.com';
const DEFAULT_USERNAME = 'kevinhatchoua';
const MAX_ITEMS = 5;
const EVENTS_PER_PAGE = 30;

const SKIPPED_EVENT_TYPES = new Set([
	'WatchEvent',
	'MemberEvent',
	'PublicEvent',
	'GollumEvent',
	'FollowEvent',
]);

type GitHubEvent = {
	id: string;
	type: string;
	created_at: string;
	repo: { name: string };
	payload: Record<string, unknown>;
};

function githubUsername(): string {
	const fromEnv = import.meta.env.GITHUB_USERNAME;
	if (typeof fromEnv === 'string' && fromEnv.trim()) return fromEnv.trim();
	return DEFAULT_USERNAME;
}

function githubHeaders(): HeadersInit {
	const headers: HeadersInit = {
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28',
		'User-Agent': 'kevinhatchou.com',
	};
	const token = import.meta.env.GITHUB_TOKEN;
	if (typeof token === 'string' && token.trim()) {
		headers.Authorization = `Bearer ${token.trim()}`;
	}
	return headers;
}

function repoUrl(repoName: string): string {
	return `https://github.com/${repoName}`;
}

function eventToContribution(event: GitHubEvent): GitHubContributionItem | null {
	const repoName = event.repo?.name;
	if (!repoName) return null;

	const occurredAt = new Date(event.created_at);
	if (Number.isNaN(occurredAt.getTime())) return null;

	switch (event.type) {
		case 'PushEvent': {
			const payload = event.payload;
			const commits = Array.isArray(payload.commits) ? payload.commits : [];
			const first = commits[0] as { message?: string } | undefined;
			const message = first?.message?.split('\n')[0]?.trim();
			const title =
				message && message.length > 0
					? message.length > 72
						? `${message.slice(0, 69)}…`
						: message
					: `Pushed to ${repoName}`;
			return {
				title,
				href: repoUrl(repoName),
				occurredAt,
				kind: 'Push',
			};
		}
		case 'PullRequestEvent': {
			const pr = event.payload.pull_request as
				| { title?: string; html_url?: string }
				| undefined;
			if (!pr?.html_url) return null;
			const action = String(event.payload.action ?? 'updated');
			const actionLabel =
				action === 'opened'
					? 'Opened pull request'
					: action === 'closed'
						? 'Closed pull request'
						: `Pull request ${action}`;
			return {
				title: pr.title ? `${actionLabel}: ${pr.title}` : actionLabel,
				href: pr.html_url,
				occurredAt,
				kind: 'Pull request',
			};
		}
		case 'IssuesEvent': {
			const issue = event.payload.issue as { title?: string; html_url?: string } | undefined;
			if (!issue?.html_url) return null;
			const action = String(event.payload.action ?? 'updated');
			const actionLabel =
				action === 'opened' ? 'Opened issue' : action === 'closed' ? 'Closed issue' : `Issue ${action}`;
			return {
				title: issue.title ? `${actionLabel}: ${issue.title}` : actionLabel,
				href: issue.html_url,
				occurredAt,
				kind: 'Issue',
			};
		}
		case 'CreateEvent': {
			const refType = String(event.payload.ref_type ?? '');
			if (refType === 'repository') {
				return {
					title: `Created repository ${repoName}`,
					href: repoUrl(repoName),
					occurredAt,
					kind: 'Repository',
				};
			}
			if (refType === 'branch' || refType === 'tag') {
				const ref = String(event.payload.ref ?? '');
				return {
					title: ref ? `Created ${refType} ${ref} in ${repoName}` : `Created ${refType} in ${repoName}`,
					href: repoUrl(repoName),
					occurredAt,
					kind: refType === 'tag' ? 'Tag' : 'Branch',
				};
			}
			return null;
		}
		case 'ForkEvent': {
			return {
				title: `Forked ${repoName}`,
				href: repoUrl(repoName),
				occurredAt,
				kind: 'Fork',
			};
		}
		case 'ReleaseEvent': {
			const release = event.payload.release as { name?: string; html_url?: string } | undefined;
			if (!release?.html_url) return null;
			return {
				title: release.name ? `Released ${release.name}` : `Published a release in ${repoName}`,
				href: release.html_url,
				occurredAt,
				kind: 'Release',
			};
		}
		case 'IssueCommentEvent':
		case 'CommitCommentEvent': {
			const comment = event.payload.comment as { html_url?: string } | undefined;
			if (!comment?.html_url) return null;
			return {
				title: event.type === 'CommitCommentEvent' ? `Commented on a commit in ${repoName}` : `Commented on an issue in ${repoName}`,
				href: comment.html_url,
				occurredAt,
				kind: 'Comment',
			};
		}
		default:
			return null;
	}
}

export async function getLatestContributions(): Promise<GitHubContributionItem[]> {
	const username = githubUsername();

	try {
		const response = await fetch(
			`${GITHUB_API}/users/${encodeURIComponent(username)}/events/public?per_page=${EVENTS_PER_PAGE}`,
			{ headers: githubHeaders() },
		);

		if (!response.ok) {
			console.warn(`GitHub events request failed (${response.status}) for ${username}`);
			return [];
		}

		const events = (await response.json()) as GitHubEvent[];
		if (!Array.isArray(events)) return [];

		const items: GitHubContributionItem[] = [];
		const seen = new Set<string>();

		for (const event of events) {
			if (SKIPPED_EVENT_TYPES.has(event.type)) continue;

			const item = eventToContribution(event);
			if (!item) continue;

			const key = `${item.href}|${item.title}`;
			if (seen.has(key)) continue;
			seen.add(key);

			items.push(item);
			if (items.length >= MAX_ITEMS) break;
		}

		return items;
	} catch (error) {
		console.warn('Failed to load GitHub contributions', error);
		return [];
	}
}
