import Image from "next/image";

import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

import headerIllustration from "#/images/illustrations/app/(pages)/formations/header.svg?url";

export const Header = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>
              INOLIB Academy – Formations aux métiers du numérique et à l’accessibilité numérique
            </HeadingContent>
          </Heading>

          <p>
            INOLIB Academy est un centre de formation dédié aux compétences numériques et à l’accessibilité numérique.
            Nos parcours, conçus pour répondre aux besoins des entreprises, allient théorie et pratique afin de garantir
            l’acquisition de compétences directement applicables en milieu professionnel.
          </p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
          <Image alt="" src={headerIllustration} />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
