import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

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

import CodeBrowserIcon from "#/images/icons/code-browser.svg";
import CpuChip01Icon from "#/images/icons/cpu-chip-01.svg";
import MagicWand02Icon from "#/images/icons/magic-wand-02.svg";
import PuzzlePiece01Icon from "#/images/icons/puzzle-piece-01.svg";
import approachIllustration from "#/images/illustrations/app/(pages)/developpement/approach.svg?url";

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

type ApproachProps = {
  _color: NonNullable<Variants["_color"]>;
};

type Variants = VariantProps<typeof variants>;

export const Approach = ({ _color }: ApproachProps) => {
  const { sectionClassName } = variants({ _color });

  const services = [
    {
      title: "Technologies utilisées",
      highlights: [
        {
          icon: <CodeBrowserIcon className="size-12 stroke-blue-600" aria-hidden />,
          title: "Développement web et mobile",
          description: "Next.js, React, Node.js, headless CMS, React Native.",
        },
        {
          icon: <MagicWand02Icon className="size-12 stroke-blue-600" aria-hidden />,
          title: "Intelligence artificielle (IA)",
          description: "Automatisation et optimisation des processus pour une meilleure productivité.",
        },
        {
          icon: <PuzzlePiece01Icon className="size-12 stroke-blue-600" aria-hidden />,
          title: "APIs",
          description:
            "Intégration fluide et sécurisée avec vos systèmes existants pour garantir une compatibilité et des échanges de données efficaces.",
        },
        {
          icon: <CpuChip01Icon className="size-12 stroke-blue-600" aria-hidden />,
          title: "Machine learning",
          description: "Analyse prédictive et apprentissage continu pour des décisions plus stratégiques.",
        },
      ],
      illustration: approachIllustration,
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Notre approche</HeadingContent>
        <HeadingSubheading>
          Chez INOLIB, nous croyons en la technologie pour transformer les entreprises. Innovation, agilité, et
          proximité, sont au cœur de nos solutions sur mesure. Chaque projet est une collaboration unique, où notre
          expertise est mise à votre service.
        </HeadingSubheading>
      </Heading>

      {services.map((item, index) => (
        <Highlights _isReversed={index % 2 === 0} key={index}>
          <HighlightsContent>
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>{item.title}</HeadingContent>
            </Heading>

            <HighlightsUnorderedList>
              {item.highlights.map((item, index) => (
                <HighlightsListItem key={index}>
                  <BoxCard>
                    <BoxCardIcon>{item.icon}</BoxCardIcon>

                    <BoxCardContent className="gap-4">
                      <p className="text-xl font-bold">{item.title}</p>
                      <p>{item.description}</p>
                    </BoxCardContent>
                  </BoxCard>
                </HighlightsListItem>
              ))}
            </HighlightsUnorderedList>
          </HighlightsContent>

          <HighlightsIllustration>
            <Image alt="" className="max-h-96 w-auto" src={item.illustration} />
          </HighlightsIllustration>
        </Highlights>
      ))}
    </Section>
  );
};
