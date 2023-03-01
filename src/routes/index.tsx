import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Counter } from "../components/Counter";

export default component$(() => {
  return <Counter />;
});

export const head: DocumentHead = {
  title: "Counter",
};
