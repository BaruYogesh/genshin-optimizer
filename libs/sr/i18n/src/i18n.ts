import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import fsBackend from 'i18next-fs-backend'
import httpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

// Probably a way to auto-populate this.
export const languageCodeList = [
  'chs',
  'cht',
  'de',
  'en',
  'es',
  'fr',
  'id',
  'it',
  'ja',
  'ko',
  'pt',
  'ru',
  'th',
  'tr',
  'vi',
]

type I18nType = 'react' | 'node'
export function loadI18n(i18nType: I18nType) {
  const Backend: any = i18nType === 'react' ? httpBackend : fsBackend
  const loadPathPrefix = i18nType === 'react' ? '.' : __dirname
  /**
   * @see: https://www.i18next.com/translation-function/essentials
   * @see: https://react.i18next.com/latest/using-with-hooks
   */
  i18n
    // load translation using http ->
    // see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // Configure localization.
    .init({
      // debug: true,
      // Use English strings by default, if the current language does not include
      // the specified string.
      fallbackLng: 'en',
      // fallbackLng: 'dev', // Switch to this to force the fallback value on missing strings.

      // List all translation namespaces.
      ns: ['languages', 'ui'],
      // Specify the default namespace.
      defaultNS: 'ui',

      // Only use the language code, skipping the region code.
      // For example, en-US becomes simply en.
      load: 'languageOnly',

      returnNull: false,

      backend: {
        // Path to load localization data from.
        loadPath: `${loadPathPrefix}/assets/locales/{{lng}}/{{ns}}.json`,
      },
      interpolation: {
        escapeValue: false, //react does interlopation already
      },
    })
}

export { i18n }
