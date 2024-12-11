import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchSiteVitrine } from "~/app/utils/fetchPolicy";
import { BorderCard } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { Verbose, VerboseContent, VerboseIllustration } from "~/components/verbose";
import { tv } from "~/helpers";

import developmentIllustration from "#/images/illustrations/development.svg?url";

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

type ShowcaseWebsitesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const ShowcaseWebsites = async ({ _color }: ShowcaseWebsitesProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = await fetchSiteVitrine();

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{paragraphs.titre}</HeadingContent>
      </Heading>

      <Verbose _isReversed>
        <VerboseContent>
          <BorderCard>
            {" "}
            <div className="flex flex-col gap-4" key={0}>
              <Heading _alignment="left" _size="2xl">
                <HeadingContent _level={3}>{paragraphs.sousTtitre}</HeadingContent>
              </Heading>

              <p>{paragraphs.text}</p>
            </div>
            ,
          </BorderCard>

          <Link _color="blue-900" _shape="button" href="/contact">
            Demander un devis
          </Link>
        </VerboseContent>

        <VerboseIllustration>
          <Image alt="" className="h-96" height={200} src={paragraphs.image} width={400} />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};