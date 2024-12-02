import type { Metadata } from "next";

import { Approach, Header, Services, Why } from "~/components/app/(pages)/developpement";

export const metadata: Metadata = {
  title: "Développement web et mobile sur mesure | INOLIB",
  description:
    "Découvrez INOLIB, votre expert en développement web et mobile. Solutions sur mesure, éthiques, et performantes, pour répondre à vos besoins numériques.",
  openGraph: {
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    title: "Développement web et mobile sur mesure",
    description:
      "Découvrez INOLIB, votre expert en développement web et mobile. Solutions sur mesure, éthiques, et performantes, pour répondre à vos besoins numériques.",
    images: `${process.env.SITE_URL}/images/illustrations/app/(pages)/developpement/header.svg`,
    url: `${process.env.SITE_URL}/developpement`,
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <Services _color="neutral-50" />
      <Approach _color="white" />
      <Why _color="neutral-50" />
    </>
  );
};

export default Page;
