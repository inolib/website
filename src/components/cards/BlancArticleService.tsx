import { component$ } from "@builder.io/qwik";

export const BlancArticleService = component$(() => {
  return (
    <article class="flex h-[40vh] flex-col items-center justify-center shadow-xl">
      <img src="/images/icon-plus.png" alt="" />
      <p class="mt-3 text-[#0B3168]">Charger plus d'actualités</p>
    </article>
  );
});
