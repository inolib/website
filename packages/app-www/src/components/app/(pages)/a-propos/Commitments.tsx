import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent } from "~/components/heading";
import { RoundedIcon } from "~/components/icon";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import FileCheck02Icon from "#/images/icons/file-check-02.svg";
import Globe04Icon from "#/images/icons/globe-04.svg";
import GraduationHat02Icon from "#/images/icons/graduation-hat-02.svg";
import Lightbulb05Icon from "#/images/icons/lightbulb-05.svg";
import RulerIcon from "#/images/icons/ruler.svg";
import ThumbsUpIcon from "#/images/icons/thumbs-up.svg";

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

export const Commitments = ({ _color }: CommitmentsProps) => {
  const { sectionClassName } = variants({ _color });

  const values = [
    {
      icon: <RulerIcon className="size-6 stroke-yellow-500" />,
      title: "Excellence technologique",
      description: "Offrir des solutions sur mesure, parfaitement adaptées aux besoins uniques de chaque client.",
    },
    {
      icon: <FileCheck02Icon className="size-6 stroke-yellow-500" />,
      title: "Accessibilité pour tous",
      description: "Garantir que nos solutions sont accessibles à tous.",
    },
    {
      icon: <GraduationHat02Icon className="size-6 stroke-yellow-500" />,
      title: "Partage de compétences",
      description:
        "Proposer des formations pour aider les individus et organisations à maîtriser et à intégrer efficacement des pratiques inclusives.",
    },
    {
      icon: <Lightbulb05Icon className="size-6 stroke-yellow-500" />,
      title: "Innovation continue",
      description: "Explorer de nouvelles idées pour créer des solutions qui placent nos clients au premier plan.",
    },
    {
      icon: <Globe04Icon className="size-6 stroke-yellow-500" />,
      title: "Éthique et responsabilité",
      description: "Réduire notre impact environnemental et promouvoir un usage responsable de la technologie.",
    },
    {
      icon: <ThumbsUpIcon className="size-6 stroke-yellow-500" />,
      title: "Impact social positif",
      description: "Améliorer la vie des individus et contribuer à un avenir équitable et durable.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos engagements</HeadingContent>
      </Heading>

      <FlexGridList>
        {values.map((item, index) => (
          <FlexGridListItem key={index}>
            <RoundedIcon className="size-12 bg-blue-300">
              <RoundedIcon className="size-9 bg-blue-900">{item.icon}</RoundedIcon>
            </RoundedIcon>

            <p className="text-2xl font-bold">{item.title}</p>
            <p>{item.description}</p>
          </FlexGridListItem>
        ))}
      </FlexGridList>
    </Section>
  );
};
