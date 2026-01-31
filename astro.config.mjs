// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.veloxos.org',
	integrations: [
		starlight({
			title: 'VeloxOS Documentation',
			defaultLocale: 'en', // UI auf Englisch setzen
			locales: {
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			favicon: '/favicon.svg',
			logo: {
				// Nutzt das lokal gespeicherte Logo
				src: './src/assets/logo.png',
			},
			// Deine angepassten Farben (Light/Dark Support)
			customCss: [
				'./src/styles/custom.css',
			],
			// Das korrekte Format für die neueste Starlight Version
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
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
