import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <p>Home</p>;
});

export const head: DocumentHead = {
  title: "Home",
};
