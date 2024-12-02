import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/audit/(subpages)";
import {
  FAQ,
  Header,
  InclusiveApproach,
  Results,
  TailoredApproach,
} from "~/components/app/(pages)/audit/(subpages)/tests-utilisateurs";

export const metadata: Metadata = {
  title: "Tests utilisateurs | INOLIB",
  description: "Comprenez vos utilisateurs en profondeur et optimisez l’expérience qu’ils vivent avec votre produit.",
  openGraph: {
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    title: "Tests utilisateurs",
    description: "Comprenez vos utilisateurs en profondeur et optimisez l’expérience qu’ils vivent avec votre produit.",
    images: `${process.env.SITE_URL}/images/illustrations/app/(pages)/audit/header.svg`,
    url: `${process.env.SITE_URL}/audit/tests-utilisateurs`,
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <TailoredApproach _color="neutral-50" />
      <InclusiveApproach _color="white" />
      <Results _color="neutral-50" />
      <GoFurther _color="white" />
      <FAQ _color="neutral-50" />
    </>
  );
};

export default Page;
