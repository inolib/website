import type { Metadata } from "next";

import { EducationalApproach, Header, Qualiopi, TrainingCourses, Why } from "~/components/app/(pages)/formations";

export const metadata: Metadata = {
  title: "INOLIB Academy – Formations aux métiers du numérique et à l’accessibilité numérique | INOLIB",
  description:
    "INOLIB Academy est un centre de formation dédié aux compétences numériques et à l’accessibilité numérique. Nos parcours, conçus pour répondre aux besoins des entreprises, allient théorie et pratique afin de garantir l’acquisition de compétences directement applicables en milieu professionnel.",
  openGraph: {
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    title: "INOLIB Academy – Formations aux métiers du numérique et à l’accessibilité numérique",
    description:
      "INOLIB Academy est un centre de formation dédié aux compétences numériques et à l’accessibilité numérique. Nos parcours, conçus pour répondre aux besoins des entreprises, allient théorie et pratique afin de garantir l’acquisition de compétences directement applicables en milieu professionnel.",
    images: `${process.env.SITE_URL}/images/illustrations/app/(pages)/formations/header.jpg`,
    url: `${process.env.SITE_URL}/formations`,
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <TrainingCourses _color="neutral-50" />
      <EducationalApproach _color="white" />
      <Why _color="neutral-50" />
      <Qualiopi _color="white" />
    </>
  );
};

export default Page;
