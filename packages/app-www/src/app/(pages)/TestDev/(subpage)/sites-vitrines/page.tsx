import type { Metadata } from "next";

import { GoFurther } from "~/components/(test)/developpment/GoFarther";
import { Header } from "~/components/(test)/developpment/siteVitrine/Header";
import { InstitutionalWebsites } from "~/components/(test)/developpment/siteVitrine/institutional";
import { ShowcaseWebsites } from "~/components/(test)/developpment/siteVitrine/show";
import { Steps } from "~/components/(test)/developpment/siteVitrine/steps";

export const metadata: Metadata = {
  title: "Développement de sites vitrines et institutionnels | INOLB",
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
