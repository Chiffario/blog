import type { Component } from "svelte";

type PostModule = {
	default: Component;
	slug: string;
	metadata: PostMeta;
  hidden: boolean;
};

const modules: Record<string, PostModule> = import.meta.glob('/src/posts/*.svx', {
	eager: true
});

export type PostMeta = {
  slug?: string;
  meta: Metadata;
}

export type Metadata = {
  title: string;
  date: string;
  description: string;
  hidden: boolean;
}

export interface Post extends PostMeta {
  component: Component;
}

function slugFromPath(path: string): string {
	return path.split('/').pop()!.replace('.svx', '');
}

function toPostMeta(slug: string, mod: PostModule): PostMeta {
  console.log(mod.metadata.meta);
  return {
		slug,
    meta: {
      title: mod.metadata.meta.title ?? slug,
      date: mod.metadata.meta.date ?? '',
      description: mod.metadata.meta.description ?? '',
      hidden: mod.metadata.meta.hidden ?? false,
    }
	};
}

export function getAllPosts(): PostMeta[] {
  return Object.entries(modules)
  	.map(([path, mod]) => toPostMeta(slugFromPath(path), mod))
		.sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export function getPost(slug: string): Post | null {
	for (const [path, mod] of Object.entries(modules)) {
		if (slugFromPath(path) === slug) {
			return { ...toPostMeta(slug, mod), component: mod.default };
		}
	}
	return null;
}
