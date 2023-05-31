import { component$ } from "@builder.io/qwik";

import { BlancArticleService } from "./BlancArticleService";

export const CardsActualiteGridDisplay = component$(() => {
  return (
    <ul class="mx-[3rem] md:mx-[8rem] md:grid md:grid-cols-3 md:grid-rows-2 md:gap-20">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li>
        <BlancArticleService />
      </li>
    </ul>
  );
});
