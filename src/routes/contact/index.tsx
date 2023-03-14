import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ContactCard } from "~/components/cards/ContactCard";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { ContactForm } from "~/components/ui/ContactForm";
import { LocalisationCard } from "~/components/cards/LocalisationCard";

export default component$(() => {
  return (
    <>
      <Banner
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
        imageSrc="\images\contact-banner.png"
        title="Contacts"
      />

      <main class="text-[#0B3168] md:px-28">
        <h2 class="text-2xl font-bold my-6 md:pt-10 md:mb-14">Nous écrires</h2>
        <section class="shadow-xl mb-10 flex flex-row-reverse md:px-0 md:h-[100vh] md:w-full">
          <ContactForm />
          <ContactCard />
        </section>
        <LocalisationCard />
        <div class="flex w-full justify-center my-10">
          <ButtonTopPage />
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "contact",
};
