import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchQualiopi } from "~/app/utils/fetchPolicy";
import { BorderCard } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { Verbose, VerboseContent, VerboseIllustration } from "~/components/verbose";
import { tv } from "~/helpers";

import ArrowNarrowRightIcon from "#/images/icons/arrow-narrow-right.svg";
import educationIllustration from "#/images/logos/qualiopi/qualiopi.png";

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

export const Qualiopi = async ({ _color }: QualiopiProps) => {
  const { sectionClassName } = variants({ _color });

  const qualiopi = await fetchQualiopi();

  console.log("show qualiopi", qualiopi);

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{qualiopi.titre}</HeadingContent>
        <HeadingSubheading>{qualiopi.introduction}</HeadingSubheading>
      </Heading>

      <div className="flex flex-col gap-8">
        <Verbose>
          <VerboseContent>
            {qualiopi.list.map((item, index) => (
              <BorderCard key={index}>
                {item.ListItem?.map((listItem, i) => (
                  <div key={i}>
                    {listItem.type === "heading" && <p className="text-xl font-bold">{listItem.children[0].text}</p>}
                    {listItem.type === "paragraph" && <p>{listItem.children[0].text}</p>}
                  </div>
                ))}
              </BorderCard>
            ))}
          </VerboseContent>

          <VerboseIllustration>
            <Image alt="" className="h-96" src={educationIllustration} />
          </VerboseIllustration>
        </Verbose>
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
