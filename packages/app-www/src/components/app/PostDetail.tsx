// import Image from "next/image";

import { formatDate } from "~/helpers";
import type { BlogPost } from "~/types/blog";

type PostDetailProps = {
  post: BlogPost[]; // Le post est un tableau
};

export const PostDetail = ({ post }: PostDetailProps) => {
  const singlePost = post[0];

  return (
    <article className="mx-auto w-full max-w-4xl px-8 py-12">
      <h1 className="mt-4 text-3xl font-bold">{singlePost.title}</h1>
      <p className="mt-2">{singlePost.excerpt}</p>

      <div className="mt-4 flex items-center">
        {/* <Image
          alt=""
          className="rounded-full"
          height={40}
          src={process.env.NEXT_PUBLIC_STRAPI_URL + post.author?.image?.url || "/default-avatar.png"}
          width={40}
        /> */}
        <div className="ml-3">
          <p className="text-sm font-medium"></p>
          {singlePost?.author.publishedAt ? formatDate(singlePost.author.publishedAt) : "Date non disponible"}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {singlePost?.content.map((paragraph, index) => (
          <div className="rounded-lg p-4" key={index}>
            {paragraph.children.map((child, childIndex) => (
              <p className="text-lg" key={childIndex}>
                {child.text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
};
