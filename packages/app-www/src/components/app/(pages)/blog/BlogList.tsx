"use client";

import type { BlogPost } from "~/types/blog";

import { BlogPostCard } from "./BlogPostCard";

type BlogListProps = {
  posts: BlogPost[];
  selectedCategory: string;
  searchQuery: string;
};

export const BlogList = ({ posts, selectedCategory, searchQuery }: BlogListProps) => {
  const displayedPosts = posts.filter((post) => {
    const isCategoryMatch =
      selectedCategory === "all" || post.categories.some((cat) => cat.id.toString() === selectedCategory);
    const isSearchMatch =
      post.title.toLowerCase().includes(searchQuery) || post.excerpt.toLowerCase().includes(searchQuery);

    return isCategoryMatch && isSearchMatch;
  });

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {displayedPosts.length > 0 ? (
        displayedPosts.map((post) => <BlogPostCard key={post.id} post={post} />)
      ) : (
        <p>Aucun article disponible.</p>
      )}
    </div>
  );
};
