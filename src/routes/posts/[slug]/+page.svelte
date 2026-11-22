<script lang="ts">
	import { getPost } from '#lib/posts.ts';
	import { page } from '$app/state';

	let post = $derived(getPost(page.params.slug!));
</script>

{#if post}
	<article class="post">
		<h1 class="post-title"><a href={page.url.pathname}>{post.meta.title}</a></h1>
		<div class="post-meta"><time class="post-date">{post.meta.date}</time></div>
		<div class="post-content"><post.component /></div>
	</article>
{/if}
