// Build base-aware internal URLs so links work under the `/blog` base path.
// import.meta.env.BASE_URL is e.g. "/blog/"; we normalise to avoid double slashes.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = ''): string {
	const clean = path.replace(/^\//, '');
	return clean ? `${base}/${clean}` : `${base}/`;
}

// 語言感知連結：localizedUrl('zh', 'about') → /blog/zh/about/
export function localizedUrl(lang: string, path = ''): string {
	const clean = path.replace(/^\//, '').replace(/\/$/, '');
	return clean ? `${base}/${lang}/${clean}/` : `${base}/${lang}/`;
}
