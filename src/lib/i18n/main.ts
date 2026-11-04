import { addMessages, init } from 'svelte-i18n';
import { languages } from '$lib/utils/languages';

import en from '../../locales/en.json';
import tr from '../../locales/tr.json';

addMessages('en', en);
addMessages('tr', tr);

init({
  fallbackLocale: languages[0],
  initialLocale: languages[0]
});
