import Image from "next/image";
import Link from "next/link";
import { formatDate } from "~/helpers";
import type { BlogPost } from "~/lib/strapi/api-client";

export const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const { slug, title, excerpt, createdAt, image, categories, author } = post;

  // Fallback values
  const postTitle = title || "Untitled Post";
  const postExcerpt = excerpt || "No excerpt available.";
  const postDate = createdAt ? formatDate(createdAt) : "Date not available";
  const postImageUrl = image?.url ? image.url : (process.env.NEXT_PUBLIC_STRAPI_URL || "") + "/blog_default.webp";

  const authorName = author?.name || "Auteur inconnu";
  const authorAvatar = author?.avatar?.url
    ? author.avatar.url
    : process.env.NEXT_PUBLIC_STRAPI_URL + "/default-avatar.png";
  const postCategories = categories?.length ? categories : [{ id: 0, name: "Uncategorized" }];

  return (
    <div className="overflow-hidden rounded-2xl p-4">
      <Link href={`/blog/${slug}`} passHref>
        <div>
          {/* Post Image */}
          <Image
            alt={postTitle}
            className="h-[200px] w-full rounded object-cover"
            height={200}
            src={postImageUrl}
            width={400}
            priority
          />

          <div className="mt-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {postCategories.map((category) => (
                <span
                  key={category.id}
                  className="inline-flex items-center justify-center rounded-full bg-[#CBE0E4] px-4 py-1 text-xs font-medium text-[#111F22]"
                >
                  {category.name}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="mt-2 text-[24px] font-semibold leading-[33px] text-[#111F22]">{postTitle}</h2>

            {/* Excerpt */}
            {/* <p className="mt-2 line-clamp-3 text-[16px] font-medium leading-[26px] text-[#525252]">{postExcerpt}</p> */}

            {/* Author Info */}
            <div className="mt-4 flex items-center gap-3">
              <Image
                alt={authorName}
                className="size-10 rounded-full object-cover"
                height={40}
                src={authorAvatar}
                width={40}
                priority
              />
              {/* <div className="flex flex-col">
                <p className="text-[14px] font-semibold leading-[20px] text-[#111F22]">{authorName}</p>
                <p className="text-[14px] font-normal leading-[20px] text-[#525252]">{postDate}</p> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
