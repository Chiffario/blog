import { getAllPosts } from '#lib/posts.ts';

export function load() {
	return { posts: getAllPosts() };
}
