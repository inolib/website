import { fetchPost } from "~/app/utils/fetchPolicy";
import ArticleContent from "~/components/app/ArticleContent";

type PageProps = {
  params: Promise<{ slug: string }>; 
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params; 
  
  const posts = await fetchPost(slug); 
  
  const post = Array.isArray(posts) ? posts[0] : posts;

  // Formatage de la date côté serveur a chnger coté strapi 
  if (post.date) {
    post.formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

 
  return <ArticleContent  key={slug} post={post} />;
};
export const revalidate = 0; 

export default Page;
