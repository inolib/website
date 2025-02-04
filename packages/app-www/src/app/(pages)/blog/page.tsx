import type { Metadata } from "next";

import { Blog, Header } from "~/components/app/(pages)/blog";
import { Section } from "~/components/section";
import { StrapiService } from "~/lib/api/strapi";
import type { BlogPageProps } from "~/types/blog";

export const metadata: Metadata = {
  title: "Actualités | INOLIB",
};

const Page = async () => {
  try {
    const { posts, pagination } = (await StrapiService.getBlogPosts("*", 1, 1)) as BlogPageProps;

    return (
      <>
        <Header />
        <Section>
          <Blog pagination={pagination} posts={posts} />
        </Section>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return <div>Une erreur s est produite lors du chargement des articles.</div>;
  }
};

export const revalidate = 10;

export default Page;
