import Image from "next/image";

type PostImageProps = {
  imageUrl?: string;
  alternativeText?: string;
};

export const PostImage = ({ imageUrl, alternativeText }: PostImageProps) => {
  if (!imageUrl) return null;

  alternativeText = alternativeText || "";

  return (
    <Image
      alt={alternativeText}
      className="mx-auto mt-6 rounded-lg object-cover"
      height={250}
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
      width={250}
    />
  );
};
