import type { VariantProps } from "tailwind-variants";

import { fetchMission } from "~/app/utils/fetchPolicy";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

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

type MissionAndApproachProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const MissionAndApproach = async ({ _color }: MissionAndApproachProps) => {
  const { sectionClassName } = variants({ _color });

  const mission = await fetchMission();

  return (
    <Section className={sectionClassName()}>
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>{mission.titre1}</HeadingContent>
          </Heading>

          <p>{mission.Description1}</p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>{mission.titre2}</HeadingContent>
          </Heading>

          <p>{mission.Description2}</p>
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
