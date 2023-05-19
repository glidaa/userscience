// userscience/src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';

import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next
    .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
    },
    lng: 'en-US',
    fallbackLng: 'en-US',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;