<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { waitLocale } from 'svelte-i18n';
	import "$lib/i18n/main";

	onMount(async () => {
		await waitLocale();
	});
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
