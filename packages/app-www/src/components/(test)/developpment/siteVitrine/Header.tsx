import Image from "next/image";

import { fetchSite } from "~/app/utils/fetchPolicy";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

import developmentIllustration from "#/images/illustrations/development.svg?url";

export const Header = async () => {
  const intro = await fetchSite();
  console.log("montre le site", intro);
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>{intro.titre}</HeadingContent>
            <HeadingSubheading>{intro.introduction}</HeadingSubheading>
          </Heading>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
          <Image alt="" height={500} src={intro.image} width={500} />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
