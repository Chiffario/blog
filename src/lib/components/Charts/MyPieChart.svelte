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
        margin: 1.25rem auto;
        padding: 1.25rem;
        border: 0.3125rem solid var(--accent);
        border-radius: var(--radius);
        background: var(--background);
        color: var(--foreground);

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

    .chart-box :global(.lc-legend-container) {
        right: -8em;
        max-width: 7em;
        padding: 0.25rem 0.5rem;
        background: var(--surface0, var(--background));
        color: var(--foreground);
    }

    .chart-box :global(.lc-legend-title) {
        font: inherit;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: color-mix(in srgb, var(--foreground) 65%, transparent);
    }

    .chart-box :global(.lc-legend-swatch-button) {
        padding: 0;
        border: 0;
        background: none;
        color: var(--foreground);
        font: inherit;
        cursor: pointer;
    }

    .chart-box :global(.lc-legend-swatch-label) {
        color: var(--foreground);
        font-size: 0.8rem;
    }

    .chart-box h2 {
        margin: 0 0 1rem;
        text-align: center;
        color: var(--foreground);
    }

    @media (max-width: 42.75em) {
        .chart-box {
            width: 100%;
        }
    }
</style>
