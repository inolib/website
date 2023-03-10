import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { BannerHome } from "~/components/header/BannerHome";
import { Button } from "~/components/ui/buttons/Button";
import { ServicesHomeCard } from "~/components/cards/ServicesHomeCard";
import { ServicesHomeCardBlank } from "~/components/cards/ServicesHomeCardBlank";

export default component$(() => {
  return (
    <main class="flex justify-center flex-col">
      <BannerHome />
      <section class="mx-[10vw] w-[85vw] h-[75vh] flex items-center justify-end bg-[length:80vw_80vh] bg-no-repeat bg-[url('/images/Home-image.png')]">
        <div class="bg-white w-[38vw] h-[40vh] pr-10 mr-[12vw] mb-[16vh]">
          <span class=" max-w-[5vw]">
            <h2 class="text-[#0B3168] text-3xl ml-10 mt-10 font-semibold">Découvrir l'accessibilité</h2>
            <p class="text-[#0B3168] ml-10 mt-10 font-extralight flex">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, magnam accusamus dolores soluta deserunt
              nesciunt, molestiae, architecto velit ex doloremque voluptatum eos itaque veritatis quas odit.
              <a href="/accessibilite">
                <img
                  class="w-[5vw] h-[5vh] ml-4 mt-4 px-4"
                  src="/images/icon-small-arrow.svg"
                  alt="lien vers page accessibilité"
                />
              </a>
            </p>
          </span>
        </div>
      </section>
      <span class="flex justify-start mt-10 ml-[10vw]">
        <h2 class="text-[#0B3168] font-semibold text-4xl">Nos services</h2>
      </span>
      <section class="flex  justify-around my-[4rem] mx-[10rem]">
        <ServicesHomeCard label="Conseil et Audit" image="/images/logo-audit.png" background="purple">
          <p q:slot="content" class="text-[#0B3168]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
            modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
            Molestias, facilis?
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Formation" image="/images/logo-formation.png" background="purple">
          <p q:slot="content" class="text-[#0B3168]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
            modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
            Molestias, facilis?
          </p>
        </ServicesHomeCard>
        <ServicesHomeCard label="Développement" image="/images/logo-dev.png" background="purple">
          <p q:slot="content" class="text-[#0B3168]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
            modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
            Molestias, facilis?
          </p>
        </ServicesHomeCard>
        <ServicesHomeCardBlank
          styles="[10rem]"
          content="Découvrez tout nos services en détails ! Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </section>
      <section
        aria-label="témoignage"
        class="h-[90vh] bg-gradient-to-b from-[#5A0C69] to-[#0F3069] bg-[length:100vw_50vh] mt-[10vh] bg-no-repeat"
      >
        <span class="flex flex-col -z-1 ">
          <span class="flex flex-col w-[35vw] ml-[8vw] mt-[10vh]">
            <h3 class="text-4xl text-white pb-[5vh]">Témoignages</h3>
            <blockquote class="max-w-lg text-2xl text-white">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat rerum iure eum! Minima facilis
              earum unde repellat quo nisi."
            </blockquote>
          </span>
        </span>
        <span class="w-[100vw] pr-[12vw] flex flex-row-reverse">
          <img class="-mt-[15vh] h-[60vh]" src="/images/temoignage-homme.png" alt="" />
          <span class="flex flex-col mr-[3vw]">
            <p class="mt-[20vh] max-w-xl text-[#0F3069]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta, laborum inventore a maxime
              voluptatibus cum et quidem magni? Nihil, laudantium obcaecati. Minus, ullam quibusdam ? Enim quaerat rerum
              iure eum! Minima facilis earum unde repellat quo nisi.
            </p>
            <Button color="blue" href="/temoignages" label="Découvrir" />
          </span>
        </span>
      </section>
      <section class="mb-[10vh]">
        <span class="flex justify-start mt-20 ml-[9vw]">
          <h2 class="text-[#0B3168] font-normal text-4xl">Actualités</h2>
        </span>
        <span class="grid grid-col-2 grid-row-2- ml-[1vw] mt-14">
          <span class="col-end-1 ml-[8vw] border-slate-300 w-[40vw] border-b-[2px]">
            <img class="mb-10" src="/images/home1.png" alt="" />
            <h3 class="text-[#0B3168] font-normal text-3xl max-w-sm mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="max-w-md text-[#0B3168]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est id, facilis veritatis repudiandae nobis eius
              magnam non libero a dolor recusandae obcaecati similique eligendi magni aliquid nisi illum nemo explicabo.
            </p>
            <p class="text-[#0B3168] text-[11px] pb-[5vh] mt-4">20.06.2023&ensp; |&ensp; Développement</p>
          </span>
          <span class="col-end-2 mr-[8vw]">
            <img class="mb-10" src="/images/home2.png" alt="" />
            <h3 class="text-[#0B3168] font-normal text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">10.03.2023&ensp; |&ensp; Accessibilité</p>
          </span>
          <span class="col-end-2 mr-[8vw] pb-4 -mt-[23vh]">
            <img class="mb-10" src="/images/home3.png" alt="" />
            <h3 class="text-[#0B3168] font-normal text-3xl max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p class="text-[#0B3168] text-[11px] mt-4">03.02.2023&ensp; |&ensp; Accessibilité</p>
          </span>
          <a
            aria-label="lien vers pas actualité"
            class="flex justify-end mr-[8vw] -mt-[30vh] text-[#0B3168]"
            href="/actualites"
          >
            Voir toute notre actualité{" "}
            <img
              class="w-[2vw] h-[2vh] mt-[0.8vh]"
              src="/images/icon-small-arrow.svg"
              alt="lien vers page accessibilité"
            />
          </a>
          <a aria-label="lien vers le haut de la page" class="col-end-1 flex justify-end mr-[6.4vw]" href="/">
            <img src="/images/icon-arrow-up.svg" alt="lien vers le haut de la page" />
          </a>
        </span>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
