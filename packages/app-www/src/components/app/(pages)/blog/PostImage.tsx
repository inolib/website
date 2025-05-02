import Image from "next/image";

type PostImageProps = {
  imageUrl?: string;
  title: string;
};

export const PostImage = ({ imageUrl, title }: PostImageProps) => {
  if (!imageUrl) return null;

  return (
    <Image
      alt={title}
      className="mx-auto mt-6 w-1/2 rounded-lg"
      height={250}
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
      width={250}
    />
  );
};
