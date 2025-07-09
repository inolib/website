import Image from "next/image";

import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";
import headerIllustration from "#/images/illustrations/app/header.svg?url";
import inolibYellowLogo from "#/images/logos/inolib/inolib-yellow.svg?url";
import { extractRichText } from "~/helpers/extractRichText";
import { getMediaUrl } from "~/helpers/getMediaUrl";
import type { HomePageRequestDataSectionsInner } from "~/lib/strapi/api-client";

export const Header = ({ headerData }: { headerData?: HomePageRequestDataSectionsInner }) => {
  const title = extractRichText(headerData?.title);
  const subtitle = extractRichText(headerData?.subtitle);
  const heroImageUrl = getMediaUrl(headerData?.heroImage?.media);
  const heroButtons = headerData?.heroButton ?? [];
  const firstButton = heroButtons[0] ?? {};
  const secondButton = heroButtons[1] ?? {};

  return (
    <div className="bg-blue-900">
      <Section className="flex flex-col gap-8 bg-blue-950 bg-[radial-gradient(at_bottom_left,_#304825_0%,_rgb(17_31_34_/_0)_50%),_radial-gradient(at_bottom_right,_#304825_0%,_rgb(17_31_34_/_0)_50%)] first-of-type:pt-24 sm:rounded-tr-[18rem]">
        <TwoColumnsFlexLayout>
          <TwoColumnsFlexLayoutColumn className="flex flex-col gap-24">
            <div className="flex flex-col gap-8">
              {/* <p className="pointer-events-none flex w-fit gap-2 rounded-full border border-yellow-500 bg-neutral-700 p-1 text-sm text-white hover:bg-neutral-800">
                <span className="rounded-full border border-yellow-500 bg-blue-950 px-2 text-center">
                  Explorez nos dernier articles
                </span>

                <Link
                  _color="transparent"
                  _shape="button"
                  className="pointer-events-auto rounded-full px-2 py-0 focus-visible:outline-yellow-500"
                  href="#blog"
                >
                  <span>Accéder aux actualités</span>
                  <ArrowNarrowDownIcon className="shrink-0 stroke-white" />
                </Link>
              </p> */}

              <div className="h-[2.145rem]" />

              <div className="flex flex-col gap-8 text-white">
                <h1 className="text-5xl font-semibold sm:text-6xl md:text-5xl lg:text-6xl">
                  <Image
                    alt=""
                    className="relative bottom-[-0.03125rem] inline-block h-[2.333rem] w-fit align-baseline sm:h-12 md:h-[2.333rem] lg:h-12"
                    src={inolibYellowLogo}
                  />
                  <span className="sr-only">INOLIB</span>
                  {title}
                </h1>

                <p className="text-xl font-normal text-sand-400">{subtitle}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 self-center sm:flex-row md:flex-col lg:flex-row lg:self-start">
              <Link
                _border="sand-400"
                _color="blue-950"
                _shape="button"
                className="shrink-0 text-sand-400"
                href={firstButton.url ?? "#"}
                aria-label={firstButton.ariaLabel ?? undefined}
              >
                <span>{firstButton.label ?? "Découvrir nos services"}</span>
                <ArrowNarrowDownIcon className="stroke-sand-400" />
              </Link>

              <Link
                _color="yellow-500"
                _shape="button"
                className="w-auto shrink-0"
                href={secondButton.url ?? "#"}
                aria-label={secondButton.ariaLabel ?? undefined}
              >
                {secondButton.label ?? "Nous contacter"}
              </Link>
            </div>
          </TwoColumnsFlexLayoutColumn>

          <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
            <Image
              alt=""
              className="h-96 md:size-full"
              src={heroImageUrl}
              width={headerData?.heroImage?.media?.width || 400}
              height={headerData?.heroImage?.media?.height || 300}
            />
          </TwoColumnsFlexLayoutColumn>
        </TwoColumnsFlexLayout>
      </Section>
    </div>
  );
};
