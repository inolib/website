import { log } from "node:console";

import type { VariantProps } from "tailwind-variants";

import { fetchWhy } from "~/app/utils/fetchPolicy";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import FileFramedIcon from "#/images/icons/framed/file-05.svg";
import FileSearchFramedIcon from "#/images/icons/framed/file-search-02.svg";
import SwitchHorizontalFramedIcon from "#/images/icons/framed/switch-horizontal-01.svg";

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

export const Why = async ({ _color }: WhyProps) => {
  const { sectionClassName } = variants({ _color });

  const why = await fetchWhy();
  console.log("afficher le fetch why", why);

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Pourquoi choisir INOLIB Academy ?</HeadingContent>
        <HeadingSubheading>Votre réussite est notre priorité.</HeadingSubheading>
      </Heading>

      <FlexGridList>
        {why.map((item, index) => (
          <FlexGridListItem key={index}>
            {item.imageUrl && <img alt="" className="size-14" src={item.imageUrl} />}
            <p className="text-2xl font-bold">{item.title}</p>
            <p>{item.description}</p>
          </FlexGridListItem>
        ))}
      </FlexGridList>
    </Section>
  );
};
