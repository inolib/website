import type { Metadata } from "next";

// import {
//   /*Blog,*/ Contact,
//   Header,
//   ScrollingText,
//   Services,
//   SocialProof,
//   Testimonials,
// } from "~/components/app";

export const metadata: Metadata = {
  title: "Accueil | INOLIB ACADEMY",
  description: "",
};

const Page = () => {
  return (
    <>
      <h1>Inolib Academy</h1>
      {/* <Header />
      <SocialProof _color="sand-50" />
      <ScrollingText />
      <Services _color="white" />
      <Testimonials _color="blue-950" /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
};

export default Page;
