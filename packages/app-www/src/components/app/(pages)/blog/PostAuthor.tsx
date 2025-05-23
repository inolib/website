import Image from "next/image";

import { formatDate } from "~/helpers";

type PostAuthorProps = {
  author: {
    name?: string;
    publishedAt?: string;
    avatar?: { url?: string };
  };
};

export const PostAuthor = ({ author }: PostAuthorProps) => {
  return (
    <div className="mt-4 flex items-center">
      <Image
        alt={author?.name || "Nom non disponible"}
        className="size-10 rounded-full object-cover"
        height={40}
        src={author?.avatar?.url ? author?.avatar.url : process.env.NEXT_PUBLIC_STRAPI_URL + "/blog_default.webp"}
        width={40}
      />
      <div className="ml-3">
        <p className="text-sm font-semibold text-gray-900">{author.name}</p>
        <p className="text-xs text-gray-500">
          {author.publishedAt ? formatDate(author.publishedAt) : "Date non disponible"}
        </p>
      </div>
    </div>
  );
};
