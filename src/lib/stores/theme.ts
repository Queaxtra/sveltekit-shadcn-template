import { get, writable } from "svelte/store";
import { browser } from "$app/environment";

export type Theme = "light" | "dark";

const applyThemeToDOM = (newTheme: Theme): void => {
	document.documentElement.classList.toggle("dark", newTheme === "dark");
};

export const getTheme = (): Theme => {
	if (browser) {
		const savedTheme = localStorage.getItem("theme");

		if (savedTheme === "light" || savedTheme === "dark") {
			return savedTheme;
		}
	}

	return "light";
};

export const theme = writable<Theme>(getTheme());

if (browser) {
	theme.subscribe((value) => {
		applyThemeToDOM(value);
	});
}

export const setTheme = (newTheme: Theme): void => {
	try {
		theme.set(newTheme);

		if (browser) {
			localStorage.setItem("theme", newTheme);
		}
	} catch (error) {
		console.error("Failed to set theme:", error);
	}
};

export const toggleTheme = (): void => {
	setTheme(get(theme) === "light" ? "dark" : "light");
};
