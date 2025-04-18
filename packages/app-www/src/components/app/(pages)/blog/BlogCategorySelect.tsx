"use client";

import type { Category } from "~/lib/strapi/api-client";

type BlogTabsProps = {
  categories: Category[];
  selectedCategory: number;
  onCategoryChange: (category: number) => void;
};

export const BlogCategorySelect = ({ categories = [], selectedCategory, onCategoryChange }: BlogTabsProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(Number(event.target.value));
  };

  return (
    <div className="mb-4">
      <label htmlFor="category-select" className="block mb-2 text-sm font-medium text-gray-700">
        Choisir une catégorie d’article
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleChange}
        className="w-full max-w-sm rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        aria-label="Sélection de catégorie d’article"
      >
        {categories.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
