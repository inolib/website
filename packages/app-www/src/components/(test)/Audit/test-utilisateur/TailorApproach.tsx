import Image from "next/image";

import { fetchTailoredApproachData } from "~/app/utils/fetchPolicy";
import { BorderCard } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
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

type TailoredApproachProps = {
  _color: string;
};

export const TailoredApproach = async ({ _color }: TailoredApproachProps) => {
  const { sectionClassName } = variants({ _color });

  // Récupération des données
  const { title, subheading, paragraphs, illustration } = await fetchTailoredApproachData();

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{title}</HeadingContent>
        <HeadingSubheading>{subheading}</HeadingSubheading>
      </Heading>

      <Verbose _isReversed>
        <VerboseContent>
          {paragraphs.map((item, index) => (
            <BorderCard key={index}>
              <Heading _alignment="left" _size="2xl">
                <HeadingContent _level={3}>{item.title}</HeadingContent>
              </Heading>
              {item.text.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </BorderCard>
          ))}

          <Link _color="blue-900" _shape="button" href="/contact">
            Demander un devis
          </Link>
        </VerboseContent>

        <VerboseIllustration>
          {illustration && (
            <Image alt="Illustration" className="max-h-96 w-auto" height={300} src={illustration} width={300} />
          )}
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
