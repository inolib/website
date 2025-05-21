import { PostDetail } from "~/components/app/(pages)/formations/PostDetail";
import { strapiApi } from "~/lib/strapi";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { slug } = await params;

  const response = await strapiApi.formation.getFormations(
    { paginationLimit: 1 },
    {
      params: {
        filters: { slug: { $eq: slug } },
        populate: ["illustration", "author", "author.avatar"],
      },
    },
  );

  const formation = response.data.data?.[0];

  if (!formation) {
    return {
      title: "Formation non trouvée | INOLIB",
      description: "Cette formation est introuvable.",
    };
  }

  const siteUrl = process.env.SITE_URL || "https://www.inolib.com";
  const ogImage = formation.illustration?.url
    ? `${formation.illustration.url}`
    : `${siteUrl}/images/logos/inolib/inolib-blue.jpg`;

  const description = formation.description || "Découvrez nos formations et programmes de qualité.";

  return {
    title: `${formation.titre} | INOLIB`,
    description,
    openGraph: {
      title: `${formation.titre} | INOLIB`,
      description,
      url: `${siteUrl}/formations/${slug}`,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: formation.titre,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formation.titre} | INOLIB`,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: { params: any }) {
  const { slug } = await params;

  const response = await strapiApi.formation.getFormations(
    { paginationLimit: 1 },
    {
      params: {
        filters: { slug: { $eq: slug } },
        populate: ["illustration", "author", "author.avatar"],
      },
    },
  );
  const formation = response.data.data?.[0];

  if (!formation) {
    notFound();
  }

  return <>{formation && <PostDetail post={formation} />}</>;
}
