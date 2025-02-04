import Image from "next/image";

type PostImageProps = {
  imageUrl?: string;
  title: string;
};

export const PostImage = ({ imageUrl, title }: PostImageProps) => {
  if (!imageUrl) return null;

  return <Image alt={title} className="mt-6 w-full rounded-lg object-cover" height={450} src={imageUrl} width={800} />;
};
