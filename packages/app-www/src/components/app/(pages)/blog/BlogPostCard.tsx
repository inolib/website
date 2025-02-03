import Image from "next/image";
import Link from "next/link";

import { formatDate } from "~/helpers";
import type { BlogPost } from "~/types/blog";

export const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="overflow-hidden rounded-2xl p-4">
      <Link href={`/blog/${post.slug}`} passHref>
        <Image
          alt={post.title}
          className="h-[200px] w-full rounded object-cover"
          height={200}
          src={process.env.NEXT_PUBLIC_STRAPI_URL + post.image?.[0]?.url}
          width={400}
        />
        <div className="mt-4">
          <span className="inline-flex items-center justify-center rounded-full bg-[#CBE0E4] px-4 py-1 text-xs font-medium text-[#111F22]">
            {post.categories[0]?.name || "Uncategorized"}
          </span>
          <h2 className="mt-2 font-['Manrope'] text-[24px] font-semibold leading-[33px] text-[#111F22]">
            {post.title}
          </h2>
          <p className="mt-2 line-clamp-3 font-['Manrope'] text-[16px] font-medium leading-[26px] text-[#525252]">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <Image
              alt={post.author.name}
              className="size-10 rounded-full object-cover"
              height={40}
              src={process.env.NEXT_PUBLIC_STRAPI_URL + post.image?.[0]?.url || "https://via.placeholder.com/40"}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-[14px] font-semibold leading-[20px] text-[#111F22]">{post.author.name}</p>
              <p className="text-[14px] font-normal leading-[20px] text-[#525252]">
                {post.author.publishedAt ? formatDate(post.author.publishedAt) : "Date non disponible"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
