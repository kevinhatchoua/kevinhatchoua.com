import { defineMiddleware } from 'astro:middleware';

/** Applied to every response (static prerender + server routes on Vercel). */
const SECURITY_HEADERS: Readonly<Record<string, string>> = {
	'X-Frame-Options': 'DENY',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'X-DNS-Prefetch-Control': 'off',
};

export const onRequest = defineMiddleware(async (_context, next) => {
	const response = await next();
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		response.headers.set(key, value);
	}
	return response;
});
