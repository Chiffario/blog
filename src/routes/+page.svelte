<script lang="ts">
    import BlogSummary from '#lib/components/BlogSummary.svelte';
	import type { PageData } from './$types';
	import { getAllPosts } from '#lib/posts.ts'

	let { data }: { data: { posts: ReturnType<typeof getAllPosts> } } = $props();
	console.log(data.posts);
</script>

<div class="posts">
	{#each data.posts as post}
	    {#if post.meta.hidden === false}
    	    <BlogSummary title={post.meta.title} date={post.meta.date} url="/posts/{post.slug}">
    			{post.meta.description}
    		</BlogSummary>
		{/if}
	{/each}
</div>
