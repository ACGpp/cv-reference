
// @ts-nocheck
import locale_C_58_C_58_Users_15270_Desktop_cv_reference_locales_en_json from "../locales/en.json";
import locale_C_58_C_58_Users_15270_Desktop_cv_reference_locales_zh_json from "../locales/zh.json";


export const localeCodes =  [
  "en",
  "zh"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en.json", load: () => Promise.resolve(locale_C_58_C_58_Users_15270_Desktop_cv_reference_locales_en_json), cache: true }],
  "zh": [{ key: "../locales/zh.json", load: () => Promise.resolve(locale_C_58_C_58_Users_15270_Desktop_cv_reference_locales_zh_json), cache: true }]
}

export const vueI18nConfigs = [
  () => import("../locales/i18n.config.ts?hash=91504c8a&config=1" /* webpackChunkName: "__locales_i18n_config_ts_91504c8a" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "./locales/i18n.config.ts",
  "locales": [
    {
      "code": "en",
      "name": "English",
      "files": [
        "C:/Users/15270/Desktop/cv-reference/locales/en.json"
      ]
    },
    {
      "code": "zh",
      "name": "中文",
      "files": [
        "C:/Users/15270/Desktop/cv-reference/locales/zh.json"
      ]
    }
  ],
  "defaultLocale": "zh",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": false,
  "langDir": "locales",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "name": "English",
    "files": [
      {
        "path": "C:/Users/15270/Desktop/cv-reference/locales/en.json"
      }
    ]
  },
  {
    "code": "zh",
    "name": "中文",
    "files": [
      {
        "path": "C:/Users/15270/Desktop/cv-reference/locales/zh.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
