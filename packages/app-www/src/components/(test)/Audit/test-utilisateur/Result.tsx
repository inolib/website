import { fetchResultsData } from "~/app/utils/fetchPolicy";
import { RoundedIcon } from "~/components/(test)/icon/RoundedIcons";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col gap-16",
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

type ResultsProps = {
  _color: string;
};

export const Results = async ({ _color }: ResultsProps) => {
  const { sectionClassName } = variants({ _color });

  // Récupération des données via l'API
  const { title, subheading, values } = await fetchResultsData();

  return (
    <Section className={sectionClassName()}>
      <div className="flex flex-col items-center gap-8">
        <Heading _alignment="center" _size="4xl">
          <HeadingContent _level={2}>{title}</HeadingContent>
          <HeadingSubheading>{subheading}</HeadingSubheading>
        </Heading>
      </div>

      <FlexGridList>
        {values.map((item, index) => (
          <FlexGridListItem key={index}>
            <RoundedIcon className="size-12 bg-blue-300">
              <RoundedIcon className="size-9 bg-blue-900">
                <img alt="" className="size-6" src={item.icon} />
              </RoundedIcon>
            </RoundedIcon>

            <p className="text-2xl font-bold">{item.title}</p>
            <p>{item.description}</p>
            {item.link && (
              <a className="text-blue-600 underline" href={item.link}>
                En savoir plus
              </a>
            )}
          </FlexGridListItem>
        ))}
      </FlexGridList>
    </Section>
  );
};
