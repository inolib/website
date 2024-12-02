import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/accompagnement";
import {
  AccessibilityAudit,
  Header,
  Monitoring,
  Recommendations,
  Referent,
  TechnicalSupport,
} from "~/components/app/(pages)/accompagnement/(subpages)/accompagnement-technique";

export const metadata: Metadata = {
  title: "Accompagnement technique pour l’accessibilité numérique | INOLIB",
  description:
    "INOLIB vous accompagne vers l’accessibilité numérique de vos outils numériques. Nous réalisons des audits, fournissons des recommandations, assurons un support technique et offrons un suivi continu pour garantir la conformité RGAA, WCAG, et RAWeb.",
  openGraph: {
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    title: "Accompagnement technique pour l’accessibilité numérique",
    description:
      "INOLIB vous accompagne vers l’accessibilité numérique de vos outils numériques. Nous réalisons des audits, fournissons des recommandations, assurons un support technique et offrons un suivi continu pour garantir la conformité RGAA, WCAG, et RAWeb.",
    images: `${process.env.SITE_URL}/images/illustrations/app/(pages)/accompagnement/header.svg`,
    url: `${process.env.SITE_URL}/accompagnement/accompagnement-technique`,
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <AccessibilityAudit _color="neutral-50" />
      <TechnicalSupport _color="white" />
      <Monitoring _color="neutral-50" />
      <Referent _color="white" />
      <Recommendations _color="neutral-50" />
      <GoFurther _color="white" />
    </>
  );
};

export default Page;
