import type { Metadata } from "next";
import { Address } from "~/components/app/(pages)/contact/Address";
import { ContactForm } from "~/components/app/(pages)/contact/ContactForm";

import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Contactez-nous | INOLIB",
  description:
    "Besoin d’informations ou d’assistance ? Contactez INOLIB pour toute question sur nos services d’accessibilité numérique et d’innovation.",
  keywords: ["INOLIB", "Contact", "Support", "Service client", "Accessibilité numérique", "Innovation"],
  openGraph: {
    title: "Contactez-nous | INOLIB",
    description:
      "Besoin d’informations ou d’assistance ? Contactez INOLIB pour toute question sur nos services d’accessibilité numérique et d’innovation.",
    url: `${process.env.SITE_URL}/contact`,
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    images: [
      {
        url: `${process.env.SITE_URL}/images/logos/inolib/inolib-blue.jpg`,
        width: 1200,
        height: 630,
        alt: "INOLIB - Contactez notre équipe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactez-nous | INOLIB",
    description: "Besoin d’informations ou d’assistance ? Contactez notre équipe.",
    images: [`${process.env.SITE_URL}/images/logos/inolib/inolib-blue.jpg`],
  },
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
