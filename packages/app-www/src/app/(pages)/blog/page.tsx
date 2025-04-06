import type { Metadata } from "next";
import { Blog, Header } from "~/components/app/(pages)/blog";
import { Section } from "~/components/section";
import { strapiApi } from "~/lib/strapi";
import type { BlogSetting } from "~/lib/strapi/api-client";

export const metadata: Metadata = {
  title: "Actualités | INOLIB",
  description: "Découvrez les dernières actualités et articles d’INOLIB.",
  openGraph: {
    title: "Actualités | INOLIB",
    description: "Découvrez les dernières actualités et articles d’INOLIB.",
    url: "${process.env.SITE_URL}/blog",
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    images: [
      {
        url: "${process.env.SITE_URL}/images/logos/inolib/inolib-blue.jpg",
        width: 1200,
        height: 630,
        alt: "INOLIB Default Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Actualités | INOLIB",
    description: "Découvrez les dernières actualités et articles d’INOLIB.",
    images: ["${process.env.SITE_URL}/images/logos/inolib/inolib-blue.jpg"],
  },
};

export const revalidate = 10; // Revalidate static content every 10 seconds

// Fetch initial blog settings
const getBlogSettings = async (): Promise<BlogSetting> => {
  const response = await strapiApi.blogSettings.getBlogSetting();
  if (!response.data.data) {
    throw new Error("Erreur lors de la récupération des configurations du blog");
  }
  return response.data.data;
};

// Fetch initial blog posts server-side
const getInitialBlogs = async (pageSize: number) => {
  try {
    const response = await strapiApi.blogPost.getBlogPosts(
      {
        sort: "id:desc",
        paginationPage: 1,
        paginationPageSize: pageSize,
      },
      {
        params: {
          filters: {},
          populate: ["image", "author", "author.avatar", "categories"],
        },
      },
    );
    return {
      posts: response.data.data ?? [],
      pagination: response.data.meta?.pagination ?? null,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des articles :", error);
    return { posts: [], pagination: null };
  }
};

// Fetch initial categories server-side
const getInitialCategories = async () => {
  try {
    const response = await strapiApi.category.getCategories({
      sort: "id:desc",
      paginationPage: 1,
      paginationPageSize: 100,
    });
    return [{ id: 0, name: "Tous les articles" }, ...(response.data.data ?? [])];
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories :", error);
    return [{ id: 0, name: "Tous les articles" }];
  }
};

const Page = async () => {
  const pageSettings = await getBlogSettings();
  const { posts, pagination } = await getInitialBlogs(pageSettings.pageSize);
  const categories = await getInitialCategories();

  return (
    <>
      <Header pageSettings={pageSettings} />
      <Section>
        <Blog
          pageSize={pageSettings.pageSize}
          initialPosts={posts}
          initialPagination={pagination}
          initialCategories={categories}
        />
      </Section>
    </>
  );
};

export default Page;
