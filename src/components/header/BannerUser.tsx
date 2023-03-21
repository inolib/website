import { component$ } from "@builder.io/qwik";

export const BannerUser = component$(() => {
  return (
    <header
      class={`bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 h-20 md:h-[27rem] md:flex md:px-28 md:items-center md:relative md:mb-28`}
      role="banner"
      id="header"
    >
      <img class={`md:mt-48`} />
      <div class="md:ml-[5rem]">
        <h1 class="font-semibold my-7 md:mb-5 md:mt-0 text-3xl md:text-5xl max-w-sm">Hello</h1>
        <p class="text-justify max-w-md mb-3 md:mb-0 md:text-left">Le contenu</p>
      </div>
    </header>
  );
});
