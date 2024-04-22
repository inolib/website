import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { ContactCard } from "~/components/cards/ContactCard";
import { ContactForm } from "~/components/ui/ContactForm";
import { LocalisationCard } from "~/components/cards/LocalisationCard";

export default component$(() => {
  return (
    <>
      <header>
        <Banner
          content="Nous serons ravis de discuter avec vous via ce formulaire ou les réseaux sociaux."
          imageStyle="md:w-3/5 md:max-w-2xl"
          imageSrc="\images\contact-banner.jpeg"
          title="Contact"
        />
      </header>

      <section class="text-[#0B3168] md:px-28">
        <h2 class="my-6 md:mb-10 md:pt-10 text-3xl font-semibold">Nous écrire :</h2>

        <section class="mb-10 flex flex-col-reverse shadow-xl md:h-[100vh] md:w-full md:flex-row-reverse md:px-0">
          <ContactForm />
          <ContactCard />
        </section>

        <LocalisationCard />

        <div class="my-10 flex w-full justify-center">
          <ButtonTopPage />
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Contact | INOLIB",
};
