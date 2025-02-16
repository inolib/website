import type { Metadata } from "next";

import { PostDetail } from "~/components/app/(pages)/blog/PostDetail";
import { StrapiService } from "~/lib/api/strapi";
import type { BlogPost } from "~/types/blog";

export const generateMetadata = async (props: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const params = await props.params;
  if (!params?.slug) {
    return { title: "Article non trouvé | INOLIB" };
  }

  try {
    const post: BlogPost = (await StrapiService.getBlogPostBySlug(params.slug)) as BlogPost;

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
    const { posts }: { posts: BlogPost[] } = (await StrapiService.getBlogPosts("*", 1, 9)) as { posts: BlogPost[] };
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

const Page = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const { slug } = params;
  try {
    const post = (await StrapiService.getBlogPostBySlug(slug)) as BlogPost;

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
