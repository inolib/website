import Image from "next/image";

import { fetchMethodology } from "~/app/utils/fetchPolicy";
import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import {
  Highlights,
  HighlightsContent,
  HighlightsIllustration,
  HighlightsListItem,
  HighlightsOrderedList,
} from "~/components/highlights";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

type MethodologyProps = {
  _color: string;
};

export const Methodology = async ({ _color }: MethodologyProps) => {
  const { title, illustration, highlights } = await fetchMethodology();

  return (
    <Section className="flex flex-col gap-24">
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{title}</HeadingContent>
      </Heading>

      <Highlights>
        <HighlightsContent>
          <HighlightsOrderedList>
            {highlights.map((item, index) => (
              <HighlightsListItem key={index}>
                <BoxCard>
                  <BoxCardIcon className="my-auto">
                    {item.icon && <Image alt="" height={48} src={item.icon} width={48} />}
                  </BoxCardIcon>

                  <BoxCardContent className="gap-4">
                    <p className="text-xl font-bold">{item.title}</p>
                    <p>{item.description}</p>
                  </BoxCardContent>
                </BoxCard>
              </HighlightsListItem>
            ))}
          </HighlightsOrderedList>
        </HighlightsContent>

        <HighlightsIllustration>
          {illustration && <Image alt="" className="max-h-96 w-auto" height={300} src={illustration} width={300} />}
        </HighlightsIllustration>
      </Highlights>
    </Section>
  );
};
