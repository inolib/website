import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex justify-center text-center h-[50vh] md:grid md:grid-rows-1 md:grid-cols-3">
      <img src="\images\logo-blue.svg" class="hidden md:block col-start-1 scale-50"></img>
      <div class="col-start-2 flex flex-col justify-center items-center mt-14">
        <h1 class="text-5xl text-[#0B3168]">Error 404 : Page not found</h1>
        <p>⠑⠗⠗⠕⠗ ⠠⠹⠠⠼⠠⠹ ⠏⠁⠛⠑ ⠝⠕⠞ ⠋⠕⠥⠝⠙</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "404",
};
