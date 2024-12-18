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
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import Announcement01Icon from "#/images/icons/announcement-01.svg";
import CodeBrowserIcon from "#/images/icons/code-browser.svg";
import FileCheck02Icon from "#/images/icons/file-check-02.svg";
import HomeLineIcon from "#/images/icons/home-line.svg";
import Image05Icon from "#/images/icons/image-05.svg";
import Pencil01Icon from "#/images/icons/pencil-01.svg";
import RouteIcon from "#/images/icons/route.svg";
import Scales02Icon from "#/images/icons/scales-02.svg";
import Tool02Icon from "#/images/icons/tool-02.svg";
import accessibilityCoursesIllustration from "#/images/illustrations/app/(pages)/formations/accessibility-courses.svg?url";
import generalCoursesIllustration from "#/images/illustrations/app/(pages)/formations/general-courses.svg?url";

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

type TrainingCoursesProps = {
  _color: NonNullable<Variants["_color"]>;
};

type Variants = VariantProps<typeof variants>;

export const TrainingCourses = ({ _color }: TrainingCoursesProps) => {
  const { sectionClassName } = variants({ _color });

  const courses = [
    {
      title: "Formations en accessibilité numérique",
      subtitle:
        "Nos formations spécialisées vous aident à intégrer l’accessibilité dans vos projets et à respecter les normes en vigueur.",
      highlights: [
        {
          icon: <HomeLineIcon className="size-12 stroke-blue-600" />,
          title: "Fondamentaux de l’accessibilité",
          description: "Comprendre et s’initier aux bases de l’accessibilité numérique.",
        },
        {
          icon: <Scales02Icon className="size-12 stroke-blue-600" />,
          title: "Normes et réglementations",
          description: "Saisir le cadre normatif et législatif en France et à l’international (RGAA, WCAG, RAWeb).",
        },
        {
          icon: <RouteIcon className="size-12 stroke-blue-600" />,
          title: "Piloter l’accessibilité",
          description: "Gérer des projets d’accessibilité au sein de votre organisation.",
        },
        {
          icon: <Image05Icon className="size-12 stroke-blue-600" />,
          title: "Conception d’interfaces accessibles (UI/UX)",
          description: "Créer des interfaces modernes, ergonomiques, et accessibles.",
        },
        {
          icon: <CodeBrowserIcon className="size-12 stroke-blue-600" />,
          title: "Développement web et mobile accessible",
          description: "Développer des interfaces web et mobiles accessibles.",
        },
        {
          icon: <Pencil01Icon className="size-12 stroke-blue-600" />,
          title: "Production de contenus accessibles",
          description: "Apprendre à produire des contenus accessibles.",
        },
        {
          icon: <Announcement01Icon className="size-12 stroke-blue-600" />,
          title: "Communiquer de manière accessible sur les réseaux sociaux",
          description: "Adapter vos stratégies de communication pour les personnes en situation de handicap.",
        },
        {
          icon: <FileCheck02Icon className="size-12 stroke-blue-600" />,
          title: "Tester et auditer l’accessibilité",
          description: "Évaluer et améliorer l’accessibilité de vos projets.",
        },
      ],
      illustration: accessibilityCoursesIllustration,
    },
    {
      title: "Formations aux métiers du numérique",
      subtitle:
        "Des formations variées pour répondre aux besoins actuels des entreprises en matière de transformation numérique.",
      highlights: [
        {
          icon: <RouteIcon className="size-12 stroke-blue-600" />,
          title: "Gestion de projets numériques",
          description:
            "Apprenez à organiser, planifier, et gérer des projets numériques complexes, en respectant les délais, les objectifs, et les coûts.",
        },
        {
          icon: <CodeBrowserIcon className="size-12 stroke-blue-600" />,
          title: "Création de sites web et mobiles",
          description:
            "Maîtrisez les outils et techniques pour concevoir et développer des sites web et des applications mobiles performants et adaptés à tous les supports.",
        },
        {
          icon: <Tool02Icon className="size-12 stroke-blue-600" />,
          title: "Outils et technologies numériques",
          description:
            "Formez-vous aux outils numériques les plus récents, que ce soit pour la gestion de contenu, le marketing, ou l’analyse de données.",
        },
      ],
      illustration: generalCoursesIllustration,
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos formations</HeadingContent>
        <HeadingSubheading>
          Découvrez nos formations, pensées pour former les professionnels aux compétences essentielles des métiers du
          numérique et de l’accessibilité numérique.
        </HeadingSubheading>
      </Heading>

      {courses.map((item, index) => (
        <Highlights _isReversed={index % 2 === 0} key={index}>
          <HighlightsContent>
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>{item.title}</HeadingContent>
              <HeadingSubheading>{item.subtitle}</HeadingSubheading>
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

            <Link _color="blue-900" _shape="button" href="/contact">
              Demander un devis
            </Link>
          </HighlightsContent>

          <HighlightsIllustration>
            <Image alt="" className="max-h-96 w-auto" src={item.illustration} />
          </HighlightsIllustration>
        </Highlights>
      ))}
    </Section>
  );
};
