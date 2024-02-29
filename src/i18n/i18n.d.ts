import { translation } from "./i18n.en_US";
import 'i18next';

export type Translation = typeof translation;

interface I18nNamespaces {
  translation: Translation;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation',
    resources: I18nNamespaces
  }
}