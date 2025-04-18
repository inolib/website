import type { Metadata } from "next";

import { Commitments, Header, Jobs, MissionAndApproach, Team, Values } from "~/components/app/(pages)/a-propos";

export const metadata: Metadata = {
  title: "À Propos de Nous | INOLIB",
  description:
    "Découvrez l’histoire, la mission et les valeurs d’INOLIB. Nous innovons pour un avenir durable et inclusif.",
  openGraph: {
    title: "À Propos de Nous | INOLIB",
    description: "Découvrez l’histoire, la mission et les valeurs d’INOLIB.",
    url: "${process.env.SITE_URL}/a-propos",
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    images: [
      {
        url: "${process.env.SITE_URL}/images/logos/inolib/inolib-blue.jpg",
        width: 1200,
        height: 630,
        alt: "INOLIB - À Propos de Nous",
      },
    ],
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <MissionAndApproach _color="neutral-50" />
      <Commitments _color="white" />
      <Values _color="neutral-50" />
      <Team _color="white" />
      <Jobs />
    </>
  );
};

export default Page;
