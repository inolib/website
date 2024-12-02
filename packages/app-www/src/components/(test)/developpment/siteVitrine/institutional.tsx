import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchSiteInstit } from "~/app/utils/fetchPolicy";
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

type InstitutionalWebsitesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const InstitutionalWebsites = async ({ _color }: InstitutionalWebsitesProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = await fetchSiteInstit();

  const contenu = paragraphs.contenu || [];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{paragraphs.titre}</HeadingContent>
      </Heading>

      <Verbose>
        <VerboseContent>
          {contenu.length > 0 ? (
            contenu.map((item, index) => (
              <BorderCard key={index}>
                <div className="flex flex-col gap-4">
                  <Heading _alignment="left" _size="2xl">
                    <HeadingContent _level={3}>{item.titre}</HeadingContent>
                  </Heading>
                  <p>{item.text}</p>
                </div>
              </BorderCard>
            ))
          ) : (
            <p>Aucun contenu disponible.</p>
          )}

          <Link _color="blue-900" _shape="button" href="/contact">
            Demander un devis
          </Link>
        </VerboseContent>

        <VerboseIllustration>
          <Image
            alt="Illustration du site institutionnel"
            className="h-96"
            height={300}
            src={paragraphs.image}
            width={500}
          />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
