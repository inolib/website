import { PostDetail } from "~/components/app/(pages)/blog/PostDetail";
import { strapiApi } from "~/lib/strapi";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { slug } = await params;

  const response = await strapiApi.blogPost.getBlogPosts(
    { paginationLimit: 1 },
    {
      params: {
        filters: { slug: { $eqi: slug } },
        populate: ["image", "author", "author.avatar", "categories"],
      },
    },
  );
  const post = response?.data?.data?.[0];

  if (!post) {
    return {
      title: "Article non trouvé | INOLIB",
      description: "Cet article du blog INOLIB est introuvable.",
    };
  }

  const siteUrl = process.env.SITE_URL || "https://www.inolib.com";
  const ogImage = post?.image?.url ? `${post.image.url}` : `${siteUrl}/images/logos/inolib/inolib-blue.jpg`;

  return {
    title: `${post.title} | INOLIB`,
    description: post.excerpt || "Découvrez un article du blog INOLIB.",
    openGraph: {
      title: `${post.title} | INOLIB`,
      description: post.excerpt || "Découvrez un article du blog INOLIB.",
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | INOLIB`,
      description: post.excerpt || "Découvrez un article du blog INOLIB.",
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: { params: any }) {
  const { slug } = await params;

  const response = await strapiApi.blogPost.getBlogPosts(
    { paginationLimit: 1 },
    {
      params: {
        filters: { slug: { $eqi: slug } },
        populate: ["image", "author", "author.avatar", "categories"],
      },
    },
  );

  const post = response?.data?.data?.[0];

  if (!post) {
    notFound();
  }

  return <>{post && <PostDetail post={post} />}</>;
}
