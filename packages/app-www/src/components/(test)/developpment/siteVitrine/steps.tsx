import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchSteps } from "~/app/utils/fetchPolicy";
import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import {
  Highlights,
  HighlightsContent,
  HighlightsIllustration,
  HighlightsListItem,
  HighlightsOrderedList,
} from "~/components/highlights";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import developmentIllustration from "#/images/illustrations/development.svg?url";

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

type StepsProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Steps = async ({ _color }: StepsProps) => {
  const { sectionClassName } = variants({ _color });

  const { titre, text, contenu } = await fetchSteps();

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{titre}</HeadingContent>
        <HeadingSubheading>{text}</HeadingSubheading>
      </Heading>

      <Highlights _isReversed>
        <HighlightsContent>
          <HighlightsOrderedList>
            {contenu.map((item, index) => (
              <HighlightsListItem key={index}>
                <BoxCard>
                  <BoxCardIcon className="my-auto">{item.icon}</BoxCardIcon>

                  <BoxCardContent className="gap-4">
                    <p className="text-xl font-bold">{item.titre}</p>
                    <p>{item.text}</p>
                  </BoxCardContent>
                </BoxCard>
              </HighlightsListItem>
            ))}
          </HighlightsOrderedList>
        </HighlightsContent>

        <HighlightsIllustration>
          <Image alt="" className="h-96" src={developmentIllustration} />
        </HighlightsIllustration>
      </Highlights>
    </Section>
  );
};
