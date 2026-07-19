<script lang="ts" module>
    import { Tooltip } from "layerchart";

    export { tooltip };
</script>


{#snippet tooltip( { data }: Record<string, any> )}
<Tooltip.Root>
	{#snippet children({ data })}
	    <ul>
			{#each Object.entries(data) as [key, value]}
			    {#if key === "tooltip"}
    				<li>{value}</li>
				{:else}
                    <li>{key}: {value}</li>
				{/if}
            {/each}
		</ul>
	{/snippet}
</Tooltip.Root>

{/snippet}

<style>
    li {
        color: var(--background);
        list-style-type: none;
    }

    ul {
        margin: 0;
        padding: 0;

    }
</style>
