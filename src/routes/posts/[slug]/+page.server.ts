import { getAllPosts, getPost } from '$lib/posts';
import { error } from '@sveltejs/kit';

export function entries() {
	return getAllPosts().map((p) => ({ slug: p.slug ?? ""}));
}

export function load({ params }) {
	const post = getPost(params.slug);
	if (!post) error(404);
	return { title: post.meta.title, date: post.meta.date, slug: post.slug };
}
