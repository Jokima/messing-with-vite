import  i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translation as portuguese } from "./i18n.pt_BR";
import { translation as english } from "./i18n.en_US";

const EncapsulatedLocalStorage = {
  get: (key: string) => localStorage.getItem(key),
  set: (key: string, value: string) => localStorage.setItem(key, value),
}

const resources = {
  pt: {
    translation: portuguese
  },
  en: {
    translation: english
  }
}

export const getLocale = (locale: string) => {
  switch(locale) {
    case 'pt':
      return 'pt-BR';
    case 'en':
      return 'en-US';
    default:
      return 'en-US';
  }
}

const locale = EncapsulatedLocalStorage.get('lang');

i18n.use(initReactI18next).init({
  resources,
  lng: locale || 'en-US',
  fallbackLng: getLocale(locale || navigator.language),
  interpolation: {
    escapeValue: false,
  }
});

export default i18n