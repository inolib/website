import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

export const Contact = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-sand-50 p-8 sm:bg-[url('/images/illustrations/app/(pages)/contact.svg')] sm:bg-[length:37.5rem_9.375rem] sm:bg-[center_bottom_-3.2rem] sm:bg-no-repeat lg:bg-[length:56.25rem_14.0625rem] lg:bg-[center_bottom_-4.8rem] xl:bg-[length:75rem_18.75rem] xl:bg-[center_bottom_-6.5rem]">
        <Heading _alignment="center" _size="2xl" className="z-0">
          <HeadingContent _level={2}>Une question, un devis, ou besoin d’échanger avec nous ?</HeadingContent>
          <HeadingSubheading>Contactez-nous dès maintenant pour en discuter.</HeadingSubheading>
        </Heading>

        <Link _color="blue-900" _shape="button" className="z-0" href="/contact">
          Nous contacter
        </Link>
      </div>
    </Section>
  );
};
