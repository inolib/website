import type { Metadata } from "next";

import { Blog, Header } from "~/components/app/(pages)/blog";
import { StrapiService } from "~/lib/api/strapi";
import type { BlogPageProps, Category } from "~/types/blog";

export const metadata: Metadata = {
  title: "Actualités | INOLIB",
};

const Page = async () => {
  try {
    const { posts, pagination } = (await StrapiService.getBlogPosts("*", 1, 9)) as BlogPageProps;

    console.log(posts);

    const categories: Category[] = [
      ...new Map(posts.flatMap((post) => post.categories).map((cat) => [cat.id, cat])).values(),
    ];

    return (
      <>
        <Header />
        <Blog categories={categories} pagination={pagination} posts={posts} />
      </>
    );
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return <div>Une erreur s est produite lors du chargement des articles.</div>;
  }
};

export const revalidate = 10;

export default Page;
