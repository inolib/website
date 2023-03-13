import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { Article } from "~/components/Article";

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
        <section class="" aria-label="3 témoignages">
          <Article
            title="Ils nous ont fait confiance"
            testimony="Marion Rodrigue"
            titleQuote="CEO Fakecompagny"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis, sed egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis, sed bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit tincidunt nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec efficitur mi non quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam sed lorem sollicitudin, auctor urna viverra, tincidunt neque."
            contentQuote="“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ”"
            imageSrc="\images\temoignage-1-femme.png"
            imgSeparator="\images\icon-separator-small.svg"
            stylesImgArticle="mr-10"
          ></Article>

          <Article
            testimony="Coralie Lanctot"
            titleQuote="CEO Fakecompagny"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis, sed egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis, sed bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit tincidunt nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec efficitur mi non quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam sed lorem sollicitudin, auctor urna viverra, tincidunt neque.

Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam sed lorem sollicitudin, auctor urna viverra, tincidunt neque.

non ante auctor, iaculis tristique ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam sed lorem sollicitudin, auctor urna viverra, tincidunt neque.

Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam sed lorem sollicitudin, auctor urna viverra, tincidunt neque."
            imageSrc="\images\temoignage-2-femme.png"
            imageQuote="“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ”"
            stylesImgArticle="pr-10"
            typoImgQuote="bold"
            stylesArticleGaucheFlex="flex-row-reverse justify-end"
            imgSeparator="\images\icon-separator-small.svg"
          ></Article>
          <Article
            testimony="Fabrice Primeau"
            titleQuote="CEO Fakecompagny"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis, sed egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis, sed bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit tincidunt nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec efficitur mi non quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam sed lorem sollicitudin, auctor urna viverra, tincidunt neque.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis, sed egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis, sed bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit tincidunt nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec efficitur mi non quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac habitasse platea dictumst. Nulla molestie.

Pellentesque ut nulla ut magna hendrerit tincidunt nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec efficitur mi non quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac habitasse platea dictumst. Nulla molestie."
            imageSrc="\images\temoignage-3-homme.png"
            imageQuote="“ Lorem ipsum dolor sit amet, consectetur adipiscing. ”"
            imgSeparator="\images\icon-separator-small.svg"
            typoImgQuote="bold"
          ></Article>
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
