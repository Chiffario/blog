import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { callouts } from '@mdsvex/plugin-callouts';
import { anchors } from '@mdsvex/plugin-anchors';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { parse } from 'toml';

export default defineConfig({
	plugins: [
		mdsvex({
			extensions: ['.svx', '.md'],
			frontmatter: {
				parse: (raw) => parse(raw)
			},
      smart_punctuation: true,
      heading_ids: true,
			plugins: [anchors({ position: "wrap", attrs: { class: "anchor"}}), callouts()],
		}),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
				// See: https://github.com/pngwn/MDsveX/issues/649
				warningFilter: (warning) =>
					!warning.code?.startsWith('script_context_deprecated')
			},
			adapter: adapter()
		})
	]
});
