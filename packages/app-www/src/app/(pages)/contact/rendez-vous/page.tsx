import type { Metadata } from "next";

import { Calendar } from "~/components/app/(pages)/contact/rendez-vous";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Prendre Rendez-vous | INOLIB",
  description:
    "Planifiez un rendez-vous avec nos experts en accessibilité numérique et innovation. INOLIB vous accompagne dans vos projets.",
  keywords: ["INOLIB", "Rendez-vous", "Consultation", "Accessibilité numérique", "Innovation", "Experts"],
  openGraph: {
    title: "Prendre Rendez-vous | INOLIB",
    description:
      "Planifiez un rendez-vous avec nos experts en accessibilité numérique et innovation. INOLIB vous accompagne dans vos projets.",
    url: "${process.env.SITE_URL}/contact",
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    images: [
      {
        url: "${process.env.SITE_URL}/images/logos/inolib/inolib-blue.jpg", // Ensure this image exists
        width: 1200,
        height: 630,
        alt: "INOLIB - Prendre Rendez-vous avec nos experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prendre Rendez-vous | INOLIB",
    description: "Planifiez un rendez-vous avec nos experts en accessibilité numérique et innovation.",
    images: ["${process.env.SITE_URL}/images/logos/inolib/inolib-blue.jpg"],
  },
};

const Page = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Prenez rendez-vous</HeadingContent>
            <HeadingSubheading>Un moment d’échange avec notre équipe.</HeadingSubheading>
          </Heading>
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>

      <Calendar />
    </Section>
  );
};

export default Page;
