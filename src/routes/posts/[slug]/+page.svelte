<script lang="ts">
	import { getPost } from '$lib/posts';
	import { page } from '$app/stores';

	let post = $derived(getPost($page.params.slug!));
</script>

{#if post}
	<post.component />
{/if}
