import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/developpement";
import {
  Header,
  InstitutionalWebsites,
  ShowcaseWebsites,
  Steps,
} from "~/components/app/(pages)/developpement/(subpages)/sites-vitrines-et-institutionnels";

export const metadata: Metadata = {
  title: "Création et refonte de votre site web | INOLIB",
  description: "Découvrez nos solutions de sites web sur mesure, pour répondre à vos besoins.",
  openGraph: {
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    title: "Création et refonte de votre site web",
    description: "Découvrez nos solutions de sites web sur mesure, pour répondre à vos besoins.",
    images: `${process.env.SITE_URL}/images/illustrations/app/(pages)/developpement/header.svg`,
    url: `${process.env.SITE_URL}/developpement/sites-vitrines-et-institutionnels`,
  },
};

const Page = () => {
  return (
    <>
      <Header />
      <ShowcaseWebsites _color="neutral-50" />
      <InstitutionalWebsites _color="white" />
      <Steps _color="neutral-50" />
      <GoFurther _color="white" />
    </>
  );
};

export default Page;
