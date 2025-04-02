import type { Metadata } from "next";

import { EducationalApproach, Header, Qualiopi, TrainingCourses, Why } from "~/components/app/(pages)/formations";
import { strapiApi } from "~/lib/strapi";

export const metadata: Metadata = {
  title: "INOLIB Academy – Formations aux métiers du numérique et à l’accessibilité numérique | INOLIB",
  description:
    "INOLIB Academy est un centre de formation dédié aux compétences numériques et à l’accessibilité numérique. Nos parcours, conçus pour répondre aux besoins des entreprises, allient théorie et pratique afin de garantir l’acquisition de compétences directement applicables en milieu professionnel.",
  openGraph: {
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    title: "INOLIB Academy – Formations aux métiers du numérique et à l’accessibilité numérique",
    description:
      "INOLIB Academy est un centre de formation dédié aux compétences numériques et à l’accessibilité numérique. Nos parcours, conçus pour répondre aux besoins des entreprises, allient théorie et pratique afin de garantir l’acquisition de compétences directement applicables en milieu professionnel.",
    images: `${process.env.SITE_URL}/images/illustrations/app/(pages)/formations/header.jpg`,
    url: `${process.env.SITE_URL}/formations`,
  },
};

// Fetch initial categories server-side
const getFormations = async () => {
  try {
    const response = await strapiApi.formation.getFormations({
      sort: "id:desc",
      paginationPage: 1,
      paginationPageSize: 100,
      populate: "*"
    });
    return response.data.data ?? [];
  } catch (error) {
    console.error("Erreur lors de la récupération des formations :", error);
    return [];
  }
};

const Page = async () => {
  const formations = await getFormations();

  return (
    <>
      <Header />
      <TrainingCourses _color="neutral-50" courses={formations} />
      <EducationalApproach _color="white" />
      <Why _color="neutral-50" />
      <Qualiopi _color="white" />
    </>
  );
};

export default Page;
