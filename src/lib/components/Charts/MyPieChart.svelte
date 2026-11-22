<script lang="ts">
	import { Chart, Layer, Legend, Pie, Tooltip } from 'layerchart';
    import { tooltip }from './CustomTooltip.svelte';

    let { data, title, colors } = $props();
    // fixed data (same as disable-sorting example to call attention to what sorting does)

</script>

<div class="chart-box">
    <h2>{title}</h2>
    <Chart {data} x="users" c="client" cRange={colors}>
      	<Layer center>
    		<Pie tooltip />
       	</Layer>
    	<Legend title="Clients" variant="swatches" orientation="vertical" placement="right" />
    	{@render tooltip(data)}
    </Chart>
</div>

<style>
    .chart-box {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: 2rem auto;
        padding: 1.25rem;
        background: var(--background);
        color: var(--foreground);
        border: var(--border);
        box-shadow: var(--shadow);

        /* LayerChart falls back to these for legend/tooltip text. */
        --color-surface-100: var(--background);
        --color-surface-300: var(--background);
        --color-surface-content: var(--foreground);
    }

    /* Reserve a right-hand column for the legend. */
    .chart-box :global(.lc-root-container) {
        max-width: calc(100% - 8em);
        height: 18.75rem !important;
    }

    .chart-box :global(.lc-pie-arc) {
        stroke: var(--ink);
        stroke-width: 0.125rem;
    }

    .chart-box :global(.lc-legend-container) {
        right: -8em;
        max-width: 7em;
        padding: 0.35rem 0.5rem;
        background: var(--background-alt);
        color: var(--foreground);
        border: var(--border-thin);
        box-shadow: var(--shadow-sm);
    }

    .chart-box :global(.lc-legend-title) {
        font-family: "Space Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--muted);
    }

    .chart-box :global(.lc-legend-swatch-button) {
        padding: 0;
        border: 0;
        background: none;
        color: var(--foreground);
        font: inherit;
        cursor: pointer;
    }

    .chart-box :global(.lc-legend-swatch-button:focus-visible) {
        outline: var(--border-width) solid var(--link);
        outline-offset: 0.1875rem;
    }

    .chart-box :global(.lc-legend-swatch) {
        border: var(--border-thin);
        border-radius: 0;
    }

    .chart-box :global(.lc-legend-swatch-label) {
        color: var(--foreground);
        font-family: "Space Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 0.75rem;
        font-weight: 700;
    }

    .chart-box h2 {
        margin: 0 0 1rem;
        color: var(--foreground);
        font-size: 1.125rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.02em;
    }

    @media (max-width: 42.75em) {
        .chart-box {
            width: 100%;
        }
    }
</style>
