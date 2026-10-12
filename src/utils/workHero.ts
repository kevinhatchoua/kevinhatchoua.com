import { redHatPlaceholderHero } from './site';

export function resolveWorkHeroImage(heroImage?: string): string {
	return heroImage ?? redHatPlaceholderHero;
}

export function isLogoStyleHero(path: string): boolean {
	return path.endsWith('.svg') || path.includes('-logo.') || path === redHatPlaceholderHero;
}
