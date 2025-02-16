import type { BlogPost } from "~/types/blog";

import { PostAuthor } from "./PostAuthor";
import { PostContent } from "./PostContent";
import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";

type PostDetailProps = {
  post: BlogPost;
};

export const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <article className="mx-auto w-full max-w-4xl px-8 py-12">
      <PostHeader categories={post.categories} excerpt={post.excerpt} title={post.title} />
      <PostAuthor author={post.author} />
      <PostImage imageUrl={post.image?.[0]?.url} title={post.title} />
      <PostContent content={post.content} />
    </article>
  );
};
