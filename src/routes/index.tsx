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
      <span className="flex justify-start mt-10">
        <h2 className="text-[#0B3168] font-normal text-4xl">Nos services</h2>
      </span>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
