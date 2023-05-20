import type { I18nConfig } from '@docusaurus/types'

const i18n: I18nConfig = {
    path: './i18n',
    defaultLocale: 'en',
    locales: ['en', 'cn'],
    localeConfigs: {
        en: {
            htmlLang: 'en-US',
        },
        cn: {
            htmlLang: 'cn-ZH',
        },
    },
}

export default i18n
