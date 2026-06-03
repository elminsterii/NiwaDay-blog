// 介面字串與語言設定（中英對照）

export const languages = {
	zh: '中',
	en: 'EN',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'zh';

// 每個語言的站名與描述
export const siteMeta: Record<Lang, { title: string; description: string }> = {
	zh: {
		title: 'Niwa Day 開發日誌',
		description: 'Niwa Day 的開發日誌——進度、取捨與一路上的想法。',
	},
	en: {
		title: 'Niwa Day Dev Log',
		description: 'The Niwa Day dev log — progress, trade-offs, and notes along the way.',
	},
};

// 介面字串
export const ui = {
	zh: {
		'nav.home': '日誌',
		'nav.about': '關於',
		'post.publishedOn': '發表於',
		'post.updatedOn': '更新於',
		'post.back': '← 回到日誌',
		'footer.rights': '版權所有',
		'home.intro': '記錄 Niwa Day 一路長出來的過程。',
	},
	en: {
		'nav.home': 'Log',
		'nav.about': 'About',
		'post.publishedOn': 'Published on',
		'post.updatedOn': 'Updated on',
		'post.back': '← Back to the log',
		'footer.rights': 'All rights reserved',
		'home.intro': 'Notes on how Niwa Day grows over time.',
	},
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

// 從 Astro.currentLocale 或網址取得語言，回退到預設
export function getLang(locale: string | undefined): Lang {
	if (locale && locale in ui) return locale as Lang;
	return defaultLang;
}

// 取得翻譯函式
export function useTranslations(lang: Lang) {
	return function t(key: UIKey): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}
