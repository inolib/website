import Image from "next/image";

type PostImageProps = {
  imageUrl?: string;
  alternativeText?: string | null;
};

export const PostImage = ({ imageUrl, alternativeText }: PostImageProps) => {
  if (!imageUrl) return null;

  console.log("imageUrl", imageUrl);

  console.log(process.env.NEXT_PUBLIC_STRAPI_URL);

  alternativeText ? null : "";

  return (
    <Image
      alt={alternativeText ?? ""}
      className="mx-auto mt-6 w-1/2 rounded-lg"
      height={250}
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
      width={250}
    />
  );
};
