"use client";
// import { defaultTheme, Item, Provider, TabList, Tabs } from "@adobe/react-spectrum";
import { Box, Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";

import type { Category } from "~/types/blog";

type BlogTabsProps = {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export const BlogTabs = ({ categories, selectedCategory, onCategoryChange }: BlogTabsProps) => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue);

    onCategoryChange(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", fontFamily: "ManRope" }}>
        <Tabs
          aria-label="Les choix de catégories d'articles du blog"
          className="mb-4"
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#3E6D77",
              color: "#3E6D77",
            },
          }}
          value={selectedCategory}
        >
          <Tab
            label="Tous les articles"
            sx={{
              "&.Mui-selected": {
                color: "#3E6D77",
              },
              "&:focus": {
                color: "#3E6D77",
              },
            }}
            value="all"
          />
          {categories.map((category) => (
            <Tab
              aria-controls={category.id.toString()}
              key={category.id}
              label={category.name}
              sx={{
                "&.Mui-selected": {
                  color: "#3E6D77",
                },
                "&:focus": {
                  color: "#3E6D77",
                },
              }}
              value={category.id.toString()}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
};
