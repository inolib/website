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
      title: "Audits d’accessibilité numérique",
      description: (
        <>
          <p>
            Nous réalisons des audits de vos supports numériques pour identifier les obstacles à l’accessibilité. En
            conformité aux normes RGAA, WCAG, et RAWeb.
          </p>
          <p>Nous rédigeons votre déclaration d’accessibilité et vous accompagnons vers une accessibilité optimale.</p>
        </>
      ),
      links: [
        {
          label: "Audits d’accessibilité",
          "aria-label": "Découvrir nos audits d’accessibilité",
          href: "/audit/audits-accessibilite",
        },
      ],
      illustration: auditIllustration,
    },
    {
      icon: <FlagFramedIcon className="size-12" />,
      title: "Accompagnement et conseil",
      description: (
        <>
          <p>Nous intégrons l’accessibilité à chaque étape de votre projet.</p>
          <p>
            En combinant gestion de projet et expertise technique, nous assurons une mise en œuvre efficace de
            l’accessibilité.
          </p>
          <p>
            Nous vous aidons également à élaborer un schéma pluriannuel pour planifier vos actions et garantir une
            accessibilité numérique dans le temps.
          </p>
        </>
      ),
      links: [
        {
          label: "Pilotage de projet",
          "aria-label": "Découvrir notre service de pilotage de projet",
          href: "/accompagnement/pilotage-de-projet",
        },
        {
          label: "Accompagnement technique",
          "aria-label": "Découvrir notre service d’accompagnement technique",
          href: "/accompagnement/accompagnement-technique",
        },
      ],
      illustration: supportIllustration,
    },
    {
      icon: <TerminalBrowserFramedIcon className="size-12" />,
      title: "Développement de solutions web et mobiles",
      description: (
        <>
          <p>Chez INOLIB, vos idées prennent vie avec des solutions sur mesure.</p>
          <p>
            Un projet de site web, une application, ou une plateforme SaaS, nous concevons et développons des solutions
            modernes, performantes et accessibles.
          </p>
        </>
      ),
      links: [
        {
          label: "Développement web et mobile",
          "aria-label": "Découvrir nos services de développement web et mobile",
          href: "/developpement",
        },
      ],
      illustration: developmentIllustration,
    },
    {
      icon: <GraduationHatFramedIcon className="size-12" />,
      title: "Formations",
      description: (
        <>
          <p>
            En tant que centre de formation certifié Qualiopi, INOLIB Academy vous propose des programmes dans les
            métiers du numérique et en accessibilité.
          </p>
          <p>
            Nos formations permettent à vos équipes de sensibiliser et de faire monter en compétences les équipes
            projet : décideurs, chefs de projet, product owners, designers UX/UI, développeurs, rédacteurs, community
            managers.
          </p>
        </>
      ),
      links: [
        {
          label: "INOLIB Academy",
          "aria-label": "Découvrir nos formations INOLIB Academy",
          href: "/formations",
        },
      ],
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
              <Heading _alignment="left" _size="2xl">
                <div className="flex items-center gap-4">
                  <div>{item.icon}</div>
                  <HeadingContent _level={3}>{item.title}</HeadingContent>
                </div>
              </Heading>

              {item.description}
            </div>

            <div className="flex flex-wrap gap-4">
              {item.links.map((item, index) => (
                <Link
                  _border="black"
                  _color="white"
                  _shape="button"
                  aria-label={item["aria-label"]}
                  className="text-left"
                  href={item.href}
                  key={index}
                >
                  <span>{item.label}</span>
                  <ArrowNarrowDownIcon className="-rotate-90 stroke-black" />
                </Link>
              ))}
            </div>
          </TwoColumnsFlexLayoutColumn>

          <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
            <Image alt="" className="max-h-96 w-auto" src={item.illustration} />
          </TwoColumnsFlexLayoutColumn>
        </TwoColumnsFlexLayout>
      ))}
    </Section>
  );
};
