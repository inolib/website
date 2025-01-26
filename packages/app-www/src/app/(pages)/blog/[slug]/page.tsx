import type { Metadata } from "next";

import { PostDetail } from "~/components/app/PostDetail";
import { StrapiService } from "~/lib/api/strapi";
import type { BlogPost } from "~/types/blog";

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  if (!params?.slug) {
    return { title: "Article non trouvé | INOLIB" };
  }

  try {
    const post: BlogPost = (await StrapiService.getBlogPostBySlug(params.slug, "*")) as BlogPost;

    if (!post) {
      return { title: "Article non trouvé | INOLIB" };
    }

    return { title: `${post.title} | INOLIB` };
  } catch (error) {
    console.error("Erreur dans generateMetadata :", error);
    return { title: "Article non trouvé | INOLIB" };
  }
};
export const generateStaticParams = async () => {
  try {
    const posts = (await StrapiService.getBlogPosts("*")) as BlogPost[];

    const params = posts.map((post) => ({
      slug: post.slug,
    }));

    return params;
  } catch (error) {
    console.error("Erreur dans getStaticPaths :", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
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
