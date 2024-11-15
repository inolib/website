import Image from "next/image";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

import headerIllustration from "#/images/illustrations/app/(pages)/audit/header.svg?url";

export const Header = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Audits de conformité en accessibilité numérique</HeadingContent>
            <HeadingSubheading>Votre site web ou votre application mobile sont-ils accessibles ?</HeadingSubheading>
          </Heading>

          <div className="flex flex-col gap-4">
            <p>
              L’audit d’accessibilité numérique permet d’évaluer l’accessibilité de vos sites web, applications, ou
              logiciels, en identifiant les obstacles rencontrés par les utilisateurs. Nos experts analysent vos
              supports en s’appuyant sur les référentiels RGAA, WCAG, RAWeb, et la norme EN 301 549.
            </p>

            <p>
              Tous nos audits sont réalisés par des consultants expérimentés, et nos services sont disponibles en
              français et en anglais.
            </p>
          </div>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
          <Image alt="" src={headerIllustration} />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
