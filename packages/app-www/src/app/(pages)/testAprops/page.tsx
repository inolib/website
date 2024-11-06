import type { Metadata } from "next";

import { Team } from "~/components/(test)/team";

export const metadata: Metadata = {
  title: "À propos | INOLIB",
};

const Page = () => {
  return (
    <>
      <Team _color="white" />
    </>
  );
};

export default Page;
