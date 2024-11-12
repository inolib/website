import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { RoundedIcon } from "~/components/icon";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import HeartIcon from "#/images/icons/heart.svg";
import Lightbulb05Icon from "#/images/icons/lightbulb-05.svg";
import MessageChatSquareIcon from "#/images/icons/message-chat-square.svg";
import ThumbsUpIcon from "#/images/icons/thumbs-up.svg";
import Users01Icon from "#/images/icons/users-01.svg";
import ZapFastIcon from "#/images/icons/zap-fast.svg";

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

type ValuesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Values = ({ _color }: ValuesProps) => {
  const { sectionClassName } = variants({ _color });

  const values = [
    {
      icon: <Lightbulb05Icon className="size-6 stroke-yellow-500" />,
      title: "Innovation et créativité",
      description: "Rechercher constamment des solutions créatives pour répondre aux défis actuels et futurs.",
    },
    {
      icon: <MessageChatSquareIcon className="size-6 stroke-yellow-500" />,
      title: "Transparence et intégrité",
      description: "Privilégier une communication claire et des actions éthiques.",
    },
    {
      icon: <ThumbsUpIcon className="size-6 stroke-yellow-500" />,
      title: "Fiabilité et confiance",
      description: "Établir des relations solides et durables, favorisant ainsi la confiance et le succès commun.",
    },
    {
      icon: <Users01Icon className="size-6 stroke-yellow-500" />,
      title: "Inclusion et diversité",
      description: "Valoriser l’inclusion et la diversité dans tous nos projets, ainsi que dans notre équipe.",
    },
    {
      icon: <HeartIcon className="size-6 stroke-yellow-500" />,
      title: "Responsabilité et bienveillance",
      description:
        "Évaluer l’impact de nos choix sur la société et agir avec respect, en faisant preuve d’une réelle considération pour chacun.",
    },
    {
      icon: <ZapFastIcon className="size-6 stroke-yellow-500" />,
      title: "Efficacité et proactivité",
      description: "Anticiper les besoins de nos clients et proposer des solutions innovantes et sur mesure.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos valeurs</HeadingContent>
        <HeadingSubheading>Ces valeurs guident notre travail au quotidien</HeadingSubheading>
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
