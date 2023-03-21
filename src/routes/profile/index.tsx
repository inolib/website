import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { BannerProfile } from "~/components/header/BannerProfile";

export default component$(() => {
  return (
    <>
      <BannerProfile title="MY FAKE COMPAGNY" imageSrc="/images/userLogo.png" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Profile",
};
