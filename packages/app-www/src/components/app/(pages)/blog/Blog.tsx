"use client";
import { defaultTheme, Item, Provider, TabList, TabPanels, Tabs, type Key } from "@adobe/react-spectrum";
import { useState } from "react";

import type { BlogPageProps, CategoryWithPosts } from "~/types/blog";

export const Blog = ({ posts, categories }: BlogPageProps) => {
  const categoriesWithPosts: CategoryWithPosts[] = categories.map((category) => ({
    ...category,
    posts: posts.filter((post) => post.categories.some((postCategory) => postCategory.id === category.id)),
  }));

  console.log(posts);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleTabChange = (key: Key) => {
    setSelectedCategory(key.toString());
    console.log(selectedCategory, key);
  };

  const displayedPosts =
    selectedCategory === "all"
      ? posts
      : categoriesWithPosts.find((category) => category.id.toString() === selectedCategory)?.posts || [];

  return (
    <section className="mx-auto h-[111.5625rem] w-full max-w-7xl gap-16 px-8">
      <div className="flex h-12 max-w-[76rem] flex-row">
        <nav aria-label="Catégories de blog" className="flex h-9 w-full max-w-[54rem]">
          <Provider theme={defaultTheme}>
            <Tabs aria-label="Catégories de Blog" defaultSelectedKey="all" onSelectionChange={handleTabChange}>
              <TabList>
                <>
                  <Item key="all" textValue="Tous les articles">
                    Tous les articles
                  </Item>
                  {/* Tabs for each category */}
                  {categoriesWithPosts.map((category) => (
                    <Item key={category.id.toString()} textValue={category.name}>
                      {category.name}
                    </Item>
                  ))}
                </>
              </TabList>
              <TabPanels>
                <>
                  <Item key="all">
                    <div className="p-4">
                      {displayedPosts.length > 0 ? (
                        displayedPosts.map((post) => (
                          <div className="mb-4" key={post.id}>
                            <h2 className="text-lg font-bold">{post.title}</h2>
                            <p>{post.excerpt}</p>
                          </div>
                        ))
                      ) : (
                        <p>Aucun article disponible.</p>
                      )}
                    </div>
                  </Item>
                  {categoriesWithPosts.map((category) => (
                    <Item key={category.id.toString()}>
                      <div className="p-4">
                        {displayedPosts.length > 0 ? (
                          displayedPosts.map((post) => (
                            <div className="mb-4" key={post.id}>
                              <h2 className="text-lg font-bold">{post.title}</h2>
                              <p>{post.excerpt}</p>
                            </div>
                          ))
                        ) : (
                          <p>Aucun article disponible pour cette catégorie.</p>
                        )}
                      </div>
                    </Item>
                  ))}
                </>
              </TabPanels>
            </Tabs>
          </Provider>
        </nav>
        <div className="h-9 w-full">
          <input id="" name="" type="search" />
        </div>
      </div>
    </section>
  );
};
