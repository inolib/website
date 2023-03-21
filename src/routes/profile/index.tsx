import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { BannerProfile } from "~/components/header/BannerProfile";

export default component$(() => {
  return (
    <>
      <BannerProfile
        title="MY FAKE COMPAGNY"
        imageSrc="/images/userLogo.png"
        tabs1="Mes informations"
        tabs2="Mot de passe"
        tabs3="Mes documents"
        tabs4="QCM"
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Profile",
};
