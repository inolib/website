import type { Metadata } from "next";

import { Team } from "~/components/(test)/a-propos/team";
import { Values } from "~/components/(test)/a-propos/valeur";

export const metadata: Metadata = {
  title: "À propos | INOLIB",
};
const Page = () => {
  return (
    <>
      <Values _color="white" />
      <Team _color="white" />
    </>
  );
};

export default Page;
