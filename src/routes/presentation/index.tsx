import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import ArticlePresentation1 from "~/components/articles/ArticlePresentation1";
import ArticlePresentation2 from "~/components/articles/ArticlePresentation2";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <Banner
        imageSrc="../images/home5.png"
        title="Qui sommes-nous ?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua."
      />
      <main class="text-[#0B3168]">
        <ArticlePresentation1 />

        <ArticlePresentation2 />

        <section class="flex bg-gradient-to-b from-[#5A0C69] to-[#0F3069] px-4 py-8 text-white md:px-36">
          <div class="flex flex-col justify-center md:pr-16">
            <strong>
              <h2 class="mb-2 text-3xl md:mb-8">Notre équipe</h2>
            </strong>
            <strong>
              <p class="my-6 text-2xl md:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Aliquam totam neque ullam dolore.
              </p>
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna.
            </p>
          </div>
          <img class="hidden md:block" src="..\images\background-team-bulles.svg" />
        </section>
        <section>
          <ul class="pt-20 md:flex md:flex-wrap md:px-28" aria-label="liste des employés d'Inolib">
            <li class="mb-16 flex flex-col items-center text-black md:items-start md:pr-10">
              <img
                class="w-full object-cover md:w-auto md:object-none"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="mt-4 flex justify-center">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
            <li class="mb-16 flex flex-col items-center text-black md:items-start md:pr-10">
              <img
                class="w-full object-cover md:w-auto md:object-none"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="mt-4 flex justify-center">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
            <li class="mb-16 flex flex-col items-center text-black md:items-start md:pr-10">
              <img
                class="w-full object-cover md:w-auto md:object-none"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="mt-4 flex justify-center">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
            <li class="mb-16 flex flex-col items-center text-black md:items-start md:pr-10">
              <img
                class="w-full object-cover md:w-auto md:object-none"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="mt-4 flex justify-center">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
            <li class="mb-16 flex flex-col items-center text-black md:items-start md:pr-10">
              <img
                class="w-full object-cover md:w-auto md:object-none"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="mt-4 flex justify-center">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
            <li class="mb-16 flex flex-col items-center text-black md:items-start md:pr-10">
              <img
                class="w-full object-cover md:w-auto md:object-none"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="mt-4 flex justify-center">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
          </ul>
        </section>
        <div class="my-10 flex w-full justify-center">
          <ButtonTopPage />
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Presentation",
};
