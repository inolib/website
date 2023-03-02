import { component$ } from "@builder.io/qwik";
import { QwikCityProvider } from "@builder.io/qwik-city";

import { Body } from "~/Body";
import { Head } from "~/Head";

import "./global.css";

export default component$(() => {
  return (
    <QwikCityProvider>
      <Head />
      <Body />
    </QwikCityProvider>
  );
});
