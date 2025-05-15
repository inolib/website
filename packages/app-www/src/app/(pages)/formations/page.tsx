import type { Metadata } from "next";
import { EducationalApproach, Header, Qualiopi, TrainingCourses, Why } from "~/components/app/(pages)/formations";
import { strapiApi } from "~/lib/strapi";

export const metadata: Metadata = {
  title: "Nos formations | INOLIB",
  description: "Découvrez toutes les formations Inolib.",
  openGraph: {
    title: "Nos formations | INOLIB",
    description: "Découvrez toutes les formations Inolib.",
    url: "${process.env.SITE_URL}/formations",
    type: "website",
    siteName: "INOLIB",
    locale: "fr_FR",
    images: [
      {
        url: "${process.env.SITE_URL}/images/logos/inolib/inolib-blue.jpg",
        width: 1200,
        height: 630,
        alt: "INOLIB - Nos formations",
      },
    ],
  },
};

const Page = async () => {
  // const [formations, setFormations] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);

  let formations: any[] = [];
  try {
    const response = await strapiApi.formation.getFormations({
      sort: "id:desc",
      paginationPage: 1,
      paginationPageSize: 100,
      populate: "*",
    });
    formations = response.data.data ?? [];
  } catch (error) {
    // Gère l'erreur ici si besoin
    console.error("Erreur lors de la récupération des formations :", error);
  }

  // useEffect(() => {
  //   const fetchFormations = async () => {
  //     try {
  //       const response = await strapiApi.formation.getFormations({
  //         sort: "id:desc",
  //         paginationPage: 1,
  //         paginationPageSize: 100,
  //         populate: "*",
  //       });
  //       setFormations(response.data.data ?? []);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des formations :", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchFormations();
  // }, []);

  return (
    <>
      <Header />
      <TrainingCourses _color="neutral-50" courses={formations} loading={false} />
      <EducationalApproach _color="white" />
      <Why _color="neutral-50" />
      <Qualiopi _color="white" />
    </>
  );
};

export default Page;
