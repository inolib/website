"use client";
import { defaultTheme, Item, Provider, TabList, Tabs, type Key } from "@adobe/react-spectrum";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Input, SearchField } from "react-aria-components";

import { formatDate } from "~/helpers";
import type { BlogPageProps, CategoryWithPosts } from "~/types/blog";

export const Blog = ({ posts, categories, pagination }: BlogPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(pagination.page);

  const categoriesWithPosts: CategoryWithPosts[] = categories.map((category) => ({
    ...category,
    posts: posts.filter((post) => post.categories.some((postCategory) => postCategory.id === category.id)),
  }));

  const handleTabChange = (key: Key) => {
    setSelectedCategory(key.toString());
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleNextPage = () => {
    if (pagination.page < pagination.pageCount) setCurrentPage(pagination.page + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const displayedPosts =
    selectedCategory === "all"
      ? posts.filter(
          (post) => post.title.toLowerCase().includes(searchQuery) || post.excerpt.toLowerCase().includes(searchQuery),
        )
      : categoriesWithPosts
          .find((category) => category.id.toString() === selectedCategory)
          ?.posts.filter(
            (post) =>
              post.title.toLowerCase().includes(searchQuery) || post.excerpt.toLowerCase().includes(searchQuery),
          ) || [];

  return (
    <section className="mx-auto w-full max-w-7xl px-8">
      <div className="mb-8 flex items-center justify-between">
        <nav aria-label="Catégories de blog" className="mr-4 flex-1">
          <Provider theme={defaultTheme}>
            <Tabs
              aria-label="Catégories de Blog"
              defaultSelectedKey="all"
              onSelectionChange={handleTabChange}
              UNSAFE_className="bg-white p-2 rounded-lg"
            >
              <TabList>
                <Item key="all" textValue="Tous les articles">
                  <div
                    className={`inline-flex h-9 cursor-pointer items-center justify-center gap-2 border-b-4 border-[#3e6d77] px-1 pb-3 ${
                      selectedCategory === "all" ? "text-[#3E6D77]" : "text-gray-700"
                    } hover:text-[#3E6D77]`}
                  >
                    <div className="font-['Inter'] text-base font-semibold leading-normal text-[#3e6d77]">
                      Tous les articles
                    </div>
                  </div>
                </Item>
                <>
                  {categoriesWithPosts.map((category) => (
                    <Item key={category.id.toString()} textValue={category.name}>
                      <div
                        className={`inline-flex h-9 cursor-pointer items-center justify-center gap-2 px-1 pb-3 ${
                          selectedCategory === category.id.toString() ? "text-[#3E6D77]" : "text-gray-700"
                        } hover:text-[#3E6D77]`}
                      >
                        <span className="font-['Inter'] text-base font-semibold leading-normal text-neutral-500">
                          {category.name}
                        </span>
                      </div>
                    </Item>
                  ))}
                </>
              </TabList>
            </Tabs>
          </Provider>
        </nav>
        <div className="w-64 shrink-0">
          <SearchField>
            <Input
              className="w-full rounded-full border p-2 placeholder:text-sm placeholder:leading-6 focus:border-[#254147] focus:shadow-[0px_0px_0px_4px_#579AA8] focus:outline-none"
              id="searchInput"
              onChange={handleSearchChange}
              placeholder="Rechercher un article"
              style={{
                backgroundImage: "url('/images/icons/search.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "10px center",
                backgroundSize: "16px 16px",
                paddingLeft: "35px",
              }}
            />
          </SearchField>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post) => (
            <div className="overflow-hidden rounded-2xl p-4" key={post.id}>
              <Link href={`/blog/${post.slug}`} passHref>
                <Image
                  alt={post.title}
                  className="h-[200px] w-full rounded object-cover"
                  height={200}
                  src={process.env.NEXT_PUBLIC_STRAPI_URL + post.image?.[0]?.url}
                  width={400}
                />
                <div className="mt-4">
                  <span className="inline-flex items-center justify-center rounded-full bg-[#CBE0E4] px-4 py-1 text-xs font-medium text-[#111F22]">
                    {post.categories[0]?.name || "Uncategorized"}
                  </span>
                  <h2 className="mt-2 font-['Manrope'] text-[24px] font-semibold leading-[33px] text-[#111F22]">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 font-['Manrope'] text-[16px] font-medium leading-[26px] text-[#525252]">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <Image
                      alt={post.author.name}
                      className="size-10 rounded-full object-cover"
                      height={40}
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_URL + post.image?.[0]?.url || "https://via.placeholder.com/40"
                      }
                      width={40}
                    />
                    <div className="flex flex-col">
                      <p className="text-[14px] font-semibold leading-[20px] text-[#111F22]">{post.author.name}</p>
                      <p className="text-[14px] font-normal leading-[20px] text-[#525252]">
                        {post.author.publishedAt ? formatDate(post.author.publishedAt) : "Date non disponible"}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Aucun article disponible.</p>
        )}
      </div>
      <div className="m-8 flex items-center justify-between border-t border-gray-300 pt-4">
        <button
          className="rounded-lg border border-gray-400 px-6 py-2 text-gray-700 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          ← Previous
        </button>
        <p className="font-medium text-gray-800">
          Page {currentPage} sur {pagination.pageCount}
        </p>
        <button
          className="rounded-lg border border-gray-400 px-6 py-2 text-gray-700 disabled:opacity-50"
          disabled={currentPage === pagination.pageCount}
          onClick={handleNextPage}
        >
          Next →
        </button>
      </div>
    </section>
  );
};
