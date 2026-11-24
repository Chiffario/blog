<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();
	let year = new Date().getFullYear();
</script>

<div class="container center">
	<header class="header">
		<div class="header__inner">
			<div class="header__logo">
				<a href="/">
					<div class="logo">Chiffa's blog</div>
				</a>
			</div>
		</div>
	</header>

	<div class="content">
		{@render children()}
	</div>

	<footer class="footer">
		<div class="footer__inner">
			<div class="copyright copyright--user">
				<span>© {year} Chiffa's blog</span>
			</div>
		</div>
	</footer>
</div>

<style>
    :root {
        color-scheme: light;

        /* Cyberdream light */
        --background: #ffffff;
        --background-alt: #eaeaea;
        --background-highlight: #acacac;
        --text: #16181a;
        --grey: #7b8496;
        --blue: #0057d1;
        --green: #008b0c;
        --cyan: #008c99;
        --red: #d11500;
        --yellow: #997b00;
        --magenta: #d100bf;
        --pink: #f40064;
        --orange: #d17c00;
        --purple: #a018ff;

        /* Neubrutalist roles */
        --foreground: var(--text);
        --ink: var(--text);
        --accent: var(--orange);
        --on-accent: #16181a;
        --link: var(--blue);
        --muted: color-mix(in srgb, var(--text) 68%, transparent);

        /* Chart colors */
        --stable: var(--blue);
        --lazer: var(--pink);
        --both: var(--green);
        --stable-old: var(--blue);
        --stable-new: var(--cyan);
        --lazer-old: var(--pink);
        --lazer-new: var(--magenta);
        --both-old: var(--green);
        --both-new: var(--yellow);
    }

    @media (prefers-color-scheme: dark) {
        :root {
            color-scheme: dark;

            /* Cyberdream dark */
            --background: #16181a;
            --background-alt: #1e2124;
            --background-highlight: #3c4048;
            --text: #ffffff;
            --grey: #7b8496;
            --blue: #5ea1ff;
            --green: #5eff6c;
            --cyan: #5ef1ff;
            --red: #ff6e5e;
            --yellow: #f1ff5e;
            --magenta: #ff5ef1;
            --pink: #ff5ea0;
            --orange: #ffbd5e;
            --purple: #bd5eff;
        }
    }
</style>
