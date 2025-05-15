// "use client";

import type { Metadata } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Blog, Header } from "~/components/app/(pages)/blog";
import { Section } from "~/components/section";
import { strapiApi } from "~/lib/strapi";
import type { BlogSetting, BlogPost, Category, AuthorListResponseMetaPagination } from "~/lib/strapi/api-client";

export const metadata: Metadata = {
  title: "Actualités | INOLIB",
  description: "Découvrez les dernières actualités et articles d’INOLIB.",
  openGraph: {
    title: "Actualités | INOLIB",
    description: "Découvrez les dernières actualités et articles d’INOLIB.",
    url: `${process.env.SITE_URL}/blog`,
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    images: [
      {
        url: `${process.env.SITE_URL}/images/logos/inolib/inolib-blue.jpg`,
        width: 1200,
        height: 630,
        alt: "INOLIB - Actualités",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Actualités | INOLIB",
    description: "Découvrez les dernières actualités et articles d’INOLIB.",
    images: [`${process.env.SITE_URL}/images/logos/inolib/inolib-blue.jpg`],
  },
};

const Page = async () => {
  // const [pageSettings, setPageSettings] = useState<BlogSetting | null>(null);
  // const [posts, setPosts] = useState<BlogPost[]>([]);
  // const [pagination, setPagination] = useState<AuthorListResponseMetaPagination | null>(null);
  // const [categories, setCategories] = useState<Category[]>([]);
  // const [loading, setLoading] = useState(true);

  let pageSettings: BlogSetting | null = null;
  let posts: BlogPost[] = [];
  let pagination: AuthorListResponseMetaPagination | null = null;
  let categories: Category[] = [];

  try {
    // 1. SETTINGS BLOG
    const settingsRes = await strapiApi.blogSettings.getBlogSetting();
    const blogSettings = settingsRes?.data?.data;
    if (!blogSettings) throw new Error("Erreur: blogSettings manquant");
    pageSettings = blogSettings;

    // 2. POSTS
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
    posts = postsRes?.data?.data ?? [];
    pagination = postsRes?.data?.meta?.pagination ?? null;

    // 3. CATÉGORIES
    const categoriesRes = await strapiApi.category.getCategories({
      sort: "id:desc",
      paginationPage: 1,
      paginationPageSize: 100,
    });
    categories = categoriesRes?.data?.data ?? [];
    categories = [{ id: 0, name: "Tous les articles", slug: "all" }, ...categories];
  } catch (err) {
    // Affiche un fallback si besoin, ici on peut juste laisser le render "chargement"
    console.error("Erreur lors du chargement des données :", err);
  }

  // Loading inutile, les données sont obligatoirement chargées AVANT ce return
  if (!pageSettings) {
    return <div>Impossible de charger les paramètres du blog.</div>;
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const settingsRes = await strapiApi.blogSettings.getBlogSetting();
  //       const blogSettings = settingsRes?.data?.data;
  //       if (!blogSettings) throw new Error("Erreur: blogSettings manquant");
  //       setPageSettings(blogSettings);

  //       const postsRes = await strapiApi.blogPost.getBlogPosts(
  //         {
  //           sort: "id:desc",
  //           paginationPage: 1,
  //           paginationPageSize: blogSettings.pageSize,
  //         },
  //         {
  //           params: {
  //             filters: {},
  //             populate: ["image", "author", "author.avatar", "categories"],
  //           },
  //         },
  //       );
  //       const fetchedPosts = postsRes?.data?.data ?? [];
  //       const fetchedPagination = postsRes?.data?.meta?.pagination ?? null;
  //       setPosts(fetchedPosts);
  //       setPagination(fetchedPagination);

  //       const categoriesRes = await strapiApi.category.getCategories({
  //         sort: "id:desc",
  //         paginationPage: 1,
  //         paginationPageSize: 100,
  //       });
  //       const fetchedCategories = categoriesRes?.data?.data ?? [];
  //       setCategories([{ id: 0, name: "Tous les articles", slug: "all" }, ...fetchedCategories]);
  //     } catch (err) {
  //       console.error("Erreur lors du chargement des données :", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const siteUrl = process.env.SITE_URL || "https://www.inolib.com";

  return (
    <>
      {/* <Head>
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
      </Head> */}

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
    </>
  );
};

export default Page;
