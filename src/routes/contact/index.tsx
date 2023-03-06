import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <header
        class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 md:h-[60vh] md:flex md:px-28 md:items-center md:relative md:mb-28"
        role="banner"
      >
        <img class="md:mt-48 z-10" src="..\images\contact-banner.png" />
        <div class="md:pl-14">
          <h1 class="font-bold p-5 text-3xl md:text-4xl">Contacts</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </header>
      <main class="text-[#0B3168]">
        <h2 class="text-2xl font-bold my-6">Nous écrires</h2>
        <section class="flex p-4">
          <section class="bg-gradient-to-b flex flex-col from-[#5A0C69] to-[#0F3069] items-center text-center text-white">
            <p class="mx-10">
              Une information ?<br />
              Un devis ?
            </p>
            <p class="hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est
              eleifend va lucum.
            </p>
            <div class="flex ">
              <a href="tel:0611223344">
                <img alt="icone de téléphone" src="..\images\icon-phone.svg" aria-label="cliquez-ici pour télphoner" />
              </a>
              <p>tel:06 70 86 50 32</p>
            </div>
            <section class="md:grid md:grid-rows-1 md:grid-cols-1 md:pl-10 md:w-1/4">
              <ul
                class="flex justify-between py-8 md:border-y-0 md:items-center md:columns-1 md:py-0 md:row-start-1 "
                aria-label="liste des reseau sociaux d'Inolib"
              >
                <li>
                  <a href="#">
                    <img alt="facebook INOLIB" src="\images\logo-facebook-violet.svg" aria-label="page Contact"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img alt="twitter INOLIB" src="\images\logo-twiter.svg"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img alt="LinkedIn INOLIB" src="\images\logo-linkedin.svg"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img alt="instagram INOLIB" src="\images\logo-instagram.svg"></img>
                  </a>
                </li>
              </ul>
              <img src="..\images\background-card-contact.svg" />
            </section>
          </section>
          <form class="flex flex-col justify-between">
            <select class="text-black flex" name="Type de la demande" aria-label="type de votre demande">
              <option value="" disabled selected hidden>
                Type de la demande
              </option>
              <option>Audit</option>
              <option>Formation</option>
              <option>Développement</option>
            </select>
            <div class="flex flex-col">
              <input placeholder="Nom" type="text" value="Nom" />
              <input placeholder="Prénom" type="text" value="Prénom" />
              <input placeholder="Mail" type="email" value="Mail" />
              <input placeholder="Téléphone" type="tel" value="Téléphone" />
            </div>
          </form>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "contact",
};
