// "use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import { PostDetail } from "~/components/app/(pages)/formations/PostDetail";
import { strapiApi } from "~/lib/strapi";

const Page = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await strapiApi.formation.getFormations(
          { paginationLimit: 1 },
          {
            params: {
              filters: { slug: { $eq: slug } },
              populate: ["illustration", "author", "author.avatar"],
            },
          },
        );

        const data = response.data.data;

        if (!data || data.length === 0) {
          setError("Formation non trouvée");
        } else {
          setPost(data[0]);
        }
      } catch (err) {
        console.error("Erreur lors du chargement de la formation:", err);
        setError("Erreur lors du chargement de la formation");
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <p role="status" aria-live="polite">
        Chargement de la formation...
      </p>
    );
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  // Dynamic title and meta
  const title = post ? `${post.title} | INOLIB` : "Formation non trouvée | INOLIB";
  const description = post?.description || "Découvrez nos formations et programmes de qualité.";
  const siteUrl = process.env.SITE_URL || "https://www.inolib.com";
  const ogImage = post?.illustration?.url
    ? `${post.illustration.url}`
    : `${siteUrl}/images/logos/inolib/inolib-blue.jpg`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/formations/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      {post ? <PostDetail post={post} /> : null}
    </>
  );
};

export default Page;
