"use client";

import { useEffect, useRef, useState } from "react";
import { strapiApi } from "~/lib/strapi";
import type { AuthorListResponseMetaPagination, BlogPost, Category } from "~/lib/strapi/api-client";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { BlogList } from "./BlogList";
import { BlogPagination } from "./BlogPagination";
import { BlogSearch } from "./BlogSearch";
import { BlogCategorySelect } from "./BlogCategorySelect";
import { BlogPostSkeleton } from "./BlogListLoader";

type BlogProps = {
  pageSize: number;
  initialPosts: BlogPost[];
  initialPagination: AuthorListResponseMetaPagination | null;
  initialCategories: Category[];
};

export const Blog = ({ pageSize, initialPosts, initialPagination, initialCategories }: BlogProps) => {
  // Categories
  const [categories] = useState<Category[]>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  // Blog Posts
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState<AuthorListResponseMetaPagination | null>(initialPagination);
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

  // Fetch posts when filters change
  useEffect(() => {
    // Skip the effect on the first render
    if (isFirstRender.current) {
      isFirstRender.current = false; // Mark as no longer the first render
      return;
    }

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

  // Use a ref to track the first render and avoid fetching server initial data again
  const isFirstRender = useRef(true);

  return (
    <>
      {posts.length > 0 ? (
        <>
          <TwoColumnsFlexLayout>
            <TwoColumnsFlexLayoutColumn className="flex-1">
              <BlogCategorySelect
                categories={categories}
                onCategoryChange={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </TwoColumnsFlexLayoutColumn>
            <BlogSearch onSearch={setSearchQuery} />
          </TwoColumnsFlexLayout>

          {isLoadingPosts ? <BlogPostSkeleton /> : <BlogList posts={posts} />}

          {pagination && (
            <BlogPagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={pagination.pageCount} />
          )}
        </>
      ) : (
        <p>Aucun article disponible.</p>
      )}
    </>
  );
};