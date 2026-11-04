import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { locale } from "svelte-i18n";
import { languages, type SupportedLanguage } from "$lib/utils/languages";

export const getLanguage = (): SupportedLanguage => {
	if (browser) {
		const savedLanguage = localStorage.getItem("language");
		if (savedLanguage && (languages as readonly string[]).includes(savedLanguage)) {
			return savedLanguage as SupportedLanguage;
		}
	}
	return languages[0];
};

// Always start from the fallback so the first client render matches SSR;
// the saved language is applied after mount via initLanguage().
export const language = writable<SupportedLanguage>(languages[0]);

export function setLanguage(lang: SupportedLanguage) {
	language.set(lang);
	if (browser) {
		localStorage.setItem("language", lang);
	}
}

export const initLanguage = (): void => {
	setLanguage(getLanguage());
};

export const deleteLanguage = () => {
	if (browser) {
		localStorage.removeItem("language");
	}
};

if (browser) {
	language.subscribe((value) => {
		locale.set(value);
		document.documentElement.lang = value;
	});
}
