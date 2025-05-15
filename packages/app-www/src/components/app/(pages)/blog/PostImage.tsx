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
      className="mt-6 w-full rounded-lg object-cover"
      height={450}
      src={imageUrl}
      width={800}
    />
  );
};
