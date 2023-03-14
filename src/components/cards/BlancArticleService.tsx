import { component$ } from "@builder.io/qwik";

export const BlancArticleService = component$(() => {
  return (
    <article class="flex flex-col justify-center items-center shadow-xl h-[40vh]">
      <img src="/images/icon-plus.png" alt="" />
      <p class="text-[#0B3168] mt-3">Charger plus d'actualités</p>
    </article>
  );
});
