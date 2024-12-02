import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchWhyDev } from "~/app/utils/fetchPolicy";
import { RoundedIcon } from "~/components/(test)/icon/RoundedIcons";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col items-center gap-24",
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

type WhyProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Why1 = async ({ _color }: WhyProps) => {
  const { sectionClassName } = variants({ _color });

  const why = await fetchWhyDev();

  console.log("affiche pourquoi", why);

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{why.titre}</HeadingContent>
        <HeadingSubheading>Votre réussite est notre priorité.</HeadingSubheading>
      </Heading>

      <FlexGridList>
        {why.listItems.map((item, index) => (
          <FlexGridListItem key={index}>
            <RoundedIcon className="size-12 bg-blue-300">
              <RoundedIcon className="size-9 bg-blue-900">
                <Image alt="" height={60} src={item.icon} width={60} />
              </RoundedIcon>
            </RoundedIcon>

            <p className="text-2xl font-bold">{item.title}</p>
            <p>{item.description}</p>
          </FlexGridListItem>
        ))}
      </FlexGridList>
    </Section>
  );
};
