import Image from "next/image";

import { fetchIntroFormation } from "~/app/utils/fetchPolicy";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const Header = async () => {
  const intro = await fetchIntroFormation();

  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>{intro.title}</HeadingContent>
          </Heading>

          <p>{intro.text}</p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
          {intro.imageUrl && <Image alt="" height={150} src={intro.imageUrl} width={200} />}
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
