import type { VariantProps } from "tailwind-variants";

import { BoxCard, BoxCardContent } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import { RoundedIcon } from "~/components/icon";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";
import CodeBrowserIcon from "#/images/icons/code-browser.svg";
import FileCheck02Icon from "#/images/icons/file-check-02.svg";

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

type GoFurtherProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const GoFurther = ({ _color }: GoFurtherProps) => {
  const { sectionClassName } = variants({ _color });

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Pour aller plus loin</HeadingContent>
      </Heading>

      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn>
          <BoxCard className="h-full">
            <BoxCardContent className="justify-between">
              <div className="flex flex-col gap-4">
                <Heading _alignment="left" _size="2xl">
                  <div className="flex items-center gap-4">
                    <RoundedIcon className="size-12 bg-blue-300">
                      <RoundedIcon className="size-9 bg-blue-900">
                        <FileCheck02Icon className="size-6 stroke-yellow-500" />
                      </RoundedIcon>
                    </RoundedIcon>

                    <HeadingContent _level={3}>Audits d’accessibilité</HeadingContent>
                  </div>
                </Heading>

                <p>Nous évaluons votre niveau de conformité aux référentiels en vigueur (RGAA, WCAG, RAWeb).</p>
              </div>

              <Link
                _border="black"
                _color="blue-50"
                _shape="button"
                aria-label="En savoir plus sur les audits d’accessibilité"
                href="/audit/audits-accessibilite"
              >
                <span>En savoir plus</span>
                <ArrowNarrowDownIcon className="-rotate-90 stroke-black" />
              </Link>
            </BoxCardContent>
          </BoxCard>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn>
          <BoxCard className="h-full">
            <BoxCardContent className="justify-between">
              <div className="flex flex-col gap-4">
                <Heading _alignment="left" _size="2xl">
                  <div className="flex items-center gap-4">
                    <RoundedIcon className="size-12 bg-blue-300">
                      <RoundedIcon className="size-9 bg-blue-900">
                        <CodeBrowserIcon className="size-6 stroke-yellow-500" />
                      </RoundedIcon>
                    </RoundedIcon>

                    <HeadingContent _level={3}>Développement web et mobile</HeadingContent>
                  </div>
                </Heading>

                <p>Nous transformons vos idées en solutions numériques.</p>
              </div>

              <Link
                _border="black"
                _color="blue-50"
                _shape="button"
                aria-label="En savoir plus sur le développement web et mobile"
                href="/developpement"
              >
                <span>En savoir plus</span>
                <ArrowNarrowDownIcon className="-rotate-90 stroke-black" />
              </Link>
            </BoxCardContent>
          </BoxCard>
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
