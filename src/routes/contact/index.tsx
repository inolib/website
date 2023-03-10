import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { ButtonTopPage } from "~/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <header
        class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 md:h-[60vh] md:flex md:px-28 md:items-center md:relative md:mb-28"
        role="banner"
        id="header"
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
      <main class="text-[#0B3168] md:px-28">
        <h2 class="text-2xl font-bold my-6 md:pt-10 md:mb-14">Nous écrires</h2>
        <section class="shadow-xl mb-10 flex md:px-0 md:h-[100vh] md:w-full">
          <section class="bg-gradient-to-b flex flex-col from-[#5A0C69] to-[#0F3069] text-white w-1/3 relative">
            <div class="p-10">
              <p class="text-center text-xl m-6">
                Une information ?<br />
                Un devis ?
              </p>
              <p class="mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est
                eleifend va lucum.
              </p>
              <div class="flex mb-6">
                <img src="..\images\icon-phone.svg" />
                <p class="pl-3">06 70 86 50 32</p>
              </div>
              <div class="flex mb-6">
                <img src="..\images\icon-mail.svg" />
                <p class="pl-3">contact@inolib.com</p>
              </div>

              <ul
                class="flex justify-between py-8 md:border-y-0 md:items-center md:py-0 md:w-2/3"
                aria-label="liste des reseau sociaux d'Inolib"
              >
                <li>
                  <a href="#">
                    <img
                      alt="lien vers le facebook INOLIB"
                      class="scale-50"
                      src="\images\logo-facebook-violet.svg"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img alt="lien vers twitter INOLIB" class="scale-50" src="\images\logo-twiter.svg"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img alt="lien vers le LinkedIn INOLIB" class="scale-50" src="\images\logo-linkedin.svg"></img>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img alt="lien vers l'instagram INOLIB" class="scale-50" src="\images\logo-instagram.svg"></img>
                  </a>
                </li>
              </ul>
            </div>
            <img class="w-3/5 h-auto absolute bottom-0 right-0" src="..\images\background-card.svg" />
          </section>

          <form class="flex md:grid md:grid-cols-4 md:grid-rows-5 md:px-10 py-14 md:w-2/3">
            <select
              class="border-solid border-[1px] border-[#0B3168] flex h-12 rounded-md md:col-span-1 md:col-start-1 md:col-end-3 md:row-start-1"
              name="Type de la demande"
              aria-label="type de votre demande"
            >
              <option value="" disabled selected hidden>
                Type de la demande
              </option>
              <option>Audit</option>
              <option>Formation</option>
              <option>Développement</option>
            </select>

            <label class="md:col-span-1 md:row-start-2 md:col-start-1  md:col-end-3 md:flex md:flex-col md:pr-5">
              Nom
              <input
                class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
                placeholder="Nom"
                type="text"
                aria-label="entrez votre nom"
              />
            </label>
            <label class="md:col-span-2 md:row-start-2 md:col-start-3  md:col-end-5 md:flex md:flex-col md:pl-5">
              Prénom
              <input
                class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
                placeholder="Prénom"
                type="text"
                aria-label="entrez votre prénom"
              />
            </label>
            <label class="md:col-span-1 md:row-start-3 md:col-start-1  md:col-end-3 md:flex md:flex-col md:pr-5">
              Mail
              <input
                class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
                placeholder="Mail"
                type="email"
                aria-label="entrez votre e-mail"
              />
            </label>
            <label class="md:col-span-2 md:row-start-3 md:col-start-3  md:col-end-5 md:flex md:flex-col md:pl-5">
              Téléphone
              <input
                class="border-solid border-[1px] border-[#0B3168] pl-2 md:h-12 rounded-md"
                placeholder="Téléphone"
                type="tel"
                aria-label="entrez votre numéro de téléphone"
              />
            </label>

            <textarea
              class="border-solid border-[1px] border-[#0B3168] md:col-span-4 pl-2 md:row-start-4 md:col-start-1  md:col-end-5"
              placeholder="Votre texte"
              aria-label="zone pour écrire les détails de votre demande"
            ></textarea>
            <button class="h-14 mr-2 rounded-md hover:border-2 hover:border-[#0B3168] md:col-span-1 md:row-start-5 md:col-start-3  md:col-end-4 md:mt-14">
              Effacer
            </button>
            <button class="bg-[#0B3168] h-14 rounded-md text-white md:col-span-1 md:row-start-5 md:col-start-4  md:col-end-4 md:mt-14">
              Envoyer
            </button>
          </form>
        </section>
        <section>
          <h2 class=" font-bold mb-10 text-2xl">Nous rencontrer</h2>
          <div class="flex justify-between shadow-lg mb-10">
            <div class="flex flex-col justify-center items-center w-full">
              <img class="h-16 w-auto" src="..\images\icon-pin-map.svg" />
              <p class="text-center">
                INOLIB
                <br />
                254 RUE VENDÔME
                <br />
                69003 LYON
              </p>
            </div>
            <img class="p-2" src="..\images\map.png" />
          </div>
        </section>
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
