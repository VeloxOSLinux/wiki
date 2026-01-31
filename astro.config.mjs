import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wiki.veloxos.org',
	// Das hier leitet die Hauptdomain automatisch weiter:
	redirects: {
		'/': '/en/'
	},
	integrations: [
		starlight({
			title: 'VeloxOS Documentation',
			defaultLocale: 'en',
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
			customCss: ['./src/styles/custom.css'],
			social: [
				{ icon: 'github', href: 'https://github.com/hrskully' }
			],
			sidebar: [
				{
					label: 'Guides',
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
