import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wiki.veloxos.org/en',
	integrations: [
		starlight({
			title: 'VeloxOS Documentation',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
                                de: {
                                        label: 'German',
                                        lang: 'de',
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
