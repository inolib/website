import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/audit/(subpages)";
import { FAQ, Header, Methodology, Services } from "~/components/app/(pages)/audit/(subpages)/audit-de-conformite";

export const metadata: Metadata = {
  title: "Audit de conformité en accessibilité numérique | INOLIB",
  description:
    "Découvrez nos audits d’accessibilité numérique (RGAA, WCAG) pour respecter les normes légales et offrir une meilleure expérience à vos utilisateurs.",
  openGraph: {
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    title: "Audit de conformité en accessibilité numérique",
    description:
      "Découvrez nos audits d’accessibilité numérique pour respecter les normes légales RGAA et WCAG et offrir une meilleure expérience à vos utilisateurs.",
    images: `${process.env.SITE_URL}/images/illustrations/app/(pages)/audit/header.svg`,
    url: `${process.env.SITE_URL}/audit/audit-de-conformite`,
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <Services _color="neutral-50" />
      <Methodology _color="white" />
      <GoFurther _color="neutral-50" />
      <FAQ _color="white" />
    </>
  );
};

export default Page;
