import type { Metadata } from "next";
import { Blog, Header } from "~/components/app/(pages)/blog";
import { Section } from "~/components/section";
import { strapiApi } from "~/lib/strapi";
import type { BlogSetting } from "~/lib/strapi/api-client";

export const metadata: Metadata = {
  title: "Actualités | INOLIB",
};
export const revalidate = 10;

const getBlogSettings = async (): Promise<number> => {
  try {
    const response = await strapiApi.blogSettings.getBlogSetting({
      sort: "id:desc",
      paginationPage: 1,
      paginationPageSize: 100,
    });
    return response.data.data?.pageSize ?? 6; // Default to 6 if no setting found
  } catch (error) {
    console.error("Erreur lors de la récupération des configurations du blog :", error);
    return 6;
  }
};

const Page = async () => {
  const pageSize = await getBlogSettings();

  return (
    <>
      <Header />
      <Section>
        <Blog pageSize={pageSize} />
      </Section>
    </>
  );
};

export default Page;
