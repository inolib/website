"use client";
import { defaultTheme, Item, Provider, TabList, Tabs } from "@adobe/react-spectrum";

// import { defaultTheme, Item, Provider, TabList, Tabs, type Key } from "@adobe/react-spectrum";
import type { Category } from "~/types/blog";

type BlogTabsProps = {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export const BlogTabs = ({ categories, selectedCategory, onCategoryChange }: BlogTabsProps) => {
  return (
    <Provider theme={defaultTheme}>
      <Tabs
        aria-label="Catégories de Blog"
        onSelectionChange={(key) => onCategoryChange(String(key))}
        selectedKey={selectedCategory}
        UNSAFE_className="bg-white p-2 rounded-lg"
      >
        <TabList>
          <Item key="all" textValue="Tous les articles">
            <div className="pb-3 text-gray-700 data-[selected]:text-[#D32F2F]">Tous les articles</div>
          </Item>
          <>
            {categories.map((category) => (
              <Item key={category.id.toString()} textValue={category.name}>
                <div className="pb-3 text-gray-700 data-[selected]:text-[#D32F2F]">{category.name}</div>
              </Item>
            ))}
          </>
        </TabList>
      </Tabs>
    </Provider>
  );
};
