"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { baseRoutes } from "~/config/RoutesConfig";
import { StrapiService } from "~/lib/api/strapi";
import type { BlogPost } from "~/types/blog";

export type Routes = Record<string, { isActive: boolean; title: string }>;

const RoutesContext = createContext<Routes | null>(null);

export const RoutesProvider = ({ children }: { children: React.ReactNode }) => {
  const [routes, setRoutes] = useState<Routes | null>(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      const dynamicRoutes: Routes = {};

      try {
        const { posts } = (await StrapiService.getBlogPosts("*", 1, 9)) as { posts: BlogPost[] };
        for (const post of posts) {
          dynamicRoutes[`/blog/${post.slug}`] = {
            isActive: true,
            title: post.title,
          };
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des routes dynamiques :", error);
      }

      setRoutes({ ...baseRoutes, ...dynamicRoutes });
    };

    fetchRoutes().catch(console.error);
  }, []);

  if (!routes) {
    return <div>Chargement des routes...</div>;
  }

  return <RoutesContext.Provider value={routes}>{children}</RoutesContext.Provider>;
};

export const useRoutesContext = () => {
  const context = useContext(RoutesContext);
  if (!context) {
    throw new Error("useRoutesContext must be used within a RoutesProvider");
  }
  return context;
};
