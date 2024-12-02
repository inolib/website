import Image from "next/image";

import { fetchintroAudit } from "~/app/utils/fetchPolicy";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

import headerIllustration from "#/images/illustrations/app/(pages)/audit/header.svg?url";

export const Header = async () => {
  const { titre, text, image , paragraph } = await fetchintroAudit();
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>{titre}</HeadingContent>
            <HeadingSubheading>{paragraph}</HeadingSubheading>
          </Heading>

          <div className="flex flex-col gap-4">
            <p>{text}</p>
          </div>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
          <Image alt="" height={300} src={image} width={300} />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
