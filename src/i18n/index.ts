import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import frCommon from './locales/fr/common.json';
import frNavigation from './locales/fr/navigation.json';
import frHero from './locales/fr/hero.json';
import frAbout from './locales/fr/about.json';
import frFeatures from './locales/fr/features.json';
import frContact from './locales/fr/contact.json';
import frSpaces from './locales/fr/spaces.json';

import enCommon from './locales/en/common.json';
import enNavigation from './locales/en/navigation.json';
import enHero from './locales/en/hero.json';
import enAbout from './locales/en/about.json';
import enFeatures from './locales/en/features.json';
import enContact from './locales/en/contact.json';
import enSpaces from './locales/en/spaces.json';

const resources = {
  fr: {
    common: frCommon,
    navigation: frNavigation,
    hero: frHero,
    about: frAbout,
    features: frFeatures,
    contact: frContact,
    spaces: frSpaces,
  },
  en: {
    common: enCommon,
    navigation: enNavigation,
    hero: enHero,
    about: enAbout,
    features: enFeatures,
    contact: enContact,
    spaces: enSpaces,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    defaultNS: 'common',
    lng: 'fr', // Set French as default
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;