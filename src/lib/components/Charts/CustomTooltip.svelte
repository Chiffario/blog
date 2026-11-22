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
        padding: 0.5rem 0.75rem;
        list-style: none;
        background: var(--background-alt);
        color: var(--foreground);
        border: var(--border);
        box-shadow: var(--shadow);
        font-family: "Space Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 0.8125rem;
        line-height: 1.5;
    }

    li {
        list-style: none;
        white-space: nowrap;
    }
</style>
