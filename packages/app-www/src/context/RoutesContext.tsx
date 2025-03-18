"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { baseRoutes } from "~/config/RoutesConfig";
import { strapiApi } from "~/lib/strapi";

export type Routes = Record<string, { isActive: boolean; title: string }>;

const RoutesContext = createContext<Routes | null>(null);

export const RoutesProvider = ({ children }: { children: React.ReactNode }) => {
  const [routes, setRoutes] = useState<Routes | null>(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      const dynamicRoutes: Routes = {};

      try {
        const response = await strapiApi.blogPost.getBlogPosts({
          sort: "id:desc",
          paginationPage: 1,
          paginationPageSize: 9,
          populate: "*",
        });
        const posts = response.data.data;
        console.log("posts", posts);

        if (posts) {
          for (const post of posts) {
            if (post.title) {
              dynamicRoutes[`/blog/${post.slug}`] = {
                isActive: true,
                title: post.title,
              };
            }
          }
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
