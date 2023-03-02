import { component$ } from "@builder.io/qwik";

export const Contentinfo = component$(() => {
  return (
    <footer>
      <section class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white py-10 md:flex">
        <section class="md:flex md:flex-col md:items-end md:px-8 md:w-1/2">
          <div class="md:w-2/3">
            <div class="flex mb-3">
              <img alt="" src="/images/logo-white.svg" class="h-10 w-auto" />
              <h3 class="flex items-center font-bold pl-2 text-2xl">INOLIB</h3>
            </div>
            <p class="border-t-2 border-[#9A35AD] font-bold mb-6 pt-3 md:border-t-0">Des questions?</p>
            <h3 class="font-bold mb-3 text-2xl">Contactez-nous!</h3>
            <p class="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, magnam accusamus dolores soluta deserunt
              nesciunt, molestiae, architecto velit ex doloremque voluptatum eos itaque veritatis quas.
            </p>
            <a
              class="items-center bg-white flex cursor-pointer drop-shadow-md h-10 justify-center mb-8 rounded-md text-[#0b3168] w-100% lg:w-36"
              href="/contact"
            >
              Nous contacter
            </a>
          </div>
        </section>

        <section class="md:border-l-2 md:grid md:grid-rows-1 md:grid-cols-1 md:pl-10 md:w-1/4">
          <ul class="border-y-2 border-[#9A35AD] flex justify-between py-8 md:border-y-0 md:items-center md:columns-1 md:py-0 md:row-start-1 ">
            <li>
              <a href="#">
                <img alt="facebook INOLIB" src="\images\logo-facebook-violet.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img alt="twitter INOLIB" src="\images\logo-twiter.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img alt="LinkedIn INOLIB" src="\images\logo-linkedin.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img alt="instagram INOLIB" src="\images\logo-instagram.svg"></img>
              </a>
            </li>
          </ul>
          <p class="mt-8 md:items-end md:columns-1 md:row-start-">© 2023 Inolib</p>
        </section>
      </section>
    </footer>
  );
});
