<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();
	let year = new Date().getFullYear();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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
      --ctp-latte-rosewater: #dc8a78;
      --ctp-latte-flamingo: #dd7878;
      --ctp-latte-pink: #ea76cb;
      --ctp-latte-mauve: #8839ef;
      --ctp-latte-red: #d20f39;
      --ctp-latte-maroon: #e64553;
      --ctp-latte-peach: #fe640b;
      --ctp-latte-yellow: #df8e1d;
      --ctp-latte-green: #40a02b;
      --ctp-latte-teal: #179299;
      --ctp-latte-sky: #04a5e5;
      --ctp-latte-sapphire: #209fb5;
      --ctp-latte-blue: #1e66f5;
      --ctp-latte-lavender: #7287fd;
      --ctp-latte-text: #4c4f69;
      --ctp-latte-subtext1: #5c5f77;
      --ctp-latte-subtext0: #6c6f85;
      --ctp-latte-overlay2: #7c7f93;
      --ctp-latte-overlay1: #8c8fa1;
      --ctp-latte-overlay0: #9ca0b0;
      --ctp-latte-surface2: #acb0be;
      --ctp-latte-surface1: #bcc0cc;
      --ctp-latte-surface0: #ccd0da;
      --ctp-latte-base: #eff1f5;
      --ctp-latte-mantle: #e6e9ef;
      --ctp-latte-crust: #dce0e8;
    }
    :root {
      --ctp-mocha-rosewater: #f5e0dc;
      --ctp-mocha-flamingo: #f2cdcd;
      --ctp-mocha-pink: #f5c2e7;
      --ctp-mocha-mauve: #cba6f7;
      --ctp-mocha-red: #f38ba8;
      --ctp-mocha-maroon: #eba0ac;
      --ctp-mocha-peach: #fab387;
      --ctp-mocha-yellow: #f9e2af;
      --ctp-mocha-green: #a6e3a1;
      --ctp-mocha-teal: #94e2d5;
      --ctp-mocha-sky: #89dceb;
      --ctp-mocha-sapphire: #74c7ec;
      --ctp-mocha-blue: #89b4fa;
      --ctp-mocha-lavender: #b4befe;
      --ctp-mocha-text: #cdd6f4;
      --ctp-mocha-subtext1: #bac2de;
      --ctp-mocha-subtext0: #a6adc8;
      --ctp-mocha-overlay2: #9399b2;
      --ctp-mocha-overlay1: #7f849c;
      --ctp-mocha-overlay0: #6c7086;
      --ctp-mocha-surface2: #585b70;
      --ctp-mocha-surface1: #45475a;
      --ctp-mocha-surface0: #313244;
      --ctp-mocha-base: #1e1e2e;
      --ctp-mocha-mantle: #181825;
      --ctp-mocha-crust: #11111b;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --background: var(--ctp-mocha-base);
            --text: var(--ctp-mocha-text);
            --accent: var(--ctp-mocha-peach);
            --url: var(--ctp-mocha-blue);
            --url-hover: var(--ctp-mocha-lavender);
            /* Chart colors */
            --stable: var(--ctp-mocha-blue);
            --lazer: var(--ctp-mocha-pink);
            --both: var(--ctp-mocha-green);
            /* Detailed chart colors */
            --stable-old: var(--ctp-mocha-blue);
            --stable-new: var(--ctp-mocha-sapphire);
            --lazer-old: var(--ctp-mocha-pink);
            --lazer-new: var(--ctp-mocha-flamingo);
            --both-old: var(--ctp-mocha-green);
            --both-new: var(--ctp-mocha-yellow);

            /* Chart surfaces */
            --surface0: var(--ctp-mocha-surface0);
        }
    }
    @media (prefers-color-scheme: light) {
        :root {
            --background: var(--ctp-latte-base);
            --text: var(--ctp-latte-text);
            --accent: var(--ctp-latte-peach);
            --url: var(--ctp-latte-blue);
            --url-hover: var(--ctp-latte-lavender);

            /* Chart colors */
            --stable: var(--ctp-latte-blue);
            --lazer: var(--ctp-latte-pink);
            --both: var(--ctp-latte-green);

            /* Detailed chart colors */
            --stable-old: var(--ctp-latte-blue);
            --stable-new: var(--ctp-latte-sapphire);
            --lazer-old: var(--ctp-latte-pink);
            --lazer-new: var(--ctp-latte-flamingo);
            --both-old: var(--ctp-latte-green);
            --both-new: var(--ctp-latte-yellow);

            /* Chart surfaces */
            --surface0: var(--ctp-latte-surface0);
        }
    }
</style>
