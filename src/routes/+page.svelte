<script lang="ts">
    import BlogSummary from '$lib/components/BlogSummary.svelte';
    import MyPieChart from '$lib/components/Charts/MyPieChart.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="posts">
	{#each data.posts as post}
	    <BlogSummary title={post.meta.title} date={post.meta.date} url="/posts/{post.slug}">
			{post.meta.description}
		</BlogSummary>
	{/each}
</div>
