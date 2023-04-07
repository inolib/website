import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { ButtonBackLobby } from "~/components/ui/buttons/ButtonBackLobby";

export default component$(() => {
  return (
    <div class="grid grid-rows-1 grid-cols-3">
      <img src="\images\logo-blue.svg" class="col-start-1"></img>
      <div class="col-start-2 flex flex-col justify-center items-center mt-14">
        <h1 class="text-5xl text-[#0B3168]">Error 404 : Page not found</h1>
        <p>⠑⠗⠗⠕⠗ ⠠⠹⠠⠼⠠⠹ ⠏⠁⠛⠑ ⠝⠕⠞ ⠋⠕⠥⠝⠙</p>
        <ButtonBackLobby />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "404",
};
