import Image from "next/image";

import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

import headerIllustration from "#/images/illustrations/app/(pages)/developpement/header.svg?url";

export const Header = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Développement web et mobile sur mesure</HeadingContent>
          </Heading>

          <p>
            Chez INOLIB, nous transformons vos idées en solutions numériques éthiques et sur mesure. Notre approche
            agile, centrée sur la création de valeur et l’atteinte de vos objectifs, place l’humain au cœur de chaque
            projet. Cette proximité, combinée à une compréhension profonde de vos besoins, garantit des solutions
            accessibles, performantes et modernes. Notre équipe pluridisciplinaire (chefs de projet, designers UI/UX,
            développeurs, testeurs) vous accompagne à chaque étape.
          </p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
          <Image alt="" src={headerIllustration} />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
