import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Banner } from "../components/header/Banner";
import { Contentinfo } from "../components/footer/Contentinfo";
import { Main } from "../components/section/Main";

export default component$(() => {
  return (
    <>
      <Banner page="home" />
      <Main />
      <Contentinfo />
    </>
  );
});

export const head: DocumentHead = {
  title: "Counter",
};
