import type { Metadata } from "next";

import { Calendar } from "~/components/app/(pages)/contact/rendez-vous";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Prenez rendez-vous | INOLIB",
};

const Page = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Prenez rendez-vous</HeadingContent>
            <HeadingSubheading>Un moment d’échange avec notre équipe.</HeadingSubheading>
          </Heading>
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>

      <Calendar />
    </Section>
  );
};

export default Page;
