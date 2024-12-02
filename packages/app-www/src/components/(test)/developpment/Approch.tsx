import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchApprochDev } from "~/app/utils/fetchPolicy";
import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import {
  Highlights,
  HighlightsContent,
  HighlightsIllustration,
  HighlightsListItem,
  HighlightsUnorderedList,
} from "~/components/highlights";
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

type ApproachProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Approach = async ({ _color }: ApproachProps) => {
  const { sectionClassName } = variants({ _color });

  // Récupération des données dynamiques
  const approach = await fetchApprochDev();

  const services = [
    {
      title: approach.subTitle,
      highlights: approach.highlights.map((highlight) => ({
        icon: highlight.image ? <Image alt="" height={64} src={highlight.image} width={64} /> : <></>,
        title: highlight.title,
        description: highlight.description,
      })),
      illustration: approach.image,
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{approach.title}</HeadingContent>
        <HeadingSubheading>{approach.description}</HeadingSubheading>
      </Heading>

      {services.map((item, index) => (
        <Highlights _isReversed={index % 2 === 0} key={index}>
          <HighlightsContent>
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>{item.title}</HeadingContent>
            </Heading>

            <HighlightsUnorderedList>
              {item.highlights.map((highlight, idx) => (
                <HighlightsListItem key={idx}>
                  <BoxCard>
                    <BoxCardIcon className="my-auto">{highlight.icon}</BoxCardIcon>

                    <BoxCardContent className="gap-4">
                      <p className="text-xl font-bold">{highlight.title}</p>
                      <p>{highlight.description}</p>
                    </BoxCardContent>
                  </BoxCard>
                </HighlightsListItem>
              ))}
            </HighlightsUnorderedList>
          </HighlightsContent>

          <HighlightsIllustration>
            {item.illustration && <Image alt="" className="h-96" height={100} src={item.illustration} width={150} />}
          </HighlightsIllustration>
        </Highlights>
      ))}
    </Section>
  );
};
