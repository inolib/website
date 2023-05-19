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
          content="Nous sommes heureux de pouvoir communiquer avec vous et sommes à votre disposition pour répondre à toutes vos questions
         ou remarques concernant notre site web ou nos services. Vous pouvez nous contacter en remplissant le formulaire de contact ci-dessous."
          imageSrc="\images\contact-banner.png"
          title="Contacts"
        />
      </header>

      <section class="text-[#0B3168] md:px-28">
        <h2 class="my-6 text-2xl font-bold md:mb-14 md:pt-10">Nous écrire</h2>
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
  title: "contact",
};
