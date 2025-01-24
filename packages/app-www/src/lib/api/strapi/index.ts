import { HttpFactory } from "~/lib/http/http-factory";
import type { BlogPost } from "~/types/blog";

import type { ContentManagementService } from "../index";

export const StrapiService: ContentManagementService = {
  async getBlogPosts(populate: string = "*"): Promise<BlogPost[]> {
    try {
      const response: StrapiResponse<BlogPost[]> = await HttpFactory.get<StrapiResponse<BlogPost[]>>(
        `/api/blog-posts?populate=${populate}`,
      );

      if (!response.data) {
        throw new Error("Les données des posts sont manquantes dans la réponse.");
      }

      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des posts :", error);
      return [];
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
