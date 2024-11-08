import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { cn, tv } from "~/helpers";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";
import FileCheckFramedIcon from "#/images/icons/framed/file-check-02.svg";
import FlagFramedIcon from "#/images/icons/framed/flag-03.svg";
import GraduationHatFramedIcon from "#/images/icons/framed/graduation-hat-02.svg";
import TerminalBrowserFramedIcon from "#/images/icons/framed/terminal-browser.svg";
import supportIllustration from "#/images/illustrations/app/(pages)/accompagnement/header.svg?url";
import auditIllustration from "#/images/illustrations/app/(pages)/audit/header.svg?url";
import developmentIllustration from "#/images/illustrations/app/(pages)/developpement/header.svg?url";
import trainingIllustration from "#/images/illustrations/app/(pages)/formations/header.svg?url";

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

type ServicesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Services = ({ _color }: ServicesProps) => {
  const { sectionClassName } = variants({ _color });

  const services = [
    {
      icon: <FileCheckFramedIcon className="size-12" />,
      title: "Audits d’accessibilité conformes aux normes RGAA, WCAG, et RAWeb",
      description: (
        <>
          <p>
            Nous réalisons des audits de vos supports numériques pour identifier les obstacles à l’accessibilité. En
            conformité aux normes RGAA, WCAG, et RAWeb.
          </p>
          <p>Nous rédigeons votre déclaration d’accessibilité et vous accompagnons vers une accessibilité optimale.</p>
        </>
      ),
      link: {
        label: "En savoir plus sur les audits d’accessibilité",
        href: "/audit/audits-accessibilite",
      },
      illustration: auditIllustration,
    },
    {
      icon: <FlagFramedIcon className="size-12" />,
      title: "Pilotage de projet et accompagnement technique",
      description: (
        <>
          <p>
            Nous offrons un service complet de pilotage de projet numérique, en intégrant l’accessibilité dès la
            conception et à chaque étape du développement. Notre approche combine gestion de projet et accompagnement
            technique pour garantir la mise en œuvre efficace de l’accessibilité.
          </p>
          <p>
            Nous vous appuyons également dans l’élaboration d’un schéma pluriannuel, vous permettant de planifier et
            structurer vos actions pour assurer une mise en place durable de l’accessibilité numérique.
          </p>
        </>
      ),
      link: {
        label: "En savoir plus sur le pilotage de projet",
        href: "/accompagnement/pilotage-de-projet",
      },
      illustration: supportIllustration,
    },
    {
      icon: <TerminalBrowserFramedIcon className="size-12" />,
      title: "Développement de solutions web et mobiles",
      description: (
        <p>
          Chez INOLIB, nous transformons vos idées en solutions numériques sur mesure. Que ce soit pour des sites web,
          des applications mobiles ou des logiciels SaaS, notre équipe pluridisciplinaire vous accompagne à chaque étape
          de votre projet, de la conception à la mise en ligne, pour des solutions accessibles, performantes et
          modernes.
        </p>
      ),
      link: {
        label: "En savoir plus sur nos services de développement",
        href: "/developpement",
      },
      illustration: developmentIllustration,
    },
    {
      icon: <GraduationHatFramedIcon className="size-12" />,
      title: "INOLIB Academy – Formations aux métiers du numérique et à l’accessibilité numérique",
      description: (
        <>
          <p>
            En tant que centre de formation certifié Qualiopi, INOLIB Academy vous propose des programmes variés pour
            développer les compétences essentielles aux métiers du numérique et en accessibilité numérique. Nos
            formations, conçues pour s’adapter à tous les niveaux et profils, permettent à vos équipes de monter en
            compétences et d’optimiser leurs projets, tout en répondant aux exigences actuelles du marché.
          </p>
          <p>
            Disponibles en présentiel ou en ligne, nos formations vous offrent flexibilité et expertise, pour des
            services numériques performants et inclusifs.
          </p>
        </>
      ),
      link: {
        label: "En savoir plus sur INOLIB Academy",
        href: "/formations",
      },
      illustration: trainingIllustration,
    },
  ];

  return (
    <Section className={sectionClassName()} id="services" tabIndex={-1}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos services</HeadingContent>
      </Heading>

      {services.map((item, index) => (
        <TwoColumnsFlexLayout className={cn({ "md:flex-row-reverse": index % 2 === 0 })} key={index}>
          <TwoColumnsFlexLayoutColumn className="flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-4">
              {item.icon}

              <Heading _alignment="left" _size="2xl">
                <HeadingContent _level={3}>{item.title}</HeadingContent>
              </Heading>

              {item.description}
            </div>

            <Link _border="black" _color="white" _shape="button" aria-label={item.link.label} href={item.link.href}>
              <span>En savoir plus</span>
              <ArrowNarrowDownIcon className="-rotate-90 stroke-black" />
            </Link>
          </TwoColumnsFlexLayoutColumn>

          <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
            <Image alt="" className="max-h-96 w-auto" src={item.illustration} />
          </TwoColumnsFlexLayoutColumn>
        </TwoColumnsFlexLayout>
      ))}
    </Section>
  );
};
