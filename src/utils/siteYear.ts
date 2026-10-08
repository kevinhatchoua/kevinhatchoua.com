import { getCollection } from 'astro:content';

/** Copyright year: current calendar year or latest published content year, whichever is newer. */
export async function getSiteDisplayYear(): Promise<number> {
	const calendarYear = new Date().getFullYear();
	let latest = calendarYear;

	const [blogPosts, workItems] = await Promise.all([
		getCollection('blog', ({ data }) => !data.draft),
		getCollection('work', ({ data }) => !data.draft),
	]);

	for (const post of blogPosts) {
		const date = post.data.updatedDate ?? post.data.pubDate;
		latest = Math.max(latest, date.getFullYear());
	}

	for (const item of workItems) {
		latest = Math.max(latest, item.data.year);
	}

	return latest;
}
