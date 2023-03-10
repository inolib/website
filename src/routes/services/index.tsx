import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { ButtonTopPage } from "~/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <header
        id="header"
        class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 md:h-[60vh] md:flex md:px-28 md:items-center md:relative md:mb-28"
        role="banner"
      >
        <img class="md:mt-48 z-10" src="../images\serviceheader.png" />
        <div class="md:pl-14">
          <h1 class="font-bold mb-5 text-3xl md:text-4xl">Nos services</h1>
          <p class="max-w-[30vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet.
          </p>
          <span class="flex mt-[12vh] -mb-[25vh]">
            <p class="border-r-2 px-5 ">Conseil & Audit</p>
            <p class="px-5">Formations</p>
            <p class="border-l-2 px-5">Développement</p>
          </span>
        </div>
      </header>
      <main class="text-[#0B3168]">
        <span class="flex mt-10 ml-[8vw]">
          <h2 class="text-4xl mt-6">Conseil & Audit</h2>
        </span>
        <span class="flex mt-[5vh] mx-[8vw]">
          <p class="mr-[1vw]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sint ea laudantium sunt. Possimus delectus
            excepturi harum tempore corrupti impedit sit, deserunt officia dolorem, aspernatur facere! Beatae laboriosam
            consectetur rerum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sint ea laudantium sunt.
            Possimus delectus excepturi harum tempore corrupti impedit sit, deserunt officia dolorem, aspernatur facere!
            laudantium sunt. Possimus delectus excepturi harum tempore corrupti impedit sit, deserunt officia dolorem,
            Beatae laboriosam consectetur rerum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sint ea
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            aspernatur facere! Beatae laboriosam consectetur rerum?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            illum quidem eaque quibusdam saepe commodi ratione sit!Lorem ipsum dolor sit amet consectetur adipisicing
            illum quidem eaque quibusdam saepe commodi ratione sit!Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            illum quidem eaque quibusdam saepe commodi ratione sit!Lorem ipsum dolor sit amet consectetur adipisicing
            illum quidem eaque quibusdam saepe commodi ratione sit!
          </p>
          <p class="ml-[1vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, cumque iure. Possimus neque eius repellendus
            consequatur labore, nesciunt qui sunt non fugit illum quidem eaque quibusdam saepe commodi ratione sit!Lorem
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            illum quidem eaque quibusdam saepe commodi ratione sit!Lorem ipsum dolor sit amet consectetur adipisicing
            illum quidem eaque quibusdam saepe commodi ratione sit! ipsum dolor sit amet consectetur adipisicing elit.
            Porro, cumque iure. Possimus neque eius repellendus ipsum dolor sit amet consectetur adipisicing elit.
            Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit illum
            quidem eaque quibusdam saepe commodi ratione sit!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit illum
            quidem eaque quibusdam saepe commodi ratione sit!Lorem consequatur labore, nesciunt qui sunt non fugit illum
            quidem eaque quibusdam saepe commodi ratione sit!
          </p>
        </span>
        <span class="flex mt-10 mx-[8vw] justify-around">
          <span class="flex flex-col max-w-[40vw] mr-[7vw] mt-[8vh]">
            <span class="flex mb-[5vh]">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-[1vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.quibusdam saepe
                commodi ratione sit.
              </p>
            </span>
            <span class="flex mb-[5vh]">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-[1vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                commodi ratione sit.
              </p>
            </span>
            <span class="flex mb-[5vh]">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-[1vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                commodi ratione sit.
              </p>
            </span>
          </span>
          <span class="flex flex-col">
            <img src="/images/conseilservice.png" alt="" />
            <p class="mt-[1vh]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, maiores impedit ut illum et dolore magna.
            </p>
          </span>
        </span>
        <p class="mt-[10vh] mx-[8vw]">
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
          <a
            class="bg-[#0B3168] border-white border-[1px] flex justify-center mt-[5vh] py-[1.5vh] pw-[2.5vw] text-white text-lg rounded-md w-[15vw]"
            href="/"
          >
            <p>Demander un devis</p>
          </a>
        </span>
        <span class="flex flex-col mt-10 bg-slate-200">
          <h2 class="text-4xl ml-[8vw] mt-6">Formations</h2>
          <span class="flex">
            <img class="ml-[8vw] mt-10 w-[40vw] h-[50vh]" src="/images/home4.png" alt="" />
            <p class=" mt-[4.7vh] ml-10 max-w-[40vw]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque, ex temporibus officiis
              laborum repudiandae, aliquam consequatur eligendi tempore iusto illo illum at iste provident eaque eos!
              Nisi, iure vero? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus? Facere sit
              minima repudiandae iure exercitationem nemo quia, provident eos quod saepe deleniti eaque dolorum
              laboriosam dolores doloribus corporis? Quis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Tenetur quasi velit quis? Commodi eum eius, fuga distinctio ab fugiat dolore vel, dolorem repudiandae sit
              ipsa laudantium reprehenderit dolor dignissimos tempora. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Et nobis libero molestias corrupti similique, hic dicta illum quam enim! Dolorum
              aspernatur enim aut omnis minima, assumenda repellendus reiciendis ipsum et.
            </p>
          </span>
          <section class="bg-white mx-[8vw] mt-[10vh]">
            <h2 class="text-4xl ml-[4vw] mt-6">Toutes nos formations</h2>
            <span class="grid grid-cols-2 grid-row-2 pt-[10vh] pl-[13vw] h-[200vh]">
              <article class="border-purple-500 flex flex-col justify-center items-center bg-no-repeat bg-[url('/images/bg-cards.png')] bg-[length:80vw_30vh] w-[23vw] h-[27vh]">
                <img class="h-[35vh] mt-[55vh]" src="/images/logo-dev.png" alt="" />
                <span class="bg-white flex flex-col items-center justify-center shadow-xl pb-[20vh] px-4">
                  <h3 class="text-[#0B3168] mb-5 text-2xl">Développement</h3>
                  <p class="text-[#0B3168]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                    optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                    autem! Molestias, facilis?
                  </p>
                  <span class="flex justify-center">
                    <a
                      class="bg-[#0B3168] border-white border-[1px] flex justify-center mt-[5vh] py-[1.5vh] pw-[2.5vw] text-white text-lg rounded-md w-[15vw]"
                      href="/"
                      aria-label="lien vers offre de service"
                    >
                      <p>En savoir plus</p>
                    </a>
                  </span>
                </span>
              </article>
              <article class="border-purple-500 flex flex-col justify-center items-center bg-no-repeat bg-[url('/images/bg-cards.png')] bg-[length:80vw_30vh] w-[23vw] h-[27vh]">
                <img class="h-[35vh] mt-[55vh]" src="/images/logo-dev.png" alt="" />
                <span class="bg-white flex flex-col items-center justify-center shadow-xl pb-[20vh] px-4">
                  <h3 class="text-[#0B3168] mb-5 text-2xl">Développement</h3>
                  <p class="text-[#0B3168]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                    optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                    autem! Molestias, facilis?
                  </p>
                  <span class="flex justify-center">
                    <a
                      class="bg-[#0B3168] border-white border-[1px] flex justify-center mt-[5vh] py-[1.5vh] pw-[2.5vw] text-white text-lg rounded-md w-[15vw]"
                      href="/"
                      aria-label="lien vers offre de service"
                    >
                      <p>En savoir plus</p>
                    </a>
                  </span>
                </span>
              </article>
              <article class="border-purple-500 flex flex-col justify-center items-center bg-no-repeat bg-[url('/images/bg-cards.png')] bg-[length:80vw_30vh] w-[23vw] h-[27vh]">
                <img class="h-[35vh] mt-[55vh]" src="/images/logo-dev.png" alt="" />
                <span class="bg-white flex flex-col items-center justify-center shadow-xl pb-[20vh] px-4">
                  <h3 class="text-[#0B3168] mb-5 text-2xl">Développement</h3>
                  <p class="text-[#0B3168]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                    optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                    autem! Molestias, facilis?
                  </p>
                  <span class="flex justify-center">
                    <a
                      class="bg-[#0B3168] border-white border-[1px] flex justify-center mt-[5vh] py-[1.5vh] pw-[2.5vw] text-white text-lg rounded-md w-[15vw]"
                      href="/"
                      aria-label="lien vers offre de service"
                    >
                      <p>En savoir plus</p>
                    </a>
                  </span>
                </span>
              </article>
              <article class="border-purple-500 flex flex-col justify-center items-center bg-no-repeat bg-[url('/images/bg-cards.png')] bg-[length:80vw_30vh] w-[23vw] h-[27vh]">
                <img class="h-[35vh] mt-[55vh]" src="/images/logo-dev.png" alt="" />
                <span class="bg-white flex flex-col items-center justify-center shadow-xl pb-[20vh] px-4">
                  <h3 class="text-[#0B3168] mb-5 text-2xl">Développement</h3>
                  <p class="text-[#0B3168]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                    optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                    autem! Molestias, facilis?
                  </p>
                  <span class="flex justify-center">
                    <a
                      class="bg-[#0B3168] border-white border-[1px] flex justify-center mt-[5vh] py-[1.5vh] pw-[2.5vw] text-white text-lg rounded-md w-[15vw]"
                      href="/"
                      aria-label="lien vers offre de service"
                    >
                      <p>En savoir plus</p>
                    </a>
                  </span>
                </span>
              </article>
            </span>
          </section>
        </span>
        <span class="bg-slate-200 block h-[15vh]"></span>
        <section
          aria-label="Développement"
          class="h-[90vh] bg-gradient-to-b from-[#5A0C69] to-[#0F3069] bg-[length:100vw_50vh]  bg-no-repeat"
        >
          <span class="flex flex-col -z-1 ">
            <span class="flex flex-col w-[35vw] ml-[8vw] mt-[10vh]">
              <h3 class="text-4xl text-white pb-[5vh]">Développement</h3>
              <p class="max-w-lg  text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat rerum iure eum! Minima facilis
                earum unde repellat quo nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, placeat
                omnis. Nam incidunt dolorum aliquam autem ducimus dignissimos minima soluta labore. Praesentium dolores
                illo omnis pariatur sint. Aut, quidem perferendis.
              </p>
            </span>
          </span>
          <span class="w-[100vw] pr-[12vw] flex flex-row-reverse">
            <img class="-mt-[15vh] h-[50vh] " src="/images/photoArticle.png" alt="" />
          </span>
        </section>
        <span class="flex mx-[8vw] -mt-[8vh]">
          <p class="mr-[1vw]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sint ea laudantium sunt. Possimus delectus
            excepturi harum tempore corrupti impedit sit, deserunt officia dolorem, aspernatur facere! Beatae laboriosam
            consectetur rerum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sint ea laudantium sunt.
            Possimus delectus excepturi harum tempore corrupti impedit sit, deserunt officia dolorem, aspernatur facere!
            laudantium sunt. Possimus delectus excepturi harum tempore corrupti impedit sit, deserunt officia dolorem,
            Beatae laboriosam consectetur rerum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sint ea
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            aspernatur facere! Beatae laboriosam consectetur rerum?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            illum quidem eaque quibusdam saepe commodi ratione sit!Lorem ipsum dolor sit amet consectetur adipisicing
            illum quidem eaque quibusdam saepe commodi ratione sit!Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            illum quidem eaque quibusdam saepe commodi ratione sit!Lorem ipsum dolor sit amet consectetur adipisicing
            illum quidem eaque quibusdam saepe commodi ratione sit!
          </p>
          <p class="ml-[1vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, cumque iure. Possimus neque eius repellendus
            consequatur labore, nesciunt qui sunt non fugit illum quidem eaque quibusdam saepe commodi ratione sit!Lorem
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            elit. Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit
            illum quidem eaque quibusdam saepe commodi ratione sit!Lorem ipsum dolor sit amet consectetur adipisicing
            illum quidem eaque quibusdam saepe commodi ratione sit! ipsum dolor sit amet consectetur adipisicing elit.
            Porro, cumque iure. Possimus neque eius repellendus ipsum dolor sit amet consectetur adipisicing elit.
            Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit illum
            quidem eaque quibusdam saepe commodi ratione sit!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro, cumque iure. Possimus neque eius repellendus consequatur labore, nesciunt qui sunt non fugit illum
            quidem eaque quibusdam saepe commodi ratione sit!Lorem consequatur labore, nesciunt qui sunt non fugit illum
            quidem eaque quibusdam saepe commodi ratione sit!
          </p>
        </span>
        <span class="flex flex-row-reverse mt-[12vh] mr-[8vw] ml-[10vw]">
          <span class="flex flex-col max-w-[40vw] mr-[7vw] ml-[5vw]">
            <span class="flex mb-[5vh]">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-[1vw] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.quibusdam saepe
                commodi ratione sit.
              </p>
            </span>
            <span class="flex mb-[5vh]">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-[1vw] text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                commodi ratione sit.
              </p>
            </span>
            <span class="flex mb-[5vh] text-lg">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-[1vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                commodi ratione sit.
              </p>
            </span>
            <span class="flex mb-[5vh] text-lg">
              <img src="/images/checkservice.svg" alt="" />
              <p class="ml-[1vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus perferendis.Quibusdam saepe
                commodi ratione sit.
              </p>
            </span>
          </span>
          <span class="flex flex-col">
            <img src="/images/actualitehome1.png" alt="" />
          </span>
        </span>
        <span class="flex justify-center mt-[15vh]">
          <p class="text-2xl text-center max-w-[70vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore labore commodi.culpa voluptas
            rerum provident blanditiis sunt esse praesentium.
          </p>
        </span>
        <span class="flex justify-center">
          <a
            class="bg-[#0B3168] border-white border-[1px] flex justify-center mt-[5vh] py-[1.5vh] pw-[2.5vw] text-white text-lg rounded-md w-[15vw]"
            href="#header"
          >
            <p>Demander un devis</p>
          </a>
        </span>
        <span class="flex justify-center mt-[18vh] mb-[5vh]">
          <ButtonTopPage />
        </span>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "services",
};
