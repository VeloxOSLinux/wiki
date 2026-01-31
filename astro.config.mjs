import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wiki.veloxos.org/en',
	integrations: [
		starlight({
			title: 'VeloxOS Documentation',
			defaultLocale: 'root',
			root: {
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
					autogenerate: { directory: 'guides' },
				},
			],
		}),
	],
});
