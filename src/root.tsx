import { component$ } from "@builder.io/qwik";
import { QwikCityProvider } from "@builder.io/qwik-city";

import { Body } from "c/Body";
import { Head } from "c/Head";

import "./global.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <Head />
      <Body />
    </QwikCityProvider>
  );
});
