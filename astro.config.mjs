// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiki.veloxos.org',
	integrations: [
		starlight({
			title: 'VeloxOS Dokumentation',
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
					label: 'Referenz',
				        autogenerate: { directory: 'reference' },
				},
			],
			// Optional: "Seite bearbeiten" Link (GitHub Integration)
			editLink: {
				baseUrl: 'https://github.com/hrskully/veloxos-wiki/edit/main/',
			},
		}),
	],
});
