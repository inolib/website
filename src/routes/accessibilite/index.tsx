import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Article } from "~/Article";


import { Banner } from "~/header/Banner";
import { ButtonTopPage } from "~/ui/buttons/ButtonTopPage";



export default component$(() => {
  return (
    <>
      <Banner
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua."
        imageSrc="/images/banner-accessibilite.png"
        title="Qu’est-ce que l’accessibilité ?"
      />
      <main class="text-[#0B3168]">
        <Article
          title="Découvrir"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est eleifend a. Quisque convallis dui nunc, in ultrices leo tincidunt non. Aenean bibendum dignissim turpis, sed egestas sapien pulvinar at. Curabitur rhoncus eget enim eget vulputate. Aliquam non gravida turpis, sed bibendum odio. Duis varius enim id ipsum tristique pretium. Pellentesque ut nulla ut magna hendrerit tincidunt nec eget justo. Vestibulum purus nisi, consequat quis varius sed, tristique in augue. Donec efficitur mi non quam aliquet semper. Curabitur at ornare ex. Nullam condimentum nulla vel orci congue condimentum. In hac habitasse platea dictumst. Nulla molestie sem non ante auctor, iaculis tristique ante pharetra. Aenean eu sodales erat. Sed sed justo sodales, vestibulum sapien quis, cursus elit. Etiam sed lorem sollicitudin, auctor urna viverra, tincidunt neque.

          Fusce facilisis hendrerit metus, condimentum ultrices dolor lobortis vitae. In id est augue. Proin venenatis mauris condimentum risus dapibus semper. Donec sagittis facilisis diam. Curabitur vel facilisis est. Ut pretium dictum sem, venenatis sollicitudin nisl porttitor at. In ut turpis vitae massa congue varius non vitae sem. Sed sit amet eleifend odio.

          Aliquam egestas velit sit amet eros posuere molestie. Nam imperdiet felis urna, et laoreet augue efficitur id. Fusce id vestibulum elit. In diam eros, feugiat eu euismod et, euismod eu orci. Aliquam erat volutpat. Donec aliquet quam eget magna aliquet vehicula. Vestibulum odio dolor, porttitor eu faucibus eget, sagittis ut mi. Curabitur at enim tortor. Suspendisse lacinia varius euismod. Aliquam molestie quis turpis sed scelerisque. Maecenas non diam enim. Suspendisse vehicula nisi nec sodales tristique. Fusce ac mollis odio, euismod porta metus."
          imageSrc="/images/homme-fauteuil.png"
          imageQuote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          typoImgQuote="bold"
          styles="py-6"
        ></Article>

        <p class="md:px-28 mt-10">
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

        <Article
          title="Explications"
          content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
          facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus.

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem itaque iure nulla ipsam
          consequuntur sit, consequatur harum tempore voluptates modi odio at odit enim vero amet perspiciatis esse
          numquam minima.

          On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
          demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through
          weakness of will, which is the same as saying through shrinking from toil and pain. These cases are
          perfectly simple and easy to distinguish"
          imageSrc="/images/prothese.png"
          styles="py-6"
          stylesImgSize=""
        ></Article>

        <p class="md:px-28 mt-10">
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

        <div class="flex w-full justify-center my-10">
          <ButtonTopPage />
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "accessibilite",
};
