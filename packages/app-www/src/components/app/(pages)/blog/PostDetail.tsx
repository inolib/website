import type { BlogPost } from "~/lib/strapi/api-client";
import { PostAuthor } from "./PostAuthor";
import MarkdownRenderer from "./MarkdownRenderer";
import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";

type PostDetailProps = {
  post: BlogPost;
};

export const PostDetail = ({ post }: PostDetailProps) => {
  const postImageUrl = post?.image?.url ? process.env.NEXT_PUBLIC_STRAPI_URL + post?.image.url : "/blog_default.webp";

  return (
    <article className="mx-auto w-full max-w-4xl px-8 py-12">
      {post.title && post.categories && post.excerpt && (
        <PostHeader categories={post.categories} excerpt={post.excerpt} title={post.title} />
      )}
      {post.author && <PostAuthor author={{ ...post?.author, publishedAt: post.createdAt }} />}
      {post.title && <PostImage imageUrl={postImageUrl} title={post.title} />}
      {post.content && <MarkdownRenderer content={post.content} />}
    </article>
  );
};
