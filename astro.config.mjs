import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://wiki.veloxos.org',
	integrations: [
		starlight({
			title: 'VeloxOS',
			defaultLocale: 'root',
			customCss: [
                './src/styles/custom.css',
            ],
			locales: {
				root: { label: 'English', lang: 'en' },
				de: { label: 'German', lang: 'de' },
			},
			favicon: '/favicon.svg',
			lastUpdated: true,
			logo: { src: './src/assets/logo.png' },
			sidebar: [
  {
    label: 'Getting Started',
    items: [
      { label: 'Wiki Navigation Guide', link: '/basics/navigation-guide/' },
      { label: 'Roadmap 2026/2027', link: '/basics/roadmap/' },
    ],
  },
  {
    label: 'Installation & Daily Use',
    items: [
      { label: 'VeloxOS Installation', link: '/guides/installation/' },
      { label: 'First Steps & Package Management', link: '/guides/first-steps/' },
      { label: 'Updates & Configuration Management', link: '/guides/updates-repository/' },
    ],
  },
  {
    label: 'Development & Performance',
    items: [
      { label: 'Performance & Tuning', link: '/references/performance-kernel/' },
      { label: 'Building VeloxOS from Source', link: '/guides/build/' },
    ],
  },
],
			editLink: {
				baseUrl: 'https://github.com/VeloxOSLinux/wiki/',
			},
			social: [
             {
               icon: 'github',
               label: 'GitHub',
               href: 'https://github.com/VeloxOSLinux',
            },
            {
              icon: 'x.com',
              label: 'X',
              href: 'https://x.com/veloxoslinux',
           },
           {
              icon: 'discord',
              label: 'Discord',
              href: 'https://discord.gg/pgHSK8NGxG',
           },
		   ],
		}),
	],
});
