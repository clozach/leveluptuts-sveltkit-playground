import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import sveltePreprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

    preprocess: [sveltePreprocess(), mdsvex(mdsvexConfig)]
};

export default config;
