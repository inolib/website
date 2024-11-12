import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BoxCard, BoxCardContent } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import {
  Highlights,
  HighlightsContent,
  HighlightsIllustration,
  HighlightsListItem,
  HighlightsUnorderedList,
} from "~/components/highlights";
import { RoundedIcon } from "~/components/icon";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";
import Building02Icon from "#/images/icons/building-02.svg";
import Building08Icon from "#/images/icons/building-08.svg";
import Image05Icon from "#/images/icons/image-05.svg";
import Phone01Icon from "#/images/icons/phone-01.svg";
import RulerIcon from "#/images/icons/ruler.svg";
import ShoppingBag03Icon from "#/images/icons/shopping-bag-03.svg";
import designIllustration from "#/images/illustrations/app/(pages)/developpement/design.svg?url";
import mobileAppIllustration from "#/images/illustrations/app/(pages)/developpement/mobile-app.svg?url";
import saasIllustration from "#/images/illustrations/app/(pages)/developpement/saas.svg?url";
import websiteIllustration from "#/images/illustrations/app/(pages)/developpement/website.svg?url";

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

export const Services = ({ _color }: ServicesProps) => {
  const { sectionClassName } = variants({ _color });

  const services = [
    {
      title: "Développement de sites web",
      highlights: [
        {
          icon: <Building02Icon className="size-6 stroke-yellow-500" />,
          title: "Site vitrines",
          description:
            "Améliorez votre visibilité en ligne avec un site vitrine élégant et intuitif. Offrez à vos visiteurs une expérience utilisateur optimale.",
          link: {
            label: "En savoir plus sur le développement de sites vitrines",
            href: "/developpement/sites-vitrines-et-institutionnels",
          },
        },
        {
          icon: <Building08Icon className="size-6 stroke-yellow-500" />,
          title: "Sites institutionnels",
          description:
            "Valorisez vos activités et vos valeurs. Nos sites institutionnels transmettent vos messages clés de manière claire et impactante.",
          link: {
            label: "En savoir plus sur le développement de sites institutionnels",
            href: "/developpement/sites-vitrines-et-institutionnels",
          },
        },
        {
          icon: <ShoppingBag03Icon className="size-6 stroke-yellow-500" />,
          title: "Solutions e-commerce",
          description:
            "Lancez une boutique en ligne performante avec des fonctionnalités adaptées à vos besoins. Chaque solution est optimisée pour une expérience d’achat fluide et une augmentation des conversions.",
        },
      ],
      illustration: websiteIllustration,
    },
    {
      title: "Développement d’applications mobiles",
      highlights: [
        {
          icon: <Phone01Icon className="size-6 stroke-yellow-500" />,
          title: "Applications natives et hybrides",
          description:
            "Créez des applications mobiles sur mesure pour iOS et Android. Nos solutions allient performance et facilité d’utilisation.",
        },
      ],
      illustration: mobileAppIllustration,
    },
    {
      title: "Développement de solutions SaaS",
      highlights: [
        {
          icon: <RulerIcon className="size-6 stroke-yellow-500" />,
          title: "Logiciels sur mesure",
          description:
            "Optimisez vos processus avec des logiciels SaaS personnalisés, conçus pour soutenir la croissance de votre entreprise.",
        },
      ],
      illustration: saasIllustration,
    },
    {
      title: "Design et branding",
      highlights: [
        {
          icon: <Image05Icon className="size-6 stroke-yellow-500" />,
          title: "UI/UX et identité visuelle",
          description:
            "Renforcez votre identité visuelle avec des interfaces marquantes. Nous créons des expériences utilisateur intuitives et attractives.",
        },
      ],
      illustration: designIllustration,
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos services</HeadingContent>
      </Heading>

      {services.map((item, index) => (
        <Highlights _isReversed={index % 2 === 0} key={index}>
          <HighlightsContent>
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>{item.title}</HeadingContent>
            </Heading>

            <HighlightsUnorderedList>
              {item.highlights.map((item, index) => (
                <HighlightsListItem key={index}>
                  <BoxCard>
                    <BoxCardContent>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                          <RoundedIcon className="size-12 bg-blue-300">
                            <RoundedIcon className="size-9 bg-blue-900">{item.icon}</RoundedIcon>
                          </RoundedIcon>

                          <p className="text-xl font-bold">{item.title}</p>
                        </div>
                        <p>{item.description}</p>
                      </div>

                      {item.link === undefined ? undefined : (
                        <Link
                          _border="black"
                          _color="blue-50"
                          _shape="button"
                          aria-label={item.link.label}
                          href={item.link.href}
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
            <Image alt="" className="max-h-96 w-auto" src={item.illustration} />
          </HighlightsIllustration>
        </Highlights>
      ))}
    </Section>
  );
};
