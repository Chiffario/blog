import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { parse } from 'toml';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
				// See: https://github.com/pngwn/MDsveX/issues/649
				warningFilter: (warning) =>
					!warning.code?.startsWith('script_context_deprecated')
			},
			adapter: adapter(),
      preprocess: [mdsvex({
        extensions: ['.svx', '.md'], frontmatter: {
          marker: "-",
          type: "toml",
          parse(frontmatter, messages) {
            try {
              return parse(frontmatter);
            } catch (e) {
              console.log("Failed to parse toml", e)
            }
          }
			}})],
			extensions: ['.svelte', '.svx', '.md']
		})
	]
});
