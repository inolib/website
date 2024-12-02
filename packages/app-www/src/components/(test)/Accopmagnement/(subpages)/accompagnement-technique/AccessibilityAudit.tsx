import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchAuditA } from "~/app/utils/fetchPolicy";
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

type AccessibilityAuditProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const AccessibilityAudit = async ({ _color }: AccessibilityAuditProps) => {
  const { sectionClassName } = variants({ _color });

  const { titre, contenu, image } = await fetchAuditA();

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{titre}</HeadingContent>
      </Heading>

      <Verbose _isReversed>
        <VerboseContent>
          {contenu.map((item, index) => (
            <BorderCard key={index}>
              <div className="flex flex-col gap-4" key={0}>
                <Heading _alignment="left" _size="2xl">
                  <HeadingContent _level={3}>{item.titre}</HeadingContent>
                </Heading>

                <p>{item.text}</p>
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
