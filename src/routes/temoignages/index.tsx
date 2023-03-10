import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <header
        class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 md:h-[60vh] md:flex md:px-28 md:items-center md:relative md:mb-28"
        role="banner"
        id="header"
      >
        <img class="md:mt-48 z-10" src="..\images\temoignage-homme-header.png" />
        <div class="md:pl-14">
          <h1 class="font-bold p-5 text-3xl md:text-4xl">Témoignages</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </header>
      <main class="text-[#0B3168]">
        <section class="px-4 md:px-28" aria-label="3 témoignages">
          <section class="md:flex md:gap-x-16">
            <div class="md:w-2/3 mb-12">
              <h2 class="font-bold text-2xl my-6 md:pt-10">Ils nous ont fait confiance</h2>
              <div class="md:flex">
                <h4 class="text-xl mb-3">Manon Rodrigue</h4>
                <p class="text-l mb-6">CEO Fakecompagny</p>
              </div>
              <p class="text-justify md:text-left mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est
                eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis,
                sed egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis,
                sed bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit
                tincidunt nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec
                efficitur mi non quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue
                condimentum. In hac habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique
                ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam
                sed lorem sollicitudin, auctor urna viverra, tincidunt neque.
              </p>
              <blockquote>
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. ”
              </blockquote>
            </div>
            <div>
              <img alt="" class="my-6" src="..\images\temoignage-1-femme.png" />
            </div>
          </section>
          <section class="md:flex md:flex-row-reverse justify-end">
            <div class="md:pl-10 md:w-2/3">
              <div class="md:flex">
                <h4 class="text-xl mb-3 md:border-r-[#0B3168] md:border-[1px] md:pr-2">Manon Rodrigue</h4>
                <p class="text-l md:pl-2">CEO Fakecompagny</p>
              </div>
              <p class="text-justify md:text-left md:mt-4 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est
                eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis,
                sed egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis,
                sed bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit
                tincidunt nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec
                efficitur mi non quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue
                condimentum. In hac habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique
                ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam
                sed lorem sollicitudin, auctor urna viverra, tincidunt neque.
              </p>
            </div>
            <div class="max-w-lg">
              <img alt="" class="my-6" src="..\images\temoignage-2-femme.png" />
              <strong>
                <blockquote class="mb-4 text-center text-xl">
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. ”
                </blockquote>
              </strong>
            </div>
          </section>
          <section class="md:flex ">
            <div class="md:pr-10 md:w-2/3">
              <div class="md:flex">
                <h4 class="text-xl mb-3 md:border-r-[#0B3168] md:border-[1px] md:pr-2">Fabrice Primeau</h4>
                <p class="text-l md:pl-2">CEO Fakecompagny</p>
              </div>
              <p class="text-justify md:text-left mb-12 md:mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est
                eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis,
                sed egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis,
                sed bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit
                tincidunt nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec
                efficitur mi non quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue
                condimentum. In hac habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique
                ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam
                sed lorem sollicitudin, auctor urna viverra, tincidunt neque.
              </p>
            </div>
            <div class="max-w-lg">
              <img alt="" class="my-6" src="..\images\temoignage-3-homme.png" />
              <strong>
                <blockquote class="mb-4 text-center text-xl">
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. ”
                </blockquote>
              </strong>
            </div>
          </section>
        </section>
        <div class="flex w-full justify-center my-10">
          <ButtonTopPage />
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "temoignages",
};
