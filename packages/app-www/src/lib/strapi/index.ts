import {
  AuthorApi,
  BlogPostApi,
  BlogSettingApi,
  Configuration,
  CategoryApi,
  FormationApi,
  HomePageApi,
} from "./api-client";

const baseURL = (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337") + "/api";
const apiToken = process.env.STRAPI_API_TOKEN;

const apiConfig = new Configuration({
  basePath: baseURL,
  accessToken: apiToken || "",
});

// Ici ons rajoute toute les api que l'ons veux utiliser
export const strapiApi = {
  // Single types API
  blogSettings: new BlogSettingApi(apiConfig),
  homePage: new HomePageApi(apiConfig),

  // Component Api
  blogPost: new BlogPostApi(apiConfig),
  category: new CategoryApi(apiConfig),
  author: new AuthorApi(apiConfig),
  formation: new FormationApi(apiConfig),
};
