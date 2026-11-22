<script lang="ts" module>
    import { Tooltip } from "layerchart";

    export { tooltip };
</script>


{#snippet tooltip( { data }: Record<string, any> )}
<Tooltip.Root variant="none">
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
    ul {
        margin: 0;
        padding: 0.375rem 0.625rem;
        list-style: none;
        border: 0.0625rem solid var(--accent);
        border-radius: var(--radius);
        background: var(--background);
        color: var(--foreground);
        font-size: 0.875rem;
        line-height: 1.4;
    }

    li {
        list-style: none;
        white-space: nowrap;
    }
</style>
