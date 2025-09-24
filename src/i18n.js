/**
 * summary: i18n setup. Default locale = 'en' as required.
 * author: <Your Name>
 */
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, es }
})