"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { Blog, Header } from "~/components/app/(pages)/blog";
import { Section } from "~/components/section";
import { strapiApi } from "~/lib/strapi";
import type {
  BlogSetting,
  BlogPost,
  Category,
  AuthorListResponseMetaPagination,
} from "~/lib/strapi/api-client";

const Page = () => {
  const [pageSettings, setPageSettings] = useState<BlogSetting | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [pagination, setPagination] = useState<AuthorListResponseMetaPagination | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const settingsRes = await strapiApi.blogSettings.getBlogSetting();
        const blogSettings = settingsRes?.data?.data;
        if (!blogSettings) throw new Error("Erreur: blogSettings manquant");
        setPageSettings(blogSettings);

        const postsRes = await strapiApi.blogPost.getBlogPosts(
          {
            sort: "id:desc",
            paginationPage: 1,
            paginationPageSize: blogSettings.pageSize,
          },
          {
            params: {
              filters: {},
              populate: ["image", "author", "author.avatar", "categories"],
            },
          },
        );
        const fetchedPosts = postsRes?.data?.data ?? [];
        const fetchedPagination = postsRes?.data?.meta?.pagination ?? null;
        setPosts(fetchedPosts);
        setPagination(fetchedPagination);

        const categoriesRes = await strapiApi.category.getCategories({
          sort: "id:desc",
          paginationPage: 1,
          paginationPageSize: 100,
        });
        const fetchedCategories = categoriesRes?.data?.data ?? [];
        setCategories([{ id: 0, name: "Tous les articles", slug: "all" }, ...fetchedCategories]);
      } catch (err) {
        console.error("Erreur lors du chargement des données :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const siteUrl = process.env.SITE_URL || "https://www.inolib.com";

  return (
    <>
      <Head>
        <title>Actualités | INOLIB</title>
        <meta name="description" content="Découvrez les dernières actualités et articles d’INOLIB." />
        <meta property="og:title" content="Actualités | INOLIB" />
        <meta property="og:description" content="Découvrez les dernières actualités et articles d’INOLIB." />
        <meta property="og:url" content={`${siteUrl}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="INOLIB" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content={`${siteUrl}/images/logos/inolib/inolib-blue.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Actualités | INOLIB" />
        <meta name="twitter:description" content="Découvrez les dernières actualités et articles d’INOLIB." />
        <meta name="twitter:image" content={`${siteUrl}/images/logos/inolib/inolib-blue.jpg`} />
      </Head>

      {loading || !pageSettings ? (
        <div>Chargement des articles...</div>
      ) : (
        <>
          <Header pageSettings={pageSettings} />
          {posts.length > 0 ? (
          <Section>
            <Blog
              pageSize={pageSettings.pageSize}
              initialPosts={posts}
              initialPagination={pagination}
              initialCategories={categories}
            />
          </Section>
          ) : (
            // Même espacement et structure que Section, sans le composant
            <div className="min-h-screen px-[4dvw] py-24 first-of-type:pt-4 xl:px-[8dvw]">
              <p className="text-center text-gray-500">Aucun article n'est disponible pour le moment.</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Page;
