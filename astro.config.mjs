import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wiki.veloxos.org',
	integrations: [
		starlight({
			title: 'VeloxOS Documentation',
			defaultLocale: 'en', // Erwartet Inhalte in /en/
			locales: {
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			favicon: '/favicon.svg',
			logo: {
				src: './src/assets/logo.png',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'en/guides' },
				},
			],
		}),
	],
});
