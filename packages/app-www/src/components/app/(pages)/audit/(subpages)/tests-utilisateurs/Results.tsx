import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { RoundedIcon } from "~/components/icon";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import LineChartUp02Icon from "#/images/icons/line-chart-up-02.svg";
import MessageSmileSquareIcon from "#/images/icons/message-smile-square.svg";
import ZapFastIcon from "#/images/icons/zap-fast.svg";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col gap-16",
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

type ResultsProps = {
  _color: NonNullable<Variants["_color"]>;
};

type Variants = VariantProps<typeof variants>;

export const Results = ({ _color }: ResultsProps) => {
  const { sectionClassName } = variants({ _color });

  const values = [
    {
      icon: <ZapFastIcon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "Amélioration de l’expérience utilisateur",
      description: "Éliminer les obstacles et proposer une interaction plus fluide.",
    },
    {
      icon: <LineChartUp02Icon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "Augmentation des conversions",
      description: "Des interfaces optimisées qui favorisent une navigation plus efficace et attractive.",
    },
    {
      icon: <MessageSmileSquareIcon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "Réduction des demandes de support",
      description: "En anticipant les problèmes d’utilisabilité, vous limitez les besoins d’assistance.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <div className="flex flex-col items-center gap-8">
        <Heading _alignment="center" _size="4xl">
          <HeadingContent _level={2}>Résultats garantis</HeadingContent>
          <HeadingSubheading>
            Avec INOLIB, vos produits deviennent plus performants et inclusifs grâce à une combinaison unique d’audit
            d’accessibilité et de tests utilisateurs. Cette complémentarité vous garantit une conformité légale tout en
            optimisant l’expérience client.
          </HeadingSubheading>
        </Heading>
      </div>

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
