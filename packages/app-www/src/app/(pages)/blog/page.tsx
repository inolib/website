import type {  Metadata } from "next";

import { Blog, Header } from "~/components/app/(pages)/blog";
import { StrapiService } from "~/lib/api/strapi";
import type {  BlogPost, Category } from "~/types/blog";

export const metadata: Metadata = {
  title: "Actualités | INOLIB",
};


const Page = async () => {
  const posts = (await StrapiService.getBlogPosts("*")) as BlogPost[];
  const categories: Category[] = [
    ...new Map(posts.flatMap((post) => post.categories).map((cat) => [cat.id, cat])).values(),
  ];
  return (
    <>
      <Header />
      <Blog categories={categories} posts={posts} />
    </>
  );
};



export default Page;
