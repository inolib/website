"use client";

import { useState } from "react";

import type { BlogPageProps } from "~/types/blog";

import { BlogList } from "./BlogList";
import { BlogPagination } from "./BlogPagination";
import { BlogSearch } from "./BlogSearch";
import { BlogTabs } from "./BlogTab";

export const Blog = ({ posts, categories, pagination }: BlogPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(pagination.page);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-8">
      <BlogTabs categories={categories} onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
      <BlogSearch onSearch={handleSearchChange} />
      <BlogList posts={posts} searchQuery={searchQuery} selectedCategory={selectedCategory} />
      <BlogPagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={pagination.pageCount} />
    </section>
  );
};
