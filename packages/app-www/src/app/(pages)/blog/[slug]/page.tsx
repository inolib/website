// "use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { useParams } from "next/navigation";

import { PostDetail } from "~/components/app/(pages)/blog/PostDetail";
import { strapiApi } from "~/lib/strapi";
import type { BlogPost } from "~/lib/strapi/api-client";

const Page = () => {
  const { slug } = useParams() as { slug: string };
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await strapiApi.blogPost.getBlogPosts(
          { paginationLimit: 1 },
          {
            params: {
              filters: { slug: { $eqi: slug } },
              populate: ["image", "author", "author.avatar", "categories"],
            },
          },
        );
        const postData = response?.data?.data?.[0];

        if (!postData) {
          setNotFound(true);
        } else {
          setPost(postData);
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'article :", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    } else {
      setNotFound(true);
      setLoading(false);
    }
  }, [slug]);

  const title = post ? `${post.title} | INOLIB` : "Article non trouvé | INOLIB";
  const description = post?.excerpt || "Découvrez un article du blog INOLIB.";
  const siteUrl = process.env.SITE_URL || "https://www.inolib.com";
  const ogImage = post?.image?.url ? `${post.image.url}` : `${siteUrl}/images/logos/inolib/inolib-blue.jpg`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      {loading && <div>Chargement de l’article...</div>}
      {notFound && !loading && <div>Article non trouvé</div>}
      {post && !loading && <PostDetail post={post} />}
    </>
  );
};

export default Page;
