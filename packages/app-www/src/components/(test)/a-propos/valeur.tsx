"use client";
import { useEffect, useState } from "react";
import type { VariantProps } from "tailwind-variants";

import { fetchValue } from "~/app/utils/fetchPolicy";
import { Loader2 } from "lucide-react";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

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
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     *
     */
    async function loadValues() {
      try {
        setIsLoading(true);
        const data = await fetchValue();

        setValues(data);
        console.log("affichage valeurs c", data);
      } catch {
        setError("Failed to load values");
      } finally {
        setIsLoading(false);
      }
    }

    loadValues();
  }, []);

  if (isLoading) {
    return (
      <Section className={`py-16 ${sectionClassName}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin size-8 text-blue-600" />
          </div>
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section className={`py-16 ${sectionClassName}`}>
        <div className="container mx-auto px-4">
          <p className="text-center text-red-600">{error}</p>
        </div>
      </Section>
    );
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
