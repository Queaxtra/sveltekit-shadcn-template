import { writable } from "svelte/store";
import { browser } from "$app/environment";

type Theme = "light" | "dark";

const applyThemeToDOM = (newTheme: Theme): void => {
	const htmlElement = document.documentElement;
	const isDarkTheme = newTheme === "dark";

	if (isDarkTheme) {
		htmlElement.classList.add("dark");
	}

	if (!isDarkTheme) {
		htmlElement.classList.remove("dark");
	}
};

export const getTheme = (): Theme => {
	if (browser) {
		const savedTheme = localStorage.getItem("theme");

		if (savedTheme === "light" || savedTheme === "dark") {
			return savedTheme as Theme;
		}
	}

	return "light";
};

export const theme = writable<Theme>(getTheme());

export const setTheme = (newTheme: Theme): void => {
	try {
		theme.set(newTheme);

		if (browser) {
			localStorage.setItem("theme", newTheme);
			applyThemeToDOM(newTheme);
		}
	} catch (error) {
		console.error("Failed to set theme:", error);
	}
};

export const toggleTheme = (): void => {
	if (browser) {
		let currentTheme: Theme = "light";
		const unsubscribe = theme.subscribe(value => {
			currentTheme = value;
		});

		unsubscribe();

		const newTheme: Theme = currentTheme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}
};
