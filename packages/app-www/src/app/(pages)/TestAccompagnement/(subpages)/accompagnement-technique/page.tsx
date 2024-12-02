import type { Metadata } from "next";

import { AccessibilityAudit } from "~/components/(test)/Accopmagnement/(subpages)/accompagnement-technique/AccessibilityAudit";
import { Header } from "~/components/(test)/Accopmagnement/(subpages)/accompagnement-technique/Header";
import { Monitoring } from "~/components/(test)/Accopmagnement/(subpages)/accompagnement-technique/Monitoring";
import { Recommendations } from "~/components/(test)/Accopmagnement/(subpages)/accompagnement-technique/Recommandations";
import { Referent } from "~/components/(test)/Accopmagnement/(subpages)/accompagnement-technique/Referent";
import { TechnicalSupport } from "~/components/(test)/Accopmagnement/(subpages)/accompagnement-technique/TechnicalSupport";
import { GoFurther } from "~/components/(test)/developpment/GoFarther";

export const metadata: Metadata = {
  title: "Accompagnement technique | INOLIB",
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
