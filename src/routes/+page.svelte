<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { setLanguage } from "$lib/stores/language";
  import type { SupportedLanguage } from "$lib/utils/languages";
  import { theme, toggleTheme } from "$lib/stores/theme";
  import { _ } from "svelte-i18n";

  function changeLanguage(language: SupportedLanguage) {
    setLanguage(language);
  }
</script>

<h1>{$_("templateText")}</h1>
<p>{$_("templateDescription")}</p>

<Button href="https://github.com/queaxtra/sveltekit-shadcn-template">Github</Button>
<Button onclick={() => changeLanguage('tr')}>{$_("buttons.turkish")}</Button>
<Button onclick={() => changeLanguage('en')}>{$_("buttons.english")}</Button>
<Button onclick={toggleTheme}>{$theme === "light" ? "Dark" : "Light"}</Button>
