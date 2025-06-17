import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { RoundedIcon } from "~/components/icon";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import Certificate01Icon from "#/images/icons/certificate-01.svg";
import FileCheck02Icon from "#/images/icons/file-check-02.svg";
import GraduationHat02Icon from "#/images/icons/graduation-hat-02.svg";
import Scales02Icon from "#/images/icons/scales-02.svg";
import Users01Icon from "#/images/icons/users-01.svg";

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
      icon: <Scales02Icon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "Méthode équilibrée",
      description: "Une alliance de théorie et de pratique pour une montée en compétences progressive.",
    },
    {
      icon: <Users01Icon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "Accompagnement personnalisé",
      description:
        "Un suivi pendant et après la formation, avec un suivi cohérent post-formation pour assurer la bonne mise en pratique des acquis.",
    },
    {
      icon: <GraduationHat02Icon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "Formateurs experts",
      description:
        "Nos formateurs sont des experts reconnus dans leurs domaines, garantissant un enseignement de qualité.",
    },
    {
      icon: <FileCheck02Icon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "Expertise en accessibilité numérique",
      description: "Des formations spécialisées et adaptées aux exigences actuelles des entreprises.",
    },
    {
      icon: <Certificate01Icon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "Certification Qualiopi",
      description: "Des formations de qualité reconnue par un organisme de certification indépendant.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Pourquoi choisir INOLIB Academy ?</HeadingContent>
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
