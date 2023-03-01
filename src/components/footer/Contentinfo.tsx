import { component$ } from "@builder.io/qwik";

export const Contentinfo = component$(() => {
  return (
    <footer>
      <section className="bg-gradient-to-b from-[#5A0C69] to-[#0F3069]">
        <section>
          <img alt="" src="/images/logo-white.svg" />
          <p>Des questions?</p>
          <a href="/contact">Contactez-nous</a>
        </section>
        <section>
          <a href="#">
            <img alt="facebook INOLIB" src="\images\logo-facebook-violet.svg"></img>
          </a>
          <a href="#">
            <img alt="twitter INOLIB" src="\images\logo-twiter.svg"></img>
          </a>
          <a href="#">
            <img alt="LinkedIn INOLIB" src="\images\logo-linkedin.svg"></img>
          </a>
          <a href="#">
            <img alt="instagram INOLIB" src="\images\logo-instagram.svg"></img>
          </a>
          <p>© 2023 Inolib</p>
        </section>
      </section>
    </footer>
  );
});
