import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/accompagnement";
import {
  AdditionalServices,
  Header,
  OperationalSupport,
  StrategicSupport,
} from "~/components/app/(pages)/accompagnement/(subpages)/pilotage-de-projet";

export const metadata: Metadata = {
  title: "Pilotage de projet pour l’accessibilité numérique | INOLIB",
  description:
    "INOLIB vous accompagne dans vos projets en intégrant l’accessibilité numérique à chaque étape. De la stratégie à l’opérationnel, nous assurons des solutions performantes et conformes aux normes RGAA, WCAG, et RAWeb.",
  openGraph: {
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    title: "Pilotage de projet pour l’accessibilité numérique",
    description:
      "INOLIB vous accompagne dans vos projets en intégrant l’accessibilité numérique à chaque étape. De la stratégie à l’opérationnel, nous assurons des solutions performantes et conformes aux normes RGAA, WCAG, et RAWeb.",
    images: `${process.env.SITE_URL}/images/illustrations/app/(pages)/accompagnement/header.jpg`,
    url: `${process.env.SITE_URL}/accompagnement/pilotage-de-projet`,
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <StrategicSupport _color="neutral-50" />
      <OperationalSupport _color="white" />
      <AdditionalServices _color="neutral-50" />
      <GoFurther _color="white" />
    </>
  );
};

export default Page;
