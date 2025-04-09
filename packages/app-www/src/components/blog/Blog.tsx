"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Badge } from "~/components/badge";
import { Heading, type HeadingProps } from "~/components/headless";
import { Link } from "~/components/link";
import { formatDate } from "~/helpers";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";
import { strapiApi } from "~/lib/strapi";
import type { BlogPost } from "~/lib/strapi/api-client";

const fetchPosts = async (count: number) => {
  const postsRes = await strapiApi.blogPost.getBlogPosts(
    {
      sort: "id:desc",
      paginationPage: 1,
      paginationPageSize: count,
    },
    {
      params: {
        filters: {},
        populate: ["image", "author", "author.avatar", "categories"],
      },
    },
  );
  const fetchedPosts = postsRes?.data?.data ?? [];
  const fetchedPagination = postsRes?.data?.meta?.pagination ?? null;
  return fetchedPosts;
};

type BlogProps = {
  _count: number;
  _headingLevel: HeadingProps["_level"];
};

export const Blog = ({ _count, _headingLevel }: BlogProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    void (async () => {
      setPosts(await fetchPosts(_count));
    })();
  }, [_count]);

  return (
    <div className="grid grid-cols-1 gap-24 md:grid-cols-3 md:gap-16">
      {posts.map((item) => {
        const author = item?.author?.name;
        const categories = item.categories ? item.categories.map((term) => term.name) : [];
        const image = item.image;

        return (
          <div className="flex flex-col gap-4" key={item.id}>
            <div className="flex aspect-thumbnail w-full items-center justify-center overflow-hidden rounded-3xl">
              <Image alt="" height={image?.height} src={image?.url ?? ""} width={image?.width} />
            </div>

            <ul className="flex gap-4">
              {categories.map((item, index) => (
                <li key={index}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>

            <Heading _level={_headingLevel} className="text-2xl font-bold">
              <Link
                _color="transparent"
                _shape="link"
                className="text-left focus-visible:outline-black"
                href={`/blog/${item.slug}`}
              >
                {item.title}
              </Link>
            </Heading>

            <div className="line-clamp-3 [&>*:not(:first-child)]:hidden">{item.excerpt}</div>

            <Link _border="black" _color="white" _shape="button" href={`/blog/${item.slug}`}>
              <span>Lire l’article</span>
              <ArrowNarrowDownIcon className="-rotate-90 stroke-black" />
            </Link>

            <div>
              <p className="font-bold">{author}</p>
              {item.createdAt && <p>{formatDate(item.createdAt)}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
