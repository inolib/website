import type { Metadata } from "next";

import { Approach } from "~/components/(test)/developpment/Approch";
import { Header1 } from "~/components/(test)/developpment/Header";
import { Services } from "~/components/(test)/developpment/Service";
import { Why1 } from "~/components/(test)/developpment/Why";

export const metadata: Metadata = {
  title: "À propos | INOLIB",
};
const Page = () => {
  return (
    <>
      {" "}
      <Header1 />
      <Services _color="white" />
      <Approach _color="white" />
      <Why1 _color="white" />
    </>
  );
};

export default Page;
