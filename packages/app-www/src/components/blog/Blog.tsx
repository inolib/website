"use client";

import Image from "next/image";

import { fetchPosts } from "~/app/utils/fetchPolicy";
import { Badge } from "~/components/badge";
import { Heading, type HeadingProps } from "~/components/headless";
import { Link } from "~/components/link";
import { formatDate } from "~/helpers";

import ArrowNarrowRightIcon from "#/images/icons/arrow-narrow-right.svg";

type Post = {
  id: number;
  titre: string;
  slug: string;
  date: string;
  contenu: Array<{
    type: string;
    children: Array<{
      type: string;
      text: string;
    }>;
  }>;
  Categorie: string;
  Auteur: string | null;
  image: {
    url: string;
    alternativeText: string | null;
  };
};

type BlogProps = {
  _count: number;
  _headingLevel: HeadingProps["_level"];
};

export const Blog = async ({ _count, _headingLevel }: BlogProps) => {
  const posts: Post[] = await fetchPosts(_count);

  return (
    <div className="grid grid-cols-1 gap-24 md:grid-cols-3 md:gap-16">
      {posts.map((item) => {
        const author = item.Auteur;
        const categories = item.Categorie;
        const image = item.image;

        const firstParagraph = item.contenu?.find((block) => block.type === "paragraph")?.children[0]?.text || "";

        return (
          <div className="flex flex-col gap-4" key={item.id}>
            {image && (
              <div className="flex aspect-thumbnail w-full items-center justify-center overflow-hidden rounded-3xl">
                <Image alt="" height={500} src={`http://strapi:1337${image.url}`} width={800} />
              </div>
            )}

            <ul className="flex gap-4">
              <li>
                <Badge>{categories}</Badge>
              </li>
            </ul>

            <Heading _level={_headingLevel} className="text-2xl font-bold">
              <Link
                _color="transparent"
                _shape="link"
                className="text-left focus-visible:outline-black"
                href={`/blog/${item.slug}`}
              >
                {item.titre}
              </Link>
            </Heading>

            <div className="line-clamp-3">{firstParagraph}</div>

            <Link _border="black" _color="white" _shape="button" href={`/blog/${item.slug}`}>
              <span>Lire l’article</span>
              <ArrowNarrowRightIcon className="stroke-black" />
            </Link>

            <div>
              <p className="font-bold">{author}</p>
              <p>{formatDate(item.date)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
