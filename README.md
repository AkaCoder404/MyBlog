# MyBlog

This is my new blog page.



## Build

Manual Translation: https://docusaurus.io/docs/i18n/tutorial
```bash
# Translations located at /i18n/ 
npm run write-translations -- --locale zh
# Translate Docs
cp -r docs/** i18n/zh/docusaurus-plugin-content-docs/current
# Translate Blog Post
cp -r blog/** i18n/fr/docusaurus-plugin-content-blog
# Translate Pages
cp -r src/pages/**.md i18n/zh/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/zh/docusaurus-plugin-content-pages
# Run locale
npm run start -- --locale zh
# Build for a locale
npm run build -- --locale zh
```