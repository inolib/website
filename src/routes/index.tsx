import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main>
      <section className="mx-[10vw] bg-[url('/image/Home-image.png')]">
        <span className="flex justify-center">
          {/* <img className="w-[50vw] h-[70vh]" src="\images\decouvriraccess.png" alt="" />
          <img className="w-[30vw]" src="\images\backgroundcartehome.png" alt="" />
          <div className="bg-white">Découvrir l'accessibilité</div> */}
        </span>
        <span className="flex justify-start mt-10">
          <h2 className="text-[#0B3168] font-normal text-4xl">Nos services</h2>
        </span>
      </section>
      <article className="bg-[url('/image/bg-cards.png')]"></article>
      <article></article>
      <article></article>
      <article></article>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Home",
};
