import { cache } from "react";

import { HttpFactory } from "~/lib/http/http-provider";
import type { BlogPost, PaginatedBlogPosts, Pagination } from "~/types/blog";

import type { ContentManagementService } from "../index";

export const StrapiService: ContentManagementService = {
  getBlogPosts: cache(
    async (populate: string = "*", page: number = 1, pageSize: number = 9): Promise<PaginatedBlogPosts> => {
      try {
        const timestamp = Date.now();

        const response: StrapiResponse<any> = await HttpFactory.get<
          StrapiResponse<{ data: BlogPost[]; meta: { pagination: Pagination } }>
        >(
          `/api/blog-posts?populate=${populate}&timestamp=${timestamp}&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
        );

        console.log(response.data);

        if (!response.data || !response.meta || !response.meta.pagination) {
          throw new Error("Les données ou la pagination sont manquantes.");
        }

        return {
          posts: response.data as BlogPost[],
          pagination: response.meta?.pagination,
        };
      } catch (error) {
        console.error("Erreur lors de la récupération des posts :", error);
        return { posts: [], pagination: { page: 1, pageSize: 9, pageCount: 0, total: 0 } };
      }
    },
  ),

  async getBlogPostBySlug(slug: string, populate: string = "author.avatar"): Promise<BlogPost | null> {
    try {
      const response: StrapiResponse<BlogPost[]> = await HttpFactory.get<StrapiResponse<BlogPost[]>>(
        `/api/blog-posts?filters[slug][$eq]=${slug}&populate=author.avatar&populate=categories`,
      );

      console.log(response.data);

      if (response.data && response.data.length > 0) {
        return response.data[0];
      } else {
        throw new Error("Les données du post sont manquantes dans la réponse.");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du post :", error);
      return null;
    }
  },
};

export type StrapiResponse<T> = {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
};
