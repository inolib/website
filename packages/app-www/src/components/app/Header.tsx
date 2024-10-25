import Image from "next/image";

import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";
import headerIllustration from "#/images/illustrations/app/header.svg?url";
import inolibYellowLogo from "#/images/logos/inolib/inolib-yellow.svg?url";

export const Header = () => {
  return (
    <div className="bg-blue-900">
      <Section className="flex flex-col gap-8 bg-gradient-to-b from-blue-950 via-[#0E2F08] to-[#323909] first-of-type:pt-24 sm:rounded-tr-[18rem]">
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
                  <span className="sr-only">INOLIB</span>, de l’idée à la réalisation pour un numérique accessible
                </h1>

                <p className="text-xl font-normal text-sand-400">
                  Auditer, accompagner, développer, et former : une équipe engagée pour la réussite de votre projet.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 self-center sm:flex-row md:flex-col lg:flex-row lg:self-start">
              <Link
                _border="sand-400"
                _color="blue-950"
                _shape="button"
                className="shrink-0 text-sand-400"
                href="#services"
              >
                <span>Découvrir nos services</span>
                <ArrowNarrowDownIcon className="stroke-sand-400" />
              </Link>

              <Link _color="yellow-500" _shape="button" className="w-auto shrink-0" href="/contact">
                Nous contacter
              </Link>
            </div>
          </TwoColumnsFlexLayoutColumn>

          <TwoColumnsFlexLayoutColumn className="flex items-center justify-center">
            <Image alt="" className="h-96 md:size-full" src={headerIllustration} />
          </TwoColumnsFlexLayoutColumn>
        </TwoColumnsFlexLayout>
      </Section>
    </div>
  );
};
