import type { Metadata } from "next";

import { Approach } from "~/components/(test)/developpment/Approch";
import { Header1 } from "~/components/(test)/developpment/Header";
import { Services } from "~/components/(test)/developpment/Service";
import { Why1 } from "~/components/(test)/developpment/Why";
import { EducationalApproach } from "~/components/(test)/formation/EducationalApproach";
import { Header } from "~/components/(test)/formation/Header";
import { Qualiopi } from "~/components/(test)/formation/qualiopi";
import { TrainingCourses } from "~/components/(test)/formation/training";
import { Why } from "~/components/(test)/formation/Why";

export const metadata: Metadata = {
  title: "À propos | INOLIB",
};
const Page = () => {
  return (
    <>
      {" "}
      <Header />
      <EducationalApproach _color="white" />
      <Why _color="white" />
      <TrainingCourses _color="white" />
      <Qualiopi _color="white" />
    </>
  );
};

export default Page;
