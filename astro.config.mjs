import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wiki.veloxos.org',
	integrations: [
		starlight({
			title: 'VeloxOS',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				de: { label: 'German', lang: 'de' },
			},
			favicon: { src: './src/assets/logo.png' },
			logo: { src: './src/assets/logo.png' },
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
                                {
                                        label: 'References',
                                        autogenerate: { directory: 'reference' },
                                },
			],
			editLink: {
				baseUrl: 'https://github.com/VeloxOSLinux/wiki/',
			},
			lastUpdated: true,
		}),
	],
});
