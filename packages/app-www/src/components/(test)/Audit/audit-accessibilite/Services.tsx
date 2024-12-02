import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { fetchServiceAudit } from "~/app/utils/fetchPolicy";
import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
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

import Flag01Icon from "#/images/icons/flag-01.svg";
import PackageIcon from "#/images/icons/package.svg";
import ThumbsUpIcon from "#/images/icons/thumbs-up.svg";
import certificationAuditIllustration from "#/images/illustrations/app/(pages)/audit/(subpages)/audits-accessibilite/certification-audit.svg?url";
import conformityAuditIllustration from "#/images/illustrations/app/(pages)/audit/(subpages)/audits-accessibilite/conformity-audit.svg?url";
import controlAuditIllustration from "#/images/illustrations/app/(pages)/audit/(subpages)/audits-accessibilite/control-audit.svg?url";

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

type ServicesProps = {
  _color: NonNullable<Variants["_color"]>;
};

type Variants = VariantProps<typeof variants>;

export const Services = async ({ _color }: ServicesProps) => {
  const { sectionClassName } = variants({ _color });

  const { services, titre } = await fetchServiceAudit();

  return (
    <Section className="flex flex-col gap-24 bg-white">
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{titre}</HeadingContent>
      </Heading>

      {services.map((service, index) => (
        <Highlights _isReversed={index % 2 === 0} key={index}>
          <HighlightsContent>
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>{service.title}</HeadingContent>
              <HeadingSubheading>{service.subtitle}</HeadingSubheading>
            </Heading>

            <HighlightsUnorderedList>
              {service.highlights.map((highlight, highlightIndex) => (
                <HighlightsListItem key={highlightIndex}>
                  <BoxCard>
                    <BoxCardIcon>
                      <Image alt="" height={48} src={highlight.icon} width={48} />
                    </BoxCardIcon>

                    <BoxCardContent className="gap-4">
                      <p className="text-xl font-bold">{highlight.title}</p>
                      <p>{highlight.description}</p>
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
            {service.illustration && (
              <Image alt="" className="max-h-96 w-auto" height={300} src={service.illustration} width={300} />
            )}
          </HighlightsIllustration>
        </Highlights>
      ))}
    </Section>
  );
};
