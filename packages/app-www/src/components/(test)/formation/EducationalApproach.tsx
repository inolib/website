import Image from "next/image";

import { fetchEducationalApproach } from "~/app/utils/fetchPolicy";
import { BorderCard } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import { Section } from "~/components/section";
import { Verbose, VerboseContent, VerboseIllustration } from "~/components/verbose";
import { tv } from "~/helpers";

import educationIllustration from "#/images/illustrations/education.svg?url";

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

type EducationalApproachProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const EducationalApproach = async ({ _color }: EducationalApproachProps) => {
  const { sectionClassName } = variants({ _color });

  const approach = await fetchEducationalApproach();

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{approach.title}</HeadingContent>
      </Heading>

      <Verbose _isReversed>
        <VerboseContent>
          {approach.sections.map((section, index) => (
            <BorderCard key={index}>
              <div className="flex flex-col gap-4">
                <Heading _alignment="left" _size="2xl">
                  <HeadingContent _level={3}>{section.title}</HeadingContent>
                </Heading>
                <p>{section.paragraph}</p>
              </div>
            </BorderCard>
          ))}
        </VerboseContent>

        <VerboseIllustration>
          <Image alt="" className="h-96" src={educationIllustration} />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
