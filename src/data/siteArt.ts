/** Curated art for site decor and gallery — links to case studies under /work */

export interface SiteArtPiece {
	id: string;
	src: string;
	alt: string;
	title: string;
	href: string;
	caption?: string;
	/** Short label for collage / gallery kicker */
	kicker?: string;
}

/** Hero collage above the project grid (home) */
export const homeCollagePieces: SiteArtPiece[] = [
	{
		id: 'tanzania',
		src: '/images/work/tanzania-travel-poster.jpg',
		alt: 'Tanzania travel poster illustration with bold flat color',
		title: 'Tanzania travel poster',
		href: '/work/tanzania-travel-poster',
		kicker: 'Color & place',
	},
	{
		id: 'sakura',
		src: '/images/work/windswept-sakura-doodle.jpg',
		alt: 'Ink drawing of windswept cherry blossom branches',
		title: 'Windswept sakura',
		href: '/work/windswept-sakura-doodle',
		kicker: 'Ink & line',
	},
	{
		id: 'public-enemy',
		src: '/images/work/public-enemy-poster.png',
		alt: 'High-contrast protest-style poster study',
		title: 'Public Enemy poster',
		href: '/work/public-enemy-poster',
		kicker: 'Limited palette',
	},
	{
		id: 'octo',
		src: '/images/work/octo-pineapple-doodle.jpg',
		alt: 'Whimsical octopus and pineapple ink doodle',
		title: 'Octo-pineapple',
		href: '/work/octo-pineapple-doodle',
		kicker: 'Play',
	},
];

/** Sidebar ghost + foreground stamp (home, md+) */
export const homeSidebarArt: SiteArtPiece = {
	id: 'coiled-snake',
	src: '/images/work/coiled-snake-doodle.jpg',
	alt: 'Detailed ink drawing of a coiled snake',
	title: 'Coiled snake',
	href: '/work/coiled-snake-doodle',
};

export const homeStampArt: SiteArtPiece = {
	id: 'kobe',
	src: '/images/work/kobe-24-basketball-doodle.png',
	alt: 'Basketball tribute doodle',
	title: 'Kobe 24',
	href: '/work/kobe-24-basketball-doodle',
};

/** Horizontal gallery strip + /studio page */
export const studioGalleryPieces: SiteArtPiece[] = [
	{
		id: 'art-of-flight',
		src: '/images/work/art-of-flight/poster.jpg',
		alt: 'Art of Flight poster with dramatic snowboard imagery',
		title: 'Art of Flight',
		href: '/work/art-of-flight',
		caption: 'Motion and mountain light.',
		kicker: 'Poster',
	},
	{
		id: 'tanzania-gallery',
		src: '/images/work/tanzania-travel-poster.jpg',
		alt: 'Tanzania travel poster',
		title: 'Tanzania travel poster',
		href: '/work/tanzania-travel-poster',
		caption: 'Flat color, big sky.',
		kicker: 'Travel',
	},
	{
		id: 'public-enemy-gallery',
		src: '/images/work/public-enemy-poster.png',
		alt: 'Public Enemy poster study',
		title: 'Public Enemy poster',
		href: '/work/public-enemy-poster',
		caption: 'Stencil energy, few inks.',
		kicker: 'Study',
	},
	{
		id: 'la-parisienne',
		src: '/images/work/la-parisienne.png',
		alt: 'La Parisienne animation still, Paris skyline at dusk',
		title: 'La Parisienne',
		href: '/work/la-parisienne',
		caption: 'Storyboarded motion for Paris.',
		kicker: 'Animation',
	},
	{
		id: 'sakura-gallery',
		src: '/images/work/windswept-sakura-doodle.jpg',
		alt: 'Windswept sakura ink drawing',
		title: 'Windswept sakura',
		href: '/work/windswept-sakura-doodle',
		caption: 'Breath in black ink.',
		kicker: 'Doodle',
	},
	{
		id: 'coiled-snake-gallery',
		src: '/images/work/coiled-snake-doodle.jpg',
		alt: 'Coiled snake ink study',
		title: 'Coiled snake',
		href: '/work/coiled-snake-doodle',
		caption: 'Scale texture drill.',
		kicker: 'Ink',
	},
	{
		id: 'descent-hands',
		src: '/images/work/descent-reaching-hands-doodle.jpg',
		alt: 'Ink drawing of reaching hands',
		title: 'Descent (reaching hands)',
		href: '/work/descent-reaching-hands-doodle',
		caption: 'Figure and gesture.',
		kicker: 'Doodle',
	},
	{
		id: 'octo-gallery',
		src: '/images/work/octo-pineapple-doodle.jpg',
		alt: 'Octo-pineapple doodle',
		title: 'Octo-pineapple',
		href: '/work/octo-pineapple-doodle',
		caption: 'Weird friends welcome.',
		kicker: 'Doodle',
	},
];

