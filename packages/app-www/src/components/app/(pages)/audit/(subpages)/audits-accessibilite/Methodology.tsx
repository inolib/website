import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import {
  Highlights,
  HighlightsContent,
  HighlightsIllustration,
  HighlightsListItem,
  HighlightsOrderedList,
} from "~/components/highlights";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import CompassIcon from "#/images/icons/compass.svg";
import MessageChatSquareIcon from "#/images/icons/message-chat-square.svg";
import PackageIcon from "#/images/icons/package.svg";
import Pencil01Icon from "#/images/icons/pencil-01.svg";
import SearchSmIcon from "#/images/icons/search-sm.svg";
import methodologyIllustration from "#/images/illustrations/app/(pages)/audit/(subpages)/audits-accessibilite/methodology.svg?url";

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

type MethodologyProps = {
  _color: NonNullable<Variants["_color"]>;
};

type Variants = VariantProps<typeof variants>;

export const Methodology = ({ _color }: MethodologyProps) => {
  const { sectionClassName } = variants({ _color });

  const highlights = [
    {
      icon: <CompassIcon className="size-12 stroke-blue-600" />,
      title: "1. Co-construction",
      description: "Sélection d’un échantillon représentatif avec vous.",
    },
    {
      icon: <SearchSmIcon className="size-12 stroke-blue-600" />,
      title: "2. Investigation",
      description: "Analyse de l’échantillon au regard du référentiel choisi.",
    },
    {
      icon: <Pencil01Icon className="size-12 stroke-blue-600" />,
      title: "3. Synthèse",
      description: "Rédaction d’un rapport détaillé avec recommandations.",
    },
    {
      icon: <MessageChatSquareIcon className="size-12 stroke-blue-600" />,
      title: "4. Échange",
      description:
        "Restitution des résultats en visioconférence, avec explication des non-conformités, des solutions, et des priorités d’action.",
    },
    {
      icon: <PackageIcon className="size-12 stroke-blue-600" />,
      title: "5. Livraison",
      description: "Grille technique, rapport détaillé, déclaration d’accessibilité.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Notre méthodologie</HeadingContent>
      </Heading>

      <Highlights>
        <HighlightsContent>
          <HighlightsOrderedList>
            {highlights.map((item, index) => (
              <HighlightsListItem key={index}>
                <BoxCard>
                  <BoxCardIcon className="my-auto">{item.icon}</BoxCardIcon>

                  <BoxCardContent className="gap-4">
                    <p className="text-xl font-bold">{item.title}</p>
                    <p>{item.description}</p>
                  </BoxCardContent>
                </BoxCard>
              </HighlightsListItem>
            ))}
          </HighlightsOrderedList>
        </HighlightsContent>

        <HighlightsIllustration>
          <Image alt="" className="max-h-96 w-auto" src={methodologyIllustration} />
        </HighlightsIllustration>
      </Highlights>
    </Section>
  );
};
