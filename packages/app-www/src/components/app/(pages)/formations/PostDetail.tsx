import type { Formation } from "~/lib/strapi/api-client";
import { Link } from "~/components/link";

import { PostHeader } from "../blog/PostHeader";
import { PostImage } from "../blog/PostImage";
import MarkdownRenderer from "../blog/MarkdownRenderer";

type PostDetailProps = {
  post: Formation;
};

export const PostDetail = ({ post }: PostDetailProps) => {
  const postImageUrl = post?.illustration?.url
    ? post?.illustration.url
    : process.env.NEXT_PUBLIC_STRAPI_URL + "/blog_default.webp";

  return (
    <article className="mx-auto w-full max-w-4xl px-8 py-12">
      {post.titre && post.description && <PostHeader categories={[]} excerpt={post.description} title={post.titre} />}
      {postImageUrl && <PostImage imageUrl={postImageUrl} alternativeText={post?.illustration?.alternativeText} />}
      {post.contenue && <MarkdownRenderer content={post.contenue} />}
      <Link _color="blue-900" className="my-5" _shape="button" href="/contact">
        Demander un devis
      </Link>
    </article>
  );
};
