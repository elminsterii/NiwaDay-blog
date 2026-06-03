// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://niwaday.com',
	base: '/blog',
	i18n: {
		locales: ['zh', 'en'],
		defaultLocale: 'zh',
	},
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-inter',
			weights: [400, 500, 600, 700],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Noto Sans TC',
			cssVariable: '--font-noto',
			weights: [400, 500, 700],
			styles: ['normal'],
			fallbacks: ['sans-serif'],
		},
	],
});
