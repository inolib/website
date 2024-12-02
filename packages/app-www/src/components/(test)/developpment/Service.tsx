import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchServices } from "~/app/utils/fetchPolicy";
import { RoundedIcon } from "~/components/(test)/icon/RoundedIcons";
import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
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

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";
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

type ServicesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Services = async ({ _color }: ServicesProps) => {
  const { sectionClassName } = variants({ _color });

  const services = await fetchServices();

  const hardcodedLinks: Record<string, { label: string; href: string }> = {
    "Développement de sites web": {
      label: "En savoir plus sur le développement de sites web",
      href: "/developpement/sites-web",
    },
    "Développement d’applications mobiles": {
      label: "En savoir plus sur les applications mobiles",
      href: "/developpement/applications-mobiles",
    },
    "Développement de solutions SaaS": {
      label: "En savoir plus sur les solutions SaaS",
      href: "/developpement/solutions-saas",
    },
    "Design et branding": {
      label: "En savoir plus sur le design et le branding",
      href: "/developpement/design-branding",
    },
  };

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos services</HeadingContent>
      </Heading>

      {services.listItems.map((item, index) => {
        const link = hardcodedLinks[item.title];

        return (
          <Highlights _isReversed={index % 2 === 0} key={index}>
            <HighlightsContent>
              <Heading _alignment="left" _size="2xl">
                <HeadingContent _level={3}>{item.title}</HeadingContent>
              </Heading>

              <HighlightsUnorderedList>
                {item.highlights.map((highlight, highlightIndex) => (
                  <HighlightsListItem key={highlightIndex}>
                    <BoxCard>
                      <BoxCardContent>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <RoundedIcon className="size-12 bg-blue-300">
                              <RoundedIcon className="size-9 bg-blue-900">
                                <Image alt="" height={60} src={highlight.icon} width={60} />
                              </RoundedIcon>
                            </RoundedIcon>
                            <p className="text-xl font-bold">{highlight.title}</p>
                          </div>
                          <p>{highlight.description}</p>
                        </div>

                        {link && (
                          <Link
                            _border="black"
                            _color="blue-50"
                            _shape="button"
                            aria-label={link.label}
                            href={link.href}
                          >
                            <span>En savoir plus</span>
                            <ArrowNarrowDownIcon className="-rotate-90 stroke-black" />
                          </Link>
                        )}
                      </BoxCardContent>
                    </BoxCard>
                  </HighlightsListItem>
                ))}
              </HighlightsUnorderedList>

              <Link _color="blue-900" _shape="button" href="/contact">
                Demander un devis
              </Link>
            </HighlightsContent>

            <HighlightsIllustration>
              <Image alt="" className="h-96 object-contain" height={200} src={item.illustration} width={300} />
            </HighlightsIllustration>
          </Highlights>
        );
      })}
    </Section>
  );
};
