"use client";

import { useEffect, useState } from "react";
import { strapiApi } from "~/lib/strapi";
import type { Pagination } from "~/types/blog";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { BlogList } from "./BlogList";
import { BlogPagination } from "./BlogPagination";
import { BlogSearch } from "./BlogSearch";
import { BlogTabs } from "./BlogTab";
import type { BlogPost, Category } from "~/lib/strapi/api-client";
import { BlogPostSkeleton } from "./BlogListLoader";

export const Blog = ({pageSize}: {pageSize: number}) => {
  // Categories
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  // Blog Posts
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300); // 300ms delay

    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Reset pagination when category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, debouncedSearchQuery]);

  // Fetch categories first
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoadingCategories(true);
      try {
        const response = await strapiApi.category.getCategories({
          sort: "id:desc",
          paginationPage: 1,
          paginationPageSize: 100,
        });
        const allCategories = response.data.data ?? [];
        setCategories([{ id: 0, name: "Tous les articles" }, ...allCategories]); // Default "All" category
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      } finally {
        setIsLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  // Fetch posts based on category, search query, and pagination
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoadingPosts(true);
      try {
        const response = await strapiApi.blogPost.getBlogPosts(
          {
            sort: "id:desc",
            paginationPage: currentPage,
            paginationPageSize: pageSize,
          },
          {
            params: {
              filters: {
                ...(selectedCategory !== 0 ? { categories: { id: { $eq: selectedCategory } } } : {}),
                ...(debouncedSearchQuery ? { title: { $containsi: debouncedSearchQuery } } : {}),
              },
              populate: ["image", "author", "author.avatar", "categories"],
            },
          },
        );

        const { data, meta } = response.data;
        setPosts(data ?? []);
        setPagination(meta?.pagination ?? null);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      } finally {
        setIsLoadingPosts(false);
      }
    };

    fetchPosts();
  }, [currentPage, selectedCategory, debouncedSearchQuery]);

  return (
    <>
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex-1">
          {isLoadingCategories ? (
            <div>Chargement des catégories...</div>
          ) : (
            <BlogTabs
              categories={categories}
              onCategoryChange={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          )}
        </TwoColumnsFlexLayoutColumn>
        <BlogSearch onSearch={setSearchQuery} />
      </TwoColumnsFlexLayout>

      {isLoadingPosts ? <BlogPostSkeleton /> : <BlogList posts={posts} />}

      {pagination && (
        <BlogPagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={pagination.pageCount} />
      )}
    </>
  );
};
