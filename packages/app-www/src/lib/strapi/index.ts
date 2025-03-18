import { AuthorApi, BlogPostApi, BlogSettingApi, Configuration, CategoryApi } from "./api-client";

const baseURL = (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337") + "/api";
const apiToken = process.env.STRAPI_API_TOKEN;

const apiConfig = new Configuration({
  basePath: baseURL,
  accessToken: apiToken || "",
});

// Ici ons rajoute toute les api que l'ons veux utiliser
export const strapiApi = {
  blogPost: new BlogPostApi(apiConfig),
  blogSettings: new BlogSettingApi(apiConfig),
  category: new CategoryApi(apiConfig),
  author: new AuthorApi(apiConfig),
};
