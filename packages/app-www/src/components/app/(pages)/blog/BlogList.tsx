"use client";

import type { BlogPost } from "~/lib/strapi/api-client";
import { BlogPostCard } from "./BlogPostCard";

type BlogListProps = {
  posts: BlogPost[];
};

export const BlogList = ({ posts }: BlogListProps) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {posts.length ? (
      posts.map((post) => <BlogPostCard key={post.id} post={post} />)
    ) : (
      <p className="col-span-full text-center text-gray-500">Aucun article disponible.</p>
    )}
  </div>
);
