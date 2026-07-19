<script lang="ts">
	import { Chart, Layer, Legend, Pie, Tooltip } from 'layerchart';
    import { tooltip }from './CustomTooltip.svelte';

    let { data, title } = $props();
	// fixed data (same as disable-sorting example to call attention to what sorting does)

	const keyColors = [
		'var(--stable)',
		'var(--lazer)',
		'var(--both)',
	];
</script>

<div class="chart-box">
   <Chart {data} x="users" c="client" cRange={keyColors} height={300}>
      	<Layer type="svg" center>
    		<Pie tooltip />
       	</Layer>
    	<Legend title="Clients" variant="swatches" orientation="vertical" placement="right" />
    	{@render tooltip(data)}
    </Chart>
    <h2>{title}</h2>
</div>

<style>
    .chart-box {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .chart-box h2 {
        margin-top: 20px;
    }
</style>
