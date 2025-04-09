import Image from "next/image";
import NextLink from "next/link";
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
import FileCheck02Icon from "#/images/icons/file-check-02.svg";
import generalCoursesIllustration from "#/images/illustrations/app/(pages)/formations/general-courses.svg?url";

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
  loading?: boolean;
};

type Variants = VariantProps<typeof variants>;

export const TrainingCourses = ({ _color, courses, loading }: TrainingCoursesProps) => {
  const { sectionClassName } = variants({ _color });

  if (loading) {
    return (
      <p role="status" aria-live="polite">
        Chargement des formations en cours...
      </p>
    );
  }

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos formations</HeadingContent>
        <HeadingSubheading>
          Découvrez nos formations, pensées pour former les professionnels aux compétences essentielles des métiers du
          numérique et de l’accessibilité numérique.
        </HeadingSubheading>
      </Heading>

      <Highlights _isReversed={true}>
        <HighlightsContent>
          <HighlightsUnorderedList>
            {courses.map((item, index) => (
              <HighlightsListItem key={item.slug}>
                <NextLink href={`/formations/${item.slug}`} className="text-inherit block no-underline" passHref>
                  <BoxCard>
                    <BoxCardIcon>
                      <FileCheck02Icon className="size-12 stroke-blue-600" />
                    </BoxCardIcon>

                    <BoxCardContent className="gap-4">
                      <p className="text-xl font-bold">{item.titre}</p>
                      <p>{item.description}</p>
                    </BoxCardContent>
                  </BoxCard>
                </NextLink>
              </HighlightsListItem>
            ))}
          </HighlightsUnorderedList>
          <Link _color="blue-900" _shape="button" href="/contact">
            Demander un devis
          </Link>
        </HighlightsContent>

        <HighlightsIllustration>
          <Image alt="" className="max-h-96 w-auto" src={generalCoursesIllustration} />
        </HighlightsIllustration>
      </Highlights>
    </Section>
  );
};
