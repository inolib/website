import { component$ } from "@builder.io/qwik";

import { Button } from "~/components/ui/buttons/Button";

export const Contentinfo = component$(() => {
  return (
    <footer id="footer" role="contentinfo">
      <section class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] px-4 py-8 text-white md:flex">
        <section class="md:flex md:w-1/2 md:flex-col md:items-end md:px-8">
          <div class="md:w-2/3">
            <div class="mb-3 flex">
              <img alt="" src="/images/logo-white.svg" class="h-10 w-auto" />
              <h3 class="flex items-center pl-2 text-2xl font-bold">INOLIB</h3>
            </div>
            <p class="mb-6 border-t-2 border-[#9A35AD] pt-4 font-bold md:border-t-0">Des questions?</p>
            <h3 class="mb-3 text-2xl font-bold">Contactez-nous!</h3>
            <p class="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, magnam accusamus dolores soluta deserunt
              nesciunt, molestiae, architecto velit ex doloremque voluptatum eos itaque veritatis quas.
            </p>
            <span class="mb-7 flex justify-center md:mb-0 md:justify-start">
              <Button color="white" href="/contact" label="Nous contacter" />
            </span>
          </div>
        </section>

        <section class="md:grid md:grid-cols-1 md:grid-rows-1 md:border-l-2 md:pl-10">
          <ul class="flex flex-wrap justify-center border-y-2 border-[#9A35AD] py-8 md:justify-start md:items-start md:border-y-0 md:py-0">
            <li class="m-2">
              <a href="#">Plan du site</a>
            </li>
            <li class="m-2">
              <a href="#">Politique d'accessbilité</a>
            </li>
            <li class="m-2">
              <a href="#">Mentions légales</a>
            </li>
            <li class="m-2">
              <a href="#">Politique de confidentialité</a>
            </li>
            <li class="m-2">
              <a href="#">Glossaire</a>
            </li>
          </ul>
          <ul
            class="flex justify-between border-y-2 border-[#9A35AD] py-8 md:row-start-1 md:columns-1 md:items-center md:border-y-0 md:py-0 md:w-3/5 "
            aria-label="reseau sociaux d'Inolib"
          >
            <li>
              <a href="#" aria-label="vers notre facebook">
                <img alt="facebook INOLIB" src="\images\logo-facebook-violet.svg" aria-label="facebook"></img>
              </a>
            </li>
            <li>
              <a href="#" aria-label="vers notre twitter">
                <img alt="twitter INOLIB" src="\images\logo-twiter.svg" aria-label="twitter"></img>
              </a>
            </li>
            <li>
              <a href="#" aria-label="vers notre linkedin">
                <img alt="LinkedIn INOLIB" src="\images\logo-linkedin.svg" aria-label="Linkedin"></img>
              </a>
            </li>
            <li>
              <a href="#" aria-label="vers notre instagram">
                <img alt="instagram INOLIB" src="\images\logo-instagram.svg" aria-label="Instagram"></img>
              </a>
            </li>
          </ul>
          <p class="md:row-start- mt-8 md:columns-1 md:items-end">© 2023 Inolib</p>
        </section>
      </section>
    </footer>
  );
});
