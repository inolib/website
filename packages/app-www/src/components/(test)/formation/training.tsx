import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchTraining } from "~/app/utils/fetchPolicy";
import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import {
  Highlights,
  HighlightsContent,
  HighlightsIllustration,
  HighlightsListItem,
  HighlightsUnorderedList,
} from "~/components/highlights";
import { Link } from "~/components/link";
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

type TrainingCoursesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const TrainingCourses = async ({ _color }: TrainingCoursesProps) => {
  const { sectionClassName } = variants({ _color });

  // Récupérer les données des formations
  const courses = await fetchTraining();
  console.log("afficher les formations", courses);

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{courses.title}</HeadingContent>
        <HeadingSubheading>{courses.introduction}</HeadingSubheading>
      </Heading>

      {courses.listItems.map((item, index) => (
        <Highlights _isReversed={index % 2 === 0} key={index}>
          <HighlightsContent>
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>{item.title}</HeadingContent>
              <HeadingSubheading>{item.text}</HeadingSubheading>
            </Heading>

            <HighlightsUnorderedList>
              {item.highlights.map((highlight, i) => (
                <HighlightsListItem key={i}>
                  <BoxCard>
                    {highlight.icon && (
                      <BoxCardIcon className="my-auto">
                        <Image alt="" height={50} src={highlight.icon} width={50} />
                      </BoxCardIcon>
                    )}
                    <BoxCardContent className="gap-4">
                      <p className="text-xl font-bold">{highlight.title}</p>
                      <p>{highlight.description}</p>
                    </BoxCardContent>
                  </BoxCard>
                </HighlightsListItem>
              ))}
            </HighlightsUnorderedList>

            <Link _color="blue-900" _shape="button" href="/contact">
              Demander un devis
            </Link>
          </HighlightsContent>

          <HighlightsIllustration>
            <Image alt="" className="h-96 w-auto" height={100} src={item.imageUrl} width={120} />
          </HighlightsIllustration>
        </Highlights>
      ))}
    </Section>
  );
};
