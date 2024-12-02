import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchRecommendations } from "~/app/utils/fetchPolicy";
import { BorderCard } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { Verbose, VerboseContent, VerboseIllustration } from "~/components/verbose";
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

type RecommendationsProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Recommendations = async ({ _color }: RecommendationsProps) => {
  const { sectionClassName } = variants({ _color });

  const { titre, contenu, image } = await fetchRecommendations();

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{titre}</HeadingContent>
      </Heading>

      <Verbose _isReversed>
        <VerboseContent>
          {contenu.map((section, index) => (
            <BorderCard key={index}>
              <div className="flex flex-col gap-4">
                <Heading _alignment="left" _size="2xl">
                  <HeadingContent _level={3}>{section.titre}</HeadingContent>
                </Heading>
                <p>{section.text}</p>
              </div>
            </BorderCard>
          ))}

          <Link _color="blue-900" _shape="button" href="/contact">
            Demander un devis
          </Link>
        </VerboseContent>

        <VerboseIllustration>
          <Image alt="" className="max-h-96 w-auto" height={300} src={image} width={300} />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
