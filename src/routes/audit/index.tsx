import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <p>hello world</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "audit",
};
