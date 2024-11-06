"use client";
import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";
import { useValues } from "~/hooks/useValue";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col gap-24",
  },
  variants: {
    _color: {
      white: {
        sectionClassName: "bg-white",
      },
      "neutral-50": {
        sectionClassName: "bg-neutral-50",
      },
    },
  },
});

type Variants = VariantProps<typeof variants>;

type ValuesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Values = ({ _color }: ValuesProps) => {
  const { sectionClassName } = variants({ _color });
  const { values, isLoading, error } = useValues();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading values: {error}</p>;
  }

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{values[0]?.titre || "Nos valeurs"}</HeadingContent>
        <HeadingSubheading>
          {values[0]?.introduction || "Ces valeurs guident notre travail au quotidien"}
        </HeadingSubheading>
      </Heading>

      <FlexGridList>
        {values[0]?.list.map((item: any, index: number) => (
          <FlexGridListItem key={index}>
            <p className="text-2xl font-bold">
              {item.ListItem.find((listItem: any) => listItem.type === "heading")?.children[0].text}
            </p>
            <p>{item.ListItem.find((listItem: any) => listItem.type === "paragraph")?.children[0].text}</p>
          </FlexGridListItem>
        ))}
      </FlexGridList>
    </Section>
  );
};
