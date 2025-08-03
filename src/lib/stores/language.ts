import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { locale } from "svelte-i18n";
import { languages } from "$lib/utils/languages";

type SupportedLanguage = typeof languages[number];

export const getLanguage = (): SupportedLanguage => {
  if (browser) {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (languages as readonly string[]).includes(savedLanguage)) {
      return savedLanguage as SupportedLanguage;
    }
  }
  return languages[0];
};

export const language = writable<SupportedLanguage>(getLanguage());

export function setLanguage(lang: SupportedLanguage) {
  language.set(lang);
  if (browser) {
    localStorage.setItem("language", lang);
  }
}

export const deleteLanguage = () => {  if (browser) {
    localStorage.removeItem("language");
  }
};

if (browser) {
  language.subscribe((value) => {
    locale.set(value);
  });
}
