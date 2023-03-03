import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="flex justify-center flex-col">
      <section className="mx-[10vw] w-[85vw] h-[75vh] flex items-center justify-end bg-[length:80vw_80vh] bg-no-repeat bg-[url('/images/Home-image.png')]">
        <div class="bg-white w-[38vw] h-[40vh] pr-10 mr-[12vw] mb-[16vh]">
          <span className=" max-w-[5vw]">
            <h2 className="text-[#0B3168] text-3xl ml-10 mt-10 font-semibold">Découvrir l'accessibilité</h2>
            <p className="text-[#0B3168] ml-10 mt-10 font-extralight flex">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, magnam accusamus dolores soluta deserunt
              nesciunt, molestiae, architecto velit ex doloremque voluptatum eos itaque veritatis quas odit.
              <a href="/accessibilite">
                <img
                  className="w-[5vw] h-[5vh] ml-4 mt-4 px-4"
                  src="/images/icon-small-arrow.svg"
                  alt="lien vers page accessibilité"
                />
              </a>
            </p>
          </span>
        </div>
      </section>
      <span className="flex justify-start mt-10 ml-[10vw]">
        <h2 className="text-[#0B3168] font-normal text-4xl">Nos services</h2>
      </span>
      <section className="flex justify-around mt-10 ml-[9vw] mr-[10vw] h-[90vh]" aria-label="articles">
        <article className="border-purple-500 flex flex-col justify-center items-center bg-no-repeat bg-[url('/images/bg-cards.png')] bg-[length:90vw_30vh] w-[17.5vw] h-[27vh]">
          <img className="h-[35vh] mt-[57vh]" src="/images/logo-audit.png" alt="" />
          <span className="bg-white flex flex-col items-center  justify-center shadow-xl pb-[20vh] px-4">
            <h3 className="text-[#0B3168] mb-5 text-2xl">Conseil et Audit</h3>
            <p className="text-[#0B3168]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
              modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
              Molestias, facilis?
            </p>
          </span>
        </article>
        <article className="border-purple-700 border-2px flex flex-col justify-center items-center bg-no-repeat bg-[url('/images/bg-cards.png')] bg-[length:80vw_30vh] w-[17.5vw] h-[27vh]">
          <img className="h-[35vh] mt-[57vh]" src="/images/logo-formation.png" alt="" />
          <span className="bg-white flex flex-col items-center  justify-center shadow-xl pb-[20vh] px-4">
            <h3 className="text-[#0B3168] mb-5 text-2xl">Formation</h3>
            <p className="text-[#0B3168]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
              modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
              Molestias, facilis?
            </p>
          </span>
        </article>
        <article className="border-purple-500 flex flex-col justify-center items-center bg-no-repeat bg-[url('/images/bg-cards.png')] bg-[length:80vw_30vh] w-[17.5vw] h-[27vh]">
          <img className="h-[35vh] mt-[57vh]" src="/images/logo-dev.png" alt="" />
          <span className="bg-white flex flex-col items-center justify-center shadow-xl pb-[20vh] px-4">
            <h3 className="text-[#0B3168] mb-5 text-2xl">Développement</h3>
            <p className="text-[#0B3168]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione optio,
              modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur autem!
              Molestias, facilis?
            </p>
          </span>
        </article>
        <article className="border-purple-500 flex flex-col justify-center items-center w-[17.5vw] h-[89vh]">
          <span className="bg-white shadow-xl pb-[20vh] px-4 pt-[10vh] flex flex-col justify-center items-center h-[89vh] mb-[2vh]">
            <p className="text-[#0B3168] text-2xl">
              Découvrez tout nos service en détails ! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a
              className="bg-[#0B3168] border-white border-[1px] flex justify-center mt-[25vh] py-[1.5vh] pw-[2.5vw] text-white text-lg rounded-md w-[10vw] font-normal"
              href="/presentation"
            >
              <p>En savoir plus</p>
            </a>
          </span>
        </article>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
