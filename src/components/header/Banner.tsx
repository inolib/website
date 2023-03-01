import { component$ } from "@builder.io/qwik";

import { Navbar } from "./Navbar";

type BannerProps = {
  page: string;
};

export const Banner = component$((props: BannerProps) => {
  return (
    <header>
      <Navbar page={props.page} />

      <section>
        <h1>
          <img alt="INOLIB" src="../../../public/images/logo-white.svg" />
          <span>Human Noble Technology</span>
        </h1>

        <a href="/presentation">Découvrir</a>
      </section>
    </header>
  );
});
