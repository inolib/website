"use client";

import { useEffect, useState } from "react";

import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { StrapiService } from "~/lib/api/strapi";
import type { BlogPageProps, Category } from "~/types/blog";

import { BlogList } from "./BlogList";
import { BlogPagination } from "./BlogPagination";
import { BlogSearch } from "./BlogSearch";
import { BlogTabs } from "./BlogTab";

export const Blog = ({
  posts: initialPosts,

  pagination: initialPagination,
}: BlogPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(initialPagination.page);
  const [posts, setPosts] = useState(initialPosts);
  const [pagination, setPagination] = useState(initialPagination);
  const [categories, setCategories] = useState<Category[]>([]); // 🔥 Stocke toutes les catégories

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const allPosts = (await StrapiService.getBlogPosts("*", 1, 100)) as BlogPageProps;
        const uniqueCategories = allPosts.posts
          .flatMap((post) => post.categories)
          .filter((cat, index, self) => index === self.findIndex((c) => c.id === cat.id)); // Supprime les doublons

        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      }
    };

    fetchCategories().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts, pagination } = (await StrapiService.getBlogPosts("*", currentPage, 1)) as BlogPageProps;
      setPosts(posts);
      setPagination(pagination);
    };

    fetchPosts().catch(console.error);
  }, [currentPage]);

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
    <>
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex-1">
          <BlogTabs
            categories={categories}
            onCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
        </TwoColumnsFlexLayoutColumn>
        <BlogSearch onSearch={handleSearchChange} />
      </TwoColumnsFlexLayout>
      <BlogList posts={posts} searchQuery={searchQuery} selectedCategory={selectedCategory} />
      <BlogPagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={pagination.pageCount} />
    </>
  );
};
