import Image from "next/image";

import { fetchInclusiveApproachData } from "~/app/utils/fetchPolicy";
import { BorderCard } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { Link } from "~/components/link";
import { UnorderedList, UnorderedListItem } from "~/components/list";
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

type InclusiveApproachProps = {
  _color: string;
};

export const InclusiveApproach = async ({ _color }: InclusiveApproachProps) => {
  const { sectionClassName } = variants({ _color });

  // Récupération des données via l'API
  const { title, subheading, illustration, paragraphs } = await fetchInclusiveApproachData();

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{title}</HeadingContent>
        <HeadingSubheading>{subheading}</HeadingSubheading>
      </Heading>

      <Verbose>
        <VerboseContent>
          {paragraphs.map((item, index) => (
            <BorderCard key={index}>
              <Heading _alignment="left" _size="2xl">
                <HeadingContent _level={3}>{item.title}</HeadingContent>
              </Heading>

              {item.text.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}

              {item.link && (
                <Link _color="blue-900" href={item.link}>
                  En savoir plus
                </Link>
              )}
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
