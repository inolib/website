import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BorderCard } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { Verbose, VerboseContent, VerboseIllustration } from "~/components/verbose";
import { tv } from "~/helpers";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";

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

type QualiopiProps = {
  _color: NonNullable<Variants["_color"]>;
};

type Variants = VariantProps<typeof variants>;

export const Qualiopi = ({ _color }: QualiopiProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Qualité reconnue</HeadingContent>
      </Heading>

      <p>
        INOLIB est certifiée Qualiopi pour ses actions de formation. Cette certification, reconnue au niveau national,
        atteste de la qualité de nos processus et de notre engagement à proposer des formations répondant aux plus hauts
        standards.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Confiance de nos clients</HeadingContent>
      </Heading>

      <p>
        En obtenant la certification Qualiopi, nous vous garantissons une formation conforme aux exigences du
        Référentiel National Qualité, assurant ainsi des prestations fiables et adaptées à vos besoins professionnels.
        Cette certification renforce la confiance de nos clients, partenaires et financeurs, en certifiant que vous
        bénéficiez d’une formation sérieuse, structurée et en constante amélioration.
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Certification Qualiopi</HeadingContent>
        <HeadingSubheading>Une garantie de confiance et de qualité.</HeadingSubheading>
      </Heading>

      <div className="flex flex-col gap-8">
        <Verbose>
          <VerboseContent>
            {paragraphs.map((item, index) => (
              <BorderCard key={index}>{item}</BorderCard>
            ))}
          </VerboseContent>

          <VerboseIllustration>
            <Image
              alt="Certificat Qualiopi"
              className="max-h-96 w-auto"
              height={184}
              src="/images/logos/qualiopi/qualiopi.png"
              width={168}
              priority
            />
          </VerboseIllustration>
        </Verbose>

        <Link
          _border="black"
          _color="white"
          _shape="button"
          aria-label="En savoir plus sur notre certificat Qualiopi"
          href="/formations/certificat-qualiopi"
        >
          <span>En savoir plus</span>
          <ArrowNarrowDownIcon className="-rotate-90 stroke-black" />
        </Link>
      </div>
    </Section>
  );
};
