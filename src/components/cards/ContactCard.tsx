import { component$ } from "@builder.io/qwik";

export const ContactCard = component$(() => {
  return (
    <section class="relative flex bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white md:w-1/3 md:flex-col">
      <div class="p-10">
        <p class="m-6 text-center text-xl">
          Une information ?<br />
          Un devis ?
        </p>
        <p class="mb-5 md:mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est
          eleifend va lucum.
        </p>
        <div class="mb-4 md:hidden">
          <p>Appelez-nous!</p>
          <p>06 70 86 50 32</p>
        </div>
        <div class="hidden md:block md:mb-6">
          <div class="flex">
            <img alt="" src="\images\icon-phone.svg" />
            <a href="tel:+33670865032" class="pl-3">
              06 70 86 50 32
            </a>
          </div>
        </div>
        <div class="mb-4 md:hidden">
          <p>Contactez-nous!</p>
          <p>contact@inolib.com</p>
        </div>
        <div class="hidden md:block mb-4 md:mb-6">
          <div class="flex">
            <img alt="" src="\images\icon-mail.svg" />
            <a href="mailto:contact@inolib.com" class="pl-3">
              contact@inolib.com
            </a>
          </div>
        </div>

        <ul
          class="mb-4 flex justify-between  md:mb-0 md:w-2/3 md:items-center md:border-y-0"
          aria-label="liste des reseau sociaux d'Inolib"
        >
          <li>
            <a href="https://www.facebook.com/people/Inolib/100075572787282/" aria-label="Facebook d'Inolib">
              <img alt="" class="scale-50" src="\images\logo-facebook-violet.svg"></img>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/_inolib" aria-label="Twitter d'Inolib">
              <img alt="" class="scale-50" src="\images\logo-twiter.svg"></img>
            </a>
          </li>
          <li>
            <a href="#" aria-label="https://www.linkedin.com/company/inolib/?originalSubdomain=fr">
              <img alt="" class="scale-50" src="\images\logo-linkedin.svg"></img>
            </a>
          </li>
          <li>
            <a href="#" aria-label="l'Instagram d'Inolib">
              <img alt="" class="scale-50" src="\images\logo-instagram.svg"></img>
            </a>
          </li>
        </ul>
      </div>
      <img
        alt=""
        class="absolute bottom-0 right-0 hidden h-auto w-1/5 md:block md:w-3/5"
        src="\images\background-card.svg"
      />
    </section>
  );
});
