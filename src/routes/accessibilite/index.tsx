import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import ArticleAccessibilite1 from "~/components/articles/ArticleAccessibilite1";
import ArticleAccessibilite2 from "~/components/articles/ArticleAccessibilite2";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <Banner
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua."
        imageSrc="/images/banner-accessibilite.png"
        title="Qu’est-ce que l’accessibilité ?"
      />

      <section class="text-[#0B3168]">
        <ArticleAccessibilite1 />

        <p class="px-4 text-justify md:mb-6 md:px-28 md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est
          eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis, sed
          egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis, sed
          bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit tincidunt
          nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec efficitur mi non
          quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac
          habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique ante pharetra. Aenean eu
          sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam sed lorem sollicitudin, auctor
          urna viverra, tincidunt neque. Fusce facilisis hendrerit metus, condimentum ultrices dolor lobortis vitae. In
          id est augue. Proin venenatis mauris condimentum risus dapibus semper. Donec sagittis facilisis diam.
          Curabitur vel facilisis est. Ut pretium dictum sem, venenatis sollicitudin nisl porttitor at. In ut turpis
          vitae massa congue varius non vitae sem. Sed sit amet eleifend odio. Aliquam egestas velit sit amet eros
          posuere molestie. Nam imperdiet felis urna, et laoreet augue efficitur id. Fusce id vestibulum elit. In diam
          eros, feugiat eu euismod et, euismod eu orci. Aliquam erat volutpat. Donec aliquet quam eget magna aliquet
          vehicula. Vestibulum odio dolor, porttitor eu faucibus eget, sagittis ut mi. Curabitur at enim tortor.
          Suspendisse lacinia varius euismod. Aliquam molestie quis turpis sed scelerisque. Maecenas non diam enim.
          Suspendisse vehicula nisi nec sodales tristique. Fusce ac mollis odio, euismod porta metus.
        </p>
        <ArticleAccessibilite2 />

        <p class="px-4 text-justify md:px-28 md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est
          eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis, sed
          egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis, sed
          bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit tincidunt
          nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec efficitur mi non
          quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac
          habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique ante pharetra. Aenean eu
          sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam sed lorem sollicitudin, auctor
          urna viverra, tincidunt neque. Fusce facilisis hendrerit metus, condimentum ultrices dolor lobortis vitae. In
          id est augue. Proin venenatis mauris condimentum risus dapibus semper. Donec sagittis facilisis diam.
          Curabitur vel facilisis est. Ut pretium dictum sem, venenatis sollicitudin nisl porttitor at. In ut turpis
          vitae massa congue varius non vitae sem. Sed sit amet eleifend odio. Aliquam egestas velit sit amet eros
          posuere molestie. Nam imperdiet felis urna, et laoreet augue efficitur id. Fusce id vestibulum elit. In diam
          eros, feugiat eu euismod et, euismod eu orci. Aliquam erat volutpat. Donec aliquet quam eget magna aliquet
          vehicula. Vestibulum odio dolor, porttitor eu faucibus eget, sagittis ut mi. Curabitur at enim tortor.
          Suspendisse lacinia varius euismod. Aliquam molestie quis turpis sed scelerisque. Maecenas non diam enim.
          Suspendisse vehicula nisi nec sodales tristique. Fusce ac mollis odio, euismod porta metus.
        </p>

        <div class="my-10 flex w-full justify-center">
          <ButtonTopPage />
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "accessibilité | Inolib",
};
