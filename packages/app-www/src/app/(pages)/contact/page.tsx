import type { Metadata } from "next";

import { Address, ContactForm } from "~/components/app/(pages)/contact";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Contactez-nous | INOLIB",
};

const Page = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Contactez-nous</HeadingContent>
          </Heading>

          <div className="flex flex-col gap-4">
            <p>Besoin d’aide, envie de collaborer, ou simplement prendre un café ?</p>
            <p>Nous sommes à votre écoute.</p>
          </div>
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>

      <div className="flex flex-col gap-16 lg:flex-row lg:gap-32">
        <div className="flex flex-col gap-8 lg:basis-1/4">
          <Address />

          <Link _color="blue-900" _shape="button" className="self-center" href="/contact/rendez-vous">
            Prendre rendez-vous
          </Link>
        </div>

        <div className="lg:basis-3/4">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Page;
