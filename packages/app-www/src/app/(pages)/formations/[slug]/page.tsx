import type { Metadata } from "next";
import { PostDetail } from "~/components/app/(pages)/formations/PostDetail";

import { strapiApi } from "~/lib/strapi";

export const generateMetadata = async (props: { params: Promise<{ id: string }> }): Promise<Metadata> => {
  const params = await props.params;
  if (!params?.id) {
    return { title: "Formation non trouvé | INOLIB" };
  }

  try {
    const response = await strapiApi.formation.getFormations(
      { paginationLimit: 1 },
      {
        params: {
          filters: { id: { $in: [params.id] } },
          populate: ["illustration", "author", "author.avatar"],
        },
      },
    );

    const { data } = response.data;

    if (!data || data?.length !== 1) {
      return { title: "Formation non trouvé | INOLIB" };
    }
    const post = data[0];

    return { title: `${post.titre} | INOLIB` };
  } catch (error) {
    console.error("Erreur dans generateMetadata :", error);
    return { title: "Formation non trouvé | INOLIB" };
  }
};

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  try {
    const response = await strapiApi.formation.getFormations(
      { paginationLimit: 1 },
      {
        params: {
          filters: { id: { $in: [params.id] } },
          populate: ["illustration", "author", "author.avatar"],
        },
      },
    );

    if (!response.data.data) {
      return <div>Formation non trouvé</div>;
    }
    const post = response.data.data[0];

    return <PostDetail post={post} />;
  } catch (error) {
    console.error("Erreur lors du chargement de l'Formation :", error);
    return <div>Erreur lors du chargement de lFormation</div>;
  }
};

export default Page;
