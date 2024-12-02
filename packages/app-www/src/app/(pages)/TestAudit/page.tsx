import type { Metadata } from "next";

import { FAQ } from "~/components/(test)/Audit/audit-accessibilite/FAQ";
import { Header } from "~/components/(test)/Audit/audit-accessibilite/Header";
import { Methodology } from "~/components/(test)/Audit/audit-accessibilite/Methodology";
import { Services } from "~/components/(test)/Audit/audit-accessibilite/Services";

{
  /*



import { GoFurther } from "~/components/app/(pages)/audit/(subpages)";
**/
}
export const metadata: Metadata = {
  title: "Audits d’accessibilité conformes aux normes RGAA, WCAG, et RAWeb | INOLIB",
  description:
    "Découvrez nos audits d’accessibilité numérique (RGAA, WCAG, RAWeb) pour respecter les normes légales et offrir une meilleure expérience à vos utilisateurs.",
  openGraph: {
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    title: "Audits d’accessibilité conformes aux normes RGAA, WCAG, et RAWeb",
    description:
      "Découvrez nos audits d’accessibilité numérique (RGAA, WCAG, RAWeb) pour respecter les normes légales et offrir une meilleure expérience à vos utilisateurs.",
    images: `${process.env.SITE_URL}/images/illustrations/app/(pages)/audit/header.svg`,
    url: `${process.env.SITE_URL}/audit/audits-accessibilite`,
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <Services _color="neutral-50" />
      <Methodology _color="white" />
      <FAQ _color="white" />
      {/*

      <GoFurther _color="neutral-50" />
     **/}
    </>
  );
};

export default Page;
