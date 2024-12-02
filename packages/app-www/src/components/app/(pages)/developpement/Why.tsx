import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { RoundedIcon } from "~/components/icon";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import Certificate01Icon from "#/images/icons/certificate-01.svg";
import FileCheck02Icon from "#/images/icons/file-check-02.svg";
import Globe04Icon from "#/images/icons/globe-04.svg";
import Lock01Icon from "#/images/icons/lock-01.svg";
import ThumbsUpIcon from "#/images/icons/thumbs-up.svg";
import ZapFastIcon from "#/images/icons/zap-fast.svg";

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

export const Why = ({ _color }: WhyProps) => {
  const { sectionClassName } = variants({ _color });

  const why = [
    {
      icon: <Certificate01Icon className="size-6 stroke-yellow-500" />,
      title: "Expertise",
      description: "Une équipe passionnée, à la pointe des dernières technologies.",
    },
    {
      icon: <ZapFastIcon className="size-6 stroke-yellow-500" />,
      title: "Agilité",
      description:
        "Nous nous adaptons rapidement à vos besoins, garantissant des résultats concrets et des livraisons rapides.",
    },
    {
      icon: <ThumbsUpIcon className="size-6 stroke-yellow-500" />,
      title: "Engagement",
      description: "Nos solutions sur mesure sont conçues en toute transparence, pour des résultats fiables.",
    },
    {
      icon: <FileCheck02Icon className="size-6 stroke-yellow-500" />,
      title: "Accessibilité numérique",
      description: "Nos solutions respectent les critères RGAA, WCAG, et RAWeb, garantissant une accessibilité à tous.",
    },
    {
      icon: <Globe04Icon className="size-6 stroke-yellow-500" />,
      title: "Éco-conception",
      description: "Nous réduisons l’impact environnemental de nos solutions.",
    },
    {
      icon: <Lock01Icon className="size-6 stroke-yellow-500" />,
      title: "Sécurité",
      description:
        "La protection des données est notre priorité, avec des mesures strictes de sécurité et de confidentialité.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Pourquoi choisir INOLIB ?</HeadingContent>
        <HeadingSubheading>Votre réussite est notre priorité.</HeadingSubheading>
      </Heading>

      <FlexGridList>
        {why.map((item, index) => (
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
