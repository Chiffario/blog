<script lang="ts">
    import BlogSummary from '$lib/components/BlogSummary.svelte';
    import MyPieChart from '$lib/components/Charts/MyPieChart.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1>Posts</h1>

<ul>
	{#each data.posts as post}
	    <BlogSummary title={post.meta.title} url="/posts/{post.slug}">
			{post.meta.description}
		</BlogSummary>
	{/each}
</ul>
<MyPieChart title="Client separation" data=
    {[{ users: 368818, client: "stable" },
    { users: 470201, client: "lazer" },
    { users: 16132, client: "both" }]}/>


<style>
</style>
