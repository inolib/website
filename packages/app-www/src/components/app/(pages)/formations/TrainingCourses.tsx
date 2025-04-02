import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

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

import type { Formation } from "~/lib/strapi/api-client";

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

type TrainingCoursesProps = {
  _color: NonNullable<Variants["_color"]>;
  courses: Formation[];
};

type Variants = VariantProps<typeof variants>;

export const TrainingCourses = ({ _color, courses }: TrainingCoursesProps) => {
  const { sectionClassName } = variants({ _color });

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos formations</HeadingContent>
        <HeadingSubheading>
          Découvrez nos formations, pensées pour former les professionnels aux compétences essentielles des métiers du
          numérique et de l’accessibilité numérique.
        </HeadingSubheading>
      </Heading>

      {courses.map((item, index) => (
        <Highlights _isReversed={index % 2 === 0} key={index}>
          <HighlightsContent>
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>{item.titre}</HeadingContent>
              <HeadingSubheading>{item.description}</HeadingSubheading>
            </Heading>

            <HighlightsUnorderedList>
              {item.concepts.map((item, index) => (
                <HighlightsListItem key={index}>
                  <BoxCard>
                    <BoxCardIcon>
                      {item?.image?.url && (
                        <Image alt="" className="size-12 max-h-96 w-auto stroke-blue-600" src={item.image.url} />
                      )}
                    </BoxCardIcon>

                    <BoxCardContent className="gap-4">
                      <p className="text-xl font-bold">{item.titre}</p>
                      <p>{item.description}</p>
                    </BoxCardContent>
                  </BoxCard>
                </HighlightsListItem>
              ))}
            </HighlightsUnorderedList>

            <Link _color="blue-900" _shape="button" href="/contact">
              Demander un devis
            </Link>
          </HighlightsContent>

          {item?.illustration?.url && (
            <HighlightsIllustration>
              <Image alt="" className="max-h-96 w-auto" src={item.illustration.url} width={600} height={800} />
            </HighlightsIllustration>
          )}
        </Highlights>
      ))}
    </Section>
  );
};
