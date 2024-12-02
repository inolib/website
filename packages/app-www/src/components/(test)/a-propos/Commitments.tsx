import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchCommit } from "~/app/utils/fetchPolicy";
import { Heading, HeadingContent } from "~/components/heading";
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

type CommitmentsProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Commitments = async ({ _color }: CommitmentsProps) => {
  const { sectionClassName } = variants({ _color });

  const values = await fetchCommit();
  console.log("afficher les engagements", values);

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{values.titre}</HeadingContent>
      </Heading>

      <FlexGridList>
        {values.list.map((item) => (
          <FlexGridListItem key={item.id}>
            {/* Afficher l'image si elle est présente */}
            {item.image && item.image.url && (
              <Image alt="" className="size-12" height={40} src={`http://localhost:1337${item.image.url}`} width={40} />
            )}

            {/* Afficher les données de ListItem */}
            {item.ListItem.map((listItem, index) => (
              <div key={index}>
                {listItem.type === "heading" ? (
                  <p className="text-2xl font-bold">{listItem.children[0].text}</p>
                ) : listItem.type === "paragraph" ? (
                  <p>{listItem.children[0].text}</p>
                ) : null}
              </div>
            ))}
          </FlexGridListItem>
        ))}
      </FlexGridList>
    </Section>
  );
};
