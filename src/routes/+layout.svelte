<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { waitLocale } from 'svelte-i18n';
	import "$lib/i18n/main";
	import { theme, getTheme } from "$lib/stores/theme";

	const applyThemeClass = (currentTheme: string): void => {
		const htmlElement = document.documentElement;
		const isDarkTheme = currentTheme === "dark";

		if (isDarkTheme) {
			htmlElement.classList.add("dark");
		}

		if (!isDarkTheme) {
			htmlElement.classList.remove("dark");
		}
	};

	onMount(async () => {
		await waitLocale();
		const currentTheme = getTheme();
		applyThemeClass(currentTheme);
	});

	$: if (typeof window !== 'undefined') {
		applyThemeClass($theme);
	}
</script>

<slot></slot>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    :global(body) {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }
</style>
