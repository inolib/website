"use client";

import { Box, Tab, Tabs } from "@mui/material";
import type { Category } from "~/lib/strapi/api-client";

type BlogTabsProps = {
  categories: Category[];
  selectedCategory: number;
  onCategoryChange: (category: number) => void;
};

export const BlogTabs = ({ categories = [], selectedCategory, onCategoryChange }: BlogTabsProps) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    onCategoryChange(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        aria-label="Les choix de catégories d'articles du blog"
        className="mb-4"
        value={selectedCategory}
        onChange={handleChange}
        sx={{
          "& .MuiTabs-indicator": { backgroundColor: "#3E6D77" },
        }}
      >
        {categories.map(({ id, name }) => (
          <Tab
            key={id}
            label={name}
            value={id}
            sx={{
              "&.Mui-selected, &:focus": { color: "#3E6D77" },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};
