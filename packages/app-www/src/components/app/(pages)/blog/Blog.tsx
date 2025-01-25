"use client";
import { defaultTheme, Item, Provider, TabList, Tabs, type Key } from "@adobe/react-spectrum";
import Image from "next/image";
import { useState } from "react";

import type { BlogPageProps, CategoryWithPosts } from "~/types/blog";

export const Blog = ({ posts, categories }: BlogPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

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
            <Tabs aria-label="Catégories de Blog" defaultSelectedKey="all" onSelectionChange={handleTabChange}>
              <TabList>
                <Item key="all" textValue="Tous les articles">
                  Tous les articles
                </Item>
                <>
                  {categoriesWithPosts.map((category) => (
                    <Item key={category.id.toString()} textValue={category.name}>
                      {category.name}
                    </Item>
                  ))}
                </>
              </TabList>
            </Tabs>
          </Provider>
        </nav>
        <div className="w-64 shrink-0">
          <input
            className="w-full rounded border p-2"
            id="search"
            name="search"
            onChange={handleSearchChange}
            placeholder="Rechercher..."
            type="search"
            value={searchQuery}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.length > 0 ? (
          displayedPosts.map((post) => (
            <div className="overflow-hidden rounded-2xl p-4" key={post.id}>
              <Image
                alt={post.title}
                className="h-[200px] w-full rounded object-cover"
                height={200}
                src={process.env.NEXT_PUBLIC_STRAPI_URL + post.image?.[0]?.url}
                width={400}
              />
              <div className="mt-4">
                <span className="inline-block rounded-full px-3 py-1 text-xs font-medium">
                  {post.categories[0]?.name || "Uncategorized"}
                </span>
                <h2 className="mt-2 text-lg font-bold">{post.title}</h2>
                <p className="mt-2 text-sm">{post.excerpt}</p>
                <div className="mt-4 flex items-center">
                  <Image
                    alt={post.author.name}
                    className="size-10 rounded-full object-cover"
                    height={40}
                    src={process.env.NEXT_PUBLIC_STRAPI_URL + post.image?.[0]?.url || "https://via.placeholder.com/40"}
                    width={40}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-sm">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun article disponible.</p>
        )}
      </div>
    </section>
  );
};
