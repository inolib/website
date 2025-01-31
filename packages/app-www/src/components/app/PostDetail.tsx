import Image from "next/image";

import { formatDate } from "~/helpers";
import type { BlogPost } from "~/types/blog";

type PostDetailProps = {
  post: BlogPost; // Le post est un tableau
};

export const PostDetail = ({ post }: PostDetailProps) => {
  console.log("single post", post);

  return (
    <article className="mx-auto w-full max-w-4xl px-8 py-12">
      {/* ✅ Header de l'article */}
      <header className="mt-4">
        <div className="flex gap-2">
          {post.categories.map((category) => (
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700" key={category.id}>
              {category.name}
            </span>
          ))}
        </div>
        <h1 className="text-gray-900 mt-4 text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-600 mt-2">{post.excerpt}</p>

        <div className="mt-4 flex items-center">
          <Image
            alt={post.author.name}
            className="size-10 rounded-full object-cover"
            height={40}
            src={process.env.NEXT_PUBLIC_STRAPI_URL + post.author.avatar.url}
            width={40}
          />

          <div className="ml-3">
            <p className="text-gray-900 text-sm font-semibold">{post.author.name}</p>
            <p className="text-gray-500 text-xs">
              {post.author.publishedAt ? formatDate(post.author.publishedAt) : "Date non disponible"}
            </p>
          </div>
        </div>
      </header>

      {/* ✅ Image principale */}
      {post.image?.[0]?.url && (
        <Image
          alt={post.title}
          className="mt-6 w-full rounded-lg object-cover"
          height={450}
          src={post.image[0].url}
          width={800}
        />
      )}

      {/* ✅ Contenu de l'article */}
      <section className="mt-8 space-y-4">
        {post.content.map((paragraph, index) => (
          <div className="rounded-lg p-4" key={index}>
            {paragraph.children.map((child, childIndex) => (
              <p className="text-lg" key={childIndex}>
                {child.text}
              </p>
            ))}
          </div>
        ))}
      </section>
    </article>
  );
};
