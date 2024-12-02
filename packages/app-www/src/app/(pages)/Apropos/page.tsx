import type { Metadata } from "next";

import { Commitments } from "~/components/(test)/a-propos/Commitments";
import { Header } from "~/components/(test)/a-propos/Header";
import { MissionAndApproach } from "~/components/(test)/a-propos/mission";
import { Team } from "~/components/(test)/a-propos/team";
import { Values } from "~/components/(test)/a-propos/valeur";
import { Qualiopi } from "~/components/(test)/formation/qualiopi";
import { TrainingCourses } from "~/components/(test)/formation/training";

export const metadata: Metadata = {
  title: "À propos | INOLIB",
};
const Page = () => {
  return (
    <>
      <Header />

      <MissionAndApproach _color="neutral-50" />
      <Commitments _color="white" />
      <Values _color="neutral-50" />
      <Team _color="white" />
    </>
  );
};

export default Page;
