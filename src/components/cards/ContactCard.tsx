import { component$ } from "@builder.io/qwik";

export const ContactCard = component$(() => {
  return (
    <section class="bg-gradient-to-b flex md:flex-col from-[#5A0C69] to-[#0F3069] text-white md:w-1/3 relative">
      <div class="p-10">
        <p class="text-center text-xl m-6">
          Une information ?<br />
          Un devis ?
        </p>
        <p class="mb-5 md:mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum odio orci, id accumsan est
          eleifend va lucum.
        </p>
        <div class="flex mb-4 md:mb-6">
          <img alt="" src="\images\icon-phone.svg" />
          <p class="pl-3">06 70 86 50 32</p>
        </div>
        <div class="flex mb-4 md:mb-6">
          <img alt="" src="\images\icon-mail.svg" />
          <p class="pl-3">contact@inolib.com</p>
        </div>

        <ul
          class="flex justify-between mb-4  md:border-y-0 md:mb-0 md:items-center md:w-2/3"
          aria-label="liste des reseau sociaux d'Inolib"
        >
          <li>
            <a href="#">
              <img alt="lien vers le facebook INOLIB" class="scale-50" src="\images\logo-facebook-violet.svg"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img alt="lien vers twitter INOLIB" class="scale-50" src="\images\logo-twiter.svg"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img alt="lien vers le LinkedIn INOLIB" class="scale-50" src="\images\logo-linkedin.svg"></img>
            </a>
          </li>
          <li>
            <a href="#">
              <img alt="lien vers l'instagram INOLIB" class="scale-50" src="\images\logo-instagram.svg"></img>
            </a>
          </li>
        </ul>
      </div>
      <img
        alt=""
        class="w-1/5 hidden md:block md:w-3/5 h-auto absolute bottom-0 right-0"
        src="\images\background-card.svg"
      />
    </section>
  );
});
