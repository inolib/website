import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchValue } from "~/app/utils/fetchPolicy";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

// Variants configuration
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

// Récupération des données directement dans le composant
export const Values = async ({ _color }: ValuesProps) => {
  const { sectionClassName } = variants({ _color });

  const values = await fetchValue();

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{values.titre}</HeadingContent>
        <HeadingSubheading>{values.introduction}</HeadingSubheading>
      </Heading>

      <FlexGridList>
        {values.list.map((item: any) => (
          <FlexGridListItem key={item.id}>
            {item.image && item.image.url ? (
              <Image
                alt={item.image.alternativeText || "Image"}
                className="size-12"
                height={200} // Ajustez la hauteur
                src={`http://localhost:1337${item.image.url}`} // Assurez-vous d'avoir l'URL complète
                width={200} // Ajustez la largeur
              />
            ) : null}

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
