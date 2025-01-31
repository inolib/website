import type { Metadata } from "next";

import { Blog, Header } from "~/components/app/(pages)/blog";
import { StrapiService } from "~/lib/api/strapi";
import type { BlogPost, Category } from "~/types/blog";

export const metadata: Metadata = {
  title: "Actualités | INOLIB",
};

// Cette fonction est maintenant asynchrone
const Page = async () => {
  try {
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
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return <div>Une erreur s est produite lors du chargement des articles.</div>;
  }
};

export const revalidate = 10;

export default Page;
