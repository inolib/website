import Image from "next/image";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

import headerIllustration from "#/images/illustrations/app/(pages)/developpement/header.svg?url";

export const Header = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Création et refonte de votre site web</HeadingContent>
            <HeadingSubheading>
              Découvrez nos solutions de sites web sur mesure, pour répondre à vos besoins.
            </HeadingSubheading>
          </Heading>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
          <Image alt="" src={headerIllustration} />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
