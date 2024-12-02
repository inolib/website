import type { VariantProps } from "tailwind-variants";

import { fetchApproachAccompagnement } from "~/app/utils/fetchPolicy";
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

type AdditionalServicesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const AdditionalServices = async ({ _color }: AdditionalServicesProps) => {
  const { sectionClassName } = variants({ _color });
  const { titre1, titre2, text1, text2 } = await fetchApproachAccompagnement();

  console.log("montre text2", text2);
  return (
    <Section className={sectionClassName()}>
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>{titre1}</HeadingContent>
          </Heading>

          <p>{text1}</p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>{titre2}</HeadingContent>
          </Heading>

          <p>{text2}</p>
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
