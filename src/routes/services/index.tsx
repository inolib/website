import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Banner } from "~/components/header/Banner";
import { Button } from "~/components/ui/buttons/Button";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { ServicesCard } from "~/components/cards/ServicesCard";
import { CardsGridDisplay } from "~/components/cards/CardsGridDisplay";
import { Banner3 } from "~/components/header/Banner3";
import { HorizontalParagraph } from "~/components/cards/HorizontalParagraph";
import { Article } from "~/components/Article";

export default component$(() => {
  return (
    <>
      <Banner
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet."
        imageSrc="/images/serviceheader.png"
        title="Nos services"
      >
        <span q:slot="services" class="flex mt-[12vh] -mb-[23vh]">
          <p class="border-r-2 px-5 ">Conseil & Audit</p>
          <p class="px-5">Formations</p>
          <p class="border-l-2 px-5">Développement</p>
        </span>
      </Banner>
      <main class="text-[#0B3168]">
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
        />
        <Article
          imageSrc="/images/conseilservice.png"
          imageText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores impedit ut illum et dolore magna."
          styles="-mt-[1rem]"
        >
          <span q:slot="check-box" class="flex mt-10 mx-[8rem] justify-around">
            <ul class="flex flex-col mt-10">
              <li class="flex mb-[5vh] w-[40rem]">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw] font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
              <li class="flex mb-[5vh]">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw] font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
              <li class="flex mb-[5vh]">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw] font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
            </ul>
          </span>
        </Article>
        <p class="mt-[2rem] mx-[8vw]">
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
          <img class="w-[14vw] h-[30vh]" src="/images/purple-logo.png" alt="" />
        </span>
        <span class="flex justify-center">
          <p class="text-2xl text-center max-w-[70vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore labore commodi.culpa voluptas
            rerum provident blanditiis sunt esse praesentium.
          </p>
        </span>
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
        />
        <HorizontalParagraph
          styles="-mt-[7rem]"
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

        <Article imageSrc="/images/actualitehome1.png" stylesArticleGaucheFlex="flex-row-reverse">
          <span q:slot="check-box" class="flex flex-row-reverse  px-[5rem]">
            <ul class="flex flex-col ">
              <li class="flex w-[50rem] -mr-[35rem] mb-[5vh]">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw] text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
              <li class="flex w-[50rem] -mr-[35rem] mb-[5vh]">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw] text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
              <li class="flex w-[50rem] -mr-[15rem] mb-[5vh] text-lg">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
              <li class="flex w-[50rem] -mr-[35rem] mb-[5vh] text-lg">
                <img src="/images/checkservice.svg" alt="" />
                <p class="ml-[1vw]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                  commodi ratione sit.
                </p>
              </li>
            </ul>
          </span>
        </Article>

        <span class="flex justify-center">
          <p class="text-2xl text-center max-w-[70vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore labore commodi.culpa voluptas
            rerum provident blanditiis sunt esse praesentium.
          </p>
        </span>
        <span class="flex justify-center">
          <Button href="/services" label="Demander un devis" color="blue" styles="mt-[2rem]" />
        </span>
        <span class="flex justify-center mb-[2rem]">
          <ButtonTopPage />
        </span>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "services",
};
