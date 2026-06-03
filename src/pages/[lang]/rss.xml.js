import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteMeta } from '../../i18n/ui';

export function getStaticPaths() {
	return [{ params: { lang: 'zh' } }, { params: { lang: 'en' } }];
}

export async function GET(context) {
	const { lang } = context.params;
	const posts = (await getCollection('blog'))
		.filter((post) => post.id.startsWith(`${lang}/`))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: siteMeta[lang].title,
		description: siteMeta[lang].description,
		site: context.site,
		items: posts.map((post) => {
			const slug = post.id.replace(/^[a-z]{2}\//, '');
			return {
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				link: `/blog/${lang}/${slug}/`,
			};
		}),
	});
}
