import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/accompagnement";
import {
  AdditionalServices,
  Header,
  OperationalSupport,
  StrategicSupport,
} from "~/components/app/(pages)/accompagnement/(subpages)/accompagnement-de-projet";

export const metadata: Metadata = {
  title: "Accompagnement de projet pour l’accessibilité numérique | INOLIB",
  description:
    "INOLIB vous accompagne dans vos projets en intégrant l’accessibilité numérique à chaque étape. De la stratégie à l’opérationnel, nous assurons des solutions performantes et conformes aux normes RGAA et WCAG.",
  openGraph: {
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    title: "Accompagnement de projet pour l’accessibilité numérique",
    description:
      "INOLIB vous accompagne dans vos projets en intégrant l’accessibilité numérique à chaque étape. De la stratégie à l’opérationnel, nous assurons des solutions performantes et conformes aux normes RGAA et WCAG.",
    images: `${process.env.SITE_URL}/images/illustrations/app/(pages)/accompagnement/header.svg`,
    url: `${process.env.SITE_URL}/accompagnement/accompagnement-de-projet`,
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
