import type { Metadata } from "next";

import { AdditionalServices } from "~/components/(test)/Accopmagnement/(subpages)/accompagnment-de-projet/AdditionalServices";
import { GoFurther } from "~/components/(test)/Accopmagnement/(subpages)/accompagnment-de-projet/goFurther";
import { Header } from "~/components/(test)/Accopmagnement/(subpages)/accompagnment-de-projet/Header";
import { OperationalSupport } from "~/components/(test)/Accopmagnement/(subpages)/accompagnment-de-projet/Operational";
import { StrategicSupport } from "~/components/(test)/Accopmagnement/(subpages)/accompagnment-de-projet/stratigic";

export const metadata: Metadata = {
  title: "Accompagnement de projet | INOLIB",
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
