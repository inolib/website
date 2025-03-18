import type { Metadata } from "next";
import { PostDetail } from "~/components/app/(pages)/blog/PostDetail";

import { strapiApi } from "~/lib/strapi";

export const generateMetadata = async (props: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const params = await props.params;
  if (!params?.slug) {
    return { title: "Article non trouvé | INOLIB" };
  }

  try {
    const response = await strapiApi.blogPost.getBlogPosts({
      paginationLimit: 1,
      filters: { slug: { $eqi: params.slug } },
      populate: "*",
    });
    const { data } = response.data;

    if (!data || data?.length !== 1) {
      return { title: "Article non trouvé | INOLIB" };
    }
    const post = data[0];

    return { title: `${post.title} | INOLIB` };
  } catch (error) {
    console.error("Erreur dans generateMetadata :", error);
    return { title: "Article non trouvé | INOLIB" };
  }
};

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const { slug } = params;
  try {
    const response = await strapiApi.blogPost.getBlogPosts(
      { paginationLimit: 1 },
      {
        params: {
          filters: { slug: { $eqi: params.slug } },
          populate: ["image", "author", "author.avatar", "categories"],
        },
      },
    );

    if (!response.data.data) {
      return <div>Article non trouvé</div>;
    }
    const post = response.data.data[0];

    return <PostDetail post={post} />;
  } catch (error) {
    console.error("Erreur lors du chargement de l'article :", error);
    return <div>Erreur lors du chargement de larticle</div>;
  }
};

export default Page;
