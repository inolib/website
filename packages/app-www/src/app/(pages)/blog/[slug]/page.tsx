// import type { Metadata } from "next";

import { PostDetail } from "~/components/app/PostDetail";
import { StrapiService } from "~/lib/api/strapi";
import type { BlogPost } from "~/types/blog";

// export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
//   if (!params?.slug) {
//     return { title: "Article non trouvé | INOLIB" };
//   }

//   try {
//     const post: BlogPost = (await StrapiService.getBlogPostBySlug(params.slug, "*")) as BlogPost;

//     if (!post) {
//       return { title: "Article non trouvé | INOLIB" };
//     }

//     return { title: `${post.title} | INOLIB` };
//   } catch (error) {
//     console.error("Erreur dans generateMetadata :", error);
//     return { title: "Article non trouvé | INOLIB" };
//   }
// };

/**
 *
 */
export async function generateStaticParams() {
  try {
    const posts = (await StrapiService.getBlogPosts("*")) as BlogPost[];

    // Générer les slugs pour chaque article
    return posts.map((post: BlogPost) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Erreur lors de la génération des slugs :", error);
    return [];
  }
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  if (!slug) {
    return <div>Article non trouvé</div>;
  }

  try {
    const post = (await StrapiService.getBlogPostBySlug(slug, "*")) as BlogPost[];
    if (!post) {
      return <div>Article non trouvé</div>;
    }
    return <PostDetail post={post} />;
  } catch (error) {
    console.error("Erreur lors du chargement de l'article :", error);
    return <div>Erreur lors du chargement de larticle</div>;
  }
};

export default Page;
