// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wiki.veloxos.org',
	integrations: [
		starlight({
			title: 'VeloxOS Documentation',
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en', // Dies ist jetzt die "Hauptsprache"
				},
			},
			favicon: '/favicon.svg',
			logo: {
				src: './src/assets/logo.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/hrskully' 
				}
			],
			sidebar: [
				{
					label: 'Guides',
					// WICHTIG: Hier muss 'en/guides' stehen, wenn der Ordner docs/en/guides heißt
					autogenerate: { directory: 'en/guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'en/reference' },
				},
			],
		}),
	],
});
