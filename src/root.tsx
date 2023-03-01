import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QwikCityProvider } from "@builder.io/qwik-city";

import { Body } from "./components/Body";
import { Head } from "./components/Head";

import "./global.css?inline";

export default component$(() => {
  return (
    <QwikCityProvider>
      <Head />
      <Body />
    </QwikCityProvider>
  );
});
