import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";
import type { BlogSetting } from "~/lib/strapi/api-client";

export const Header = ({ pageSettings }: { pageSettings: BlogSetting }) => {
  return (
    <Section>
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn>
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>{pageSettings.heading}</HeadingContent>
            <HeadingSubheading>{pageSettings.Description}</HeadingSubheading>
          </Heading>
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
