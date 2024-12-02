import { fetchFaqTest } from "~/app/utils/fetchPolicy";
import { FAQ as BaseFAQ, FAQAnswer, FAQGroup, FAQQuestion } from "~/components/faq";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col items-center gap-24",
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

type FAQProps = {
  _color: string;
};

export const FAQ = async ({ _color }: FAQProps) => {
  const { sectionClassName } = variants({ _color });

  const { title, subheading, faqs } = await fetchFaqTest();

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>{title}</HeadingContent>
        <HeadingSubheading>{subheading}</HeadingSubheading>
      </Heading>

      <BaseFAQ>
        {faqs.map((item, index) => (
          <FAQGroup key={index}>
            <FAQQuestion>{item.question}</FAQQuestion>
            <FAQAnswer>{item.answer}</FAQAnswer>
          </FAQGroup>
        ))}
      </BaseFAQ>
    </Section>
  );
};
