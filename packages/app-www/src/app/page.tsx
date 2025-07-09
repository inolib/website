import type { Metadata } from "next";

import { Blog, Contact, Header, ScrollingText, Services, SocialProof, Testimonials } from "~/components/app";
import { strapiApi } from "~/lib/strapi";
import type { HomePage } from "~/lib/strapi/api-client";

export const metadata: Metadata = {
  title: "Accueil | INOLIB",
  description: "",
};

const Page = async () => {
  let homeData: HomePage = {};
  try {
    const response = await strapiApi.homePage.getHomePage({
      populate: "sections.heroImage.media, sections.heroButton",
    });
    console.log("home data", response.data.data);
    homeData = response.data.data ?? {};
  } catch (error) {
    console.log(error);
  }

  const headerData = homeData?.sections?.[0];

  console.log("headerData", headerData);

  return (
    <>
      <Header headerData={headerData} />
      <SocialProof _color="sand-50" />
      <ScrollingText />
      <Services _color="white" />
      <Testimonials _color="blue-950" />
      <Blog />
      <Contact />
    </>
  );
};

export default Page;
