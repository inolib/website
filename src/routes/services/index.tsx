import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Article } from "~/components/Article";
import { Banner } from "~/components/header/Banner";
import { Button } from "~/components/ui/buttons/Button";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { CardsGridDisplay } from "~/components/cards/CardsGridDisplay";
import { Banner3 } from "~/components/header/Banner3";
import { HorizontalParagraph } from "~/components/cards/HorizontalParagraph";

export default component$(() => {
  return (
    <>
      <Banner
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet."
        imageSrc="/images/serviceheader.png"
        title="Nos services"
      >
        <span
          q:slot="services"
          class="flex justify-center text-sm md:justify-start md:mt-[3rem] md:-mb-[23vh] md:text-base "
        >
          <a aria-label="Nos conseil et audit" href="#Conseil">
            <p class="border-r-2 px-2 md:px-5 ">Conseil & Audit</p>
          </a>
          <a aria-label="Nos formations" href="#Formation">
            <p class="px-2 md:px-5">Formations</p>
          </a>
          <a aria-label="Nos offre de développement" href="#Developpement">
            <p class="border-l-2 px-2 md:px-5">Développement</p>
          </a>
        </span>
      </Banner>
      <section class="text-[#0B3168]">
        <HorizontalParagraph
          title="Conseil & Audit"
          content1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure tempora natus accusantium consequuntur,
          doloribus quisquam, distinctio iste nulla atque eos eum id reiciendis quam unde corrupti perspiciatis?
          Eligendi, placeat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus tenetur
          minima sit, voluptatibus explicabo obcaecati soluta ratione? Animi odio id perspiciatis dolorem labore
          repellat sunt reprehenderit assumenda ipsum dolor! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Incidunt, ipsam. Necessitatibus, illo tempora rem corrupti porro soluta nesciunt libero incidunt quas
          consequuntur quasi voluptates culpa eos unde? Fugit, eos error? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Minus nisi reprehenderit, ipsum voluptatem architecto et numquam voluptas debitis in
          reiciendis quae omnis perferendis provident ipsa quasi dolore beatae obcaecati ratione. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Debitis eaque pariatur cupiditate quam ducimus hic provident est laborum!
          Eaque fugit atque culpa voluptas rerum provident blanditiis sunt esse praesentium. Architecto. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae alias reiciendis earum sequi reprehenderit provident
          veniam enim accusantium repellat voluptas vero accusamus, harum omnis dolore quasi sapiente, dolorem, iusto
          at."
          content2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure tempora natus accusantium consequuntur,
          doloribus quisquam, distinctio iste nulla atque eos eum id reiciendis quam unde corrupti perspiciatis?
          Eligendi, placeat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus tenetur
          minima sit, voluptatibus explicabo obcaecati soluta ratione? Animi odio id perspiciatis dolorem labore
          repellat sunt reprehenderit assumenda ipsum dolor! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Incidunt, ipsam. Necessitatibus, illo tempora rem corrupti porro soluta nesciunt libero incidunt quas
          consequuntur quasi voluptates culpa eos unde? Fugit, eos error? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Minus nisi reprehenderit, ipsum voluptatem architecto et numquam voluptas debitis in
          reiciendis quae omnis perferendis provident ipsa quasi dolore beatae obcaecati ratione. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Debitis eaque pariatur cupiditate quam ducimus hic provident est laborum!
          Eaque fugit atque culpa voluptas rerum provident blanditiis sunt esse praesentium. Architecto. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae alias reiciendis earum sequi reprehenderit provident
          veniam enim accusantium repellat voluptas vero accusamus, harum omnis dolore quasi sapiente, dolorem, iusto
          at."
          id="Conseil"
        />
        <Article
          imageSrc="/images/conseilservice.png"
          imageText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores impedit ut illum et dolore magna."
          styles="mt-1 md:-mt-[1rem]"
          stylesArticleGaucheFlex="md:flex-row"
        >
          <span q:slot="check-box" class="mx-5 mt-10 flex justify-around md:mx-[8rem] ">
            <ul class="mt-10 flex flex-col">
              <li class="mb-[2.5rem] flex md:w-[40rem]">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-2 font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
              <li class="mb-[2.5rem] flex">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-2 font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
              <li class="mb-[2.5rem] flex">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-2 font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
            </ul>
          </span>
        </Article>
        <p class="mx-5 mt-[2rem] text-justify md:mx-[8rem] md:text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure tempora natus accusantium consequuntur,
          doloribus quisquam, distinctio iste nulla atque eos eum id reiciendis quam unde corrupti perspiciatis?
          Eligendi, placeat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus tenetur
          minima sit, voluptatibus explicabo obcaecati soluta ratione? Animi odio id perspiciatis dolorem labore
          repellat sunt reprehenderit assumenda ipsum dolor! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Incidunt, ipsam. Necessitatibus, illo tempora rem corrupti porro soluta nesciunt libero incidunt quas
          consequuntur quasi voluptates culpa eos unde? Fugit, eos error? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Minus nisi reprehenderit, ipsum voluptatem architecto et numquam voluptas debitis in
          reiciendis quae omnis perferendis provident ipsa quasi dolore beatae obcaecati ratione. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Debitis eaque pariatur cupiditate quam ducimus hic provident est laborum!
          Eaque fugit atque culpa voluptas rerum provident blanditiis sunt esse praesentium. Architecto. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae alias reiciendis earum sequi reprehenderit provident
          veniam enim accusantium repellat voluptas vero accusamus, harum omnis dolore quasi sapiente, dolorem, iusto
          at.
        </p>
        <span class="flex justify-center">
          <img class="h-[14rem] w-[14rem]" src="/images/purple-logo.png" alt="" />
        </span>
        <div class="flex justify-center">
          <p class="max-w-[70vw] text-center text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore labore commodi.culpa voluptas
            rerum provident blanditiis sunt esse praesentium.
          </p>
        </div>
        <span class="flex justify-center">
          <Button href="/services" color="blue" label="Demander un devis" styles="mt-[2rem]" />
        </span>
        <CardsGridDisplay />
        <Banner3
          src="/images/photoArticle.png"
          title="Développement"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat rerum iure eum! Minima facilis earum
              unde repellat quo nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, placeat omnis.
              Nam incidunt dolorum aliquam autem ducimus dignissimos minima soluta labore. Praesentium dolores illo
              omnis pariatur sint. Aut, quidem perferendis."
          id="Developpement"
        />
        <HorizontalParagraph
          styles="mt-[8rem] md:mt-[10rem]"
          content1="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure tempora natus accusantium consequuntur,
          doloribus quisquam, distinctio iste nulla atque eos eum id reiciendis quam unde corrupti perspiciatis?
          Eligendi, placeat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus tenetur
          minima sit, voluptatibus explicabo obcaecati soluta ratione? Animi odio id perspiciatis dolorem labore
          repellat sunt reprehenderit assumenda ipsum dolor! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Incidunt, ipsam."
          content2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure tempora natus accusantium consequuntur,
          doloribus quisquam, distinctio iste nulla atque eos eum id reiciendis quam unde corrupti perspiciatis?
          Eligendi, placeat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit possimus tenetur
          minima sit, voluptatibus explicabo obcaecati soluta ratione? Animi odio id perspiciatis dolorem labore
          repellat sunt reprehenderit assumenda ipsum dolor! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Incidunt, ipsam."
        />

        <Article imageSrc="/images/actualitehome1.png" stylesArticleGaucheFlex="md:flex-row-reverse md:justify-end">
          <span q:slot="check-box" class="mx-5 mt-16 flex flex-col md:mx-0 md:mt-0 md:flex-row-reverse md:pl-[5rem]">
            <ul class="flex flex-col ">
              <li class="mb-[2.5rem] flex ">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw] text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw] text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
              <li class="mb-[2.5rem] flex ">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
            </ul>
          </span>
        </Article>

        <div class="flex justify-center">
          <p class="max-w-[70vw] px-2 text-center text-xl md:px-0 md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore labore commodi.culpa voluptas
            rerum provident blanditiis sunt esse praesentium.
          </p>
        </div>
        <span class="flex justify-center">
          <Button href="/services" label="Demander un devis" color="blue" styles="mt-[2rem]" />
        </span>
        <span class="mb-[2rem] flex justify-center">
          <ButtonTopPage />
        </span>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Inolib | Services",
};
