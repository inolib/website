import { Heading, HeadingContent } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-center gap-24 bg-sand-50 bg-[url('/images/illustrations/app/contact.svg')] bg-[length:32.125rem_18.75rem] bg-[center_bottom_-7rem] bg-no-repeat pb-48 sm:bg-[length:40.15625rem_23.4375rem] sm:bg-[center_bottom_-8.7rem] md:bg-[length:48.1875rem_28.125rem] md:bg-[center_bottom_-10.4rem] lg:bg-[length:72.28125rem_42.1875rem] lg:bg-[center_bottom_-15.6rem]">
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Une question, un devis, ou envie d’échanger ?</HeadingContent>
      </Heading>

      <Link _color="blue-900" _shape="button" href="/contact">
        Nous contacter
      </Link>
    </Section>
  );
};
