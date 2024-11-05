import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import ArrowNarrowRightIcon from "#/images/icons/arrow-narrow-right.svg";

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

type QualiopiProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Qualiopi = ({ _color }: QualiopiProps) => {
  const { sectionClassName } = variants({ _color });

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Certification Qualiopi</HeadingContent>
        <HeadingSubheading>Une garantie de confiance et de qualité.</HeadingSubheading>
      </Heading>

      <div className="flex flex-col gap-8">
        <TwoColumnsFlexLayout>
          <TwoColumnsFlexLayoutColumn className="flex flex-col gap-4">
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>Qualité reconnue</HeadingContent>
            </Heading>

            <p>
              INOLIB est certifiée Qualiopi pour ses actions de formation. Cette certification, reconnue au niveau
              national, atteste de la qualité de nos processus et de notre engagement à proposer des formations
              répondant aux plus hauts standards.
            </p>
          </TwoColumnsFlexLayoutColumn>

          <TwoColumnsFlexLayoutColumn className="flex flex-col gap-4">
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>Confiance de nos clients</HeadingContent>
            </Heading>

            <p>
              En obtenant la certification Qualiopi, nous vous garantissons une formation conforme aux exigences du
              Référentiel National Qualité, assurant ainsi des prestations fiables et adaptées à vos besoins
              professionnels. Cette certification renforce la confiance de nos clients, partenaires et financeurs, en
              certifiant que vous bénéficiez d’une formation sérieuse, structurée et en constante amélioration.
            </p>
          </TwoColumnsFlexLayoutColumn>
        </TwoColumnsFlexLayout>

        <Link
          _border="black"
          _color="white"
          _shape="button"
          aria-label="En savoir plus sur notre certificat Qualiopi"
          href="/inolib-academy/certificat-qualiopi"
        >
          <span>En savoir plus</span>
          <ArrowNarrowRightIcon className="stroke-black" />
        </Link>
      </div>
    </Section>
  );
};
