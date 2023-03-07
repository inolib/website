import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Banner } from "~/header/Banner";

export default component$(() => {
  return (
    <main class="flex justify-center flex-col">
      <Banner />
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
        <h2 class="text-[#0B3168] font-normal text-4xl">Nos services</h2>
      </span>
      <section class="flex justify-around mt-10 ml-[9vw] mr-[10vw] h-[90vh]" aria-label="articles">
        <article class="border-purple-500 flex flex-col justify-center items-center bg-no-repeat bg-[url('/images/bg-cards.png')] bg-[length:90vw_30vh] w-[17.5vw] h-[27vh]">
          <img class="h-[35vh] mt-[57vh]" src="/images/logo-audit.png" alt="" />
          <span class="bg-white flex flex-col items-center  justify-center shadow-xl pb-[20vh] px-4">
            <h3 class="text-[#0B3168] mb-5 text-2xl">Conseil et Audit</h3>
            <p class="text-[#0B3168]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
              modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
              Molestias, facilis?
            </p>
          </span>
        </article>
        <article class="border-purple-700 border-2px flex flex-col justify-center items-center bg-no-repeat bg-[url('/images/bg-cards.png')] bg-[length:80vw_30vh] w-[17.5vw] h-[27vh]">
          <img class="h-[35vh] mt-[57vh]" src="/images/logo-formation.png" alt="" />
          <span class="bg-white flex flex-col items-center  justify-center shadow-xl pb-[20vh] px-4">
            <h3 class="text-[#0B3168] mb-5 text-2xl">Formation</h3>
            <p class="text-[#0B3168]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
              modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
              Molestias, facilis?
            </p>
          </span>
        </article>
        <article class="border-purple-500 flex flex-col justify-center items-center bg-no-repeat bg-[url('/images/bg-cards.png')] bg-[length:80vw_30vh] w-[17.5vw] h-[27vh]">
          <img class="h-[35vh] mt-[57vh]" src="/images/logo-dev.png" alt="" />
          <span class="bg-white flex flex-col items-center justify-center shadow-xl pb-[20vh] px-4">
            <h3 class="text-[#0B3168] mb-5 text-2xl">Développement</h3>
            <p class="text-[#0B3168]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
              modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
              Molestias, facilis?
            </p>
          </span>
        </article>
        <article class="border-purple-500 flex flex-col justify-center items-center w-[17.5vw] h-[89vh]">
          <span class="bg-white shadow-xl pb-[20vh] px-4 pt-[10vh] flex flex-col justify-center items-center h-[89vh] mb-[2vh]">
            <p class="text-[#0B3168] text-2xl">
              Découvrez tout nos service en détails ! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a
              class="bg-[#0B3168] border-white border-[1px] flex justify-center mt-[25vh] py-[1.5vh] pw-[2.5vw] text-white text-lg rounded-md w-[10vw] font-normal"
              href="/presentation"
            >
              <p>En savoir plus</p>
            </a>
          </span>
        </article>
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
            <a
              class="bg-[#0B3168] border-white border-[1px] mt-[7vh] mr-[8vw] flex justify-center py-[1.5vh] pw-[2.5vw] text-white text-lg rounded-md w-[10vw] font-normal"
              href="/presentation"
            >
              <p>Découvrir</p>
            </a>
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
