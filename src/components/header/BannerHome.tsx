import { component$ } from "@builder.io/qwik";

export const BannerHome = component$(() => {
  return (
    <header class="overflow-x-auto">
      <section class="flex flex-col md:flex-row justify-center md:justify-start md:items-center h-[30rem] md:h-[40rem] bg-gradient-to-b from-[#5A0C69] to-[#0F3069] md:bg-[url('/images/accueil-1.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="flex flex-col ml-4 md:ml-[4rem]">
          <div class="md:flex items-center">
            <img class="h-32 w-auto mr-1 md:h-40 md:mr-2" alt="INOLIB" src="/images/inolibblancvf.svg" />
            <h1 class="flex w-[50%] md:w-[55%] flex-col pt-3 border-t text-[120%] md:border-l md:border-t-0 font-semibold text-white md:pl-3 md:text-[200%]">
              Votre allié en accessibilité numérique et solutions digitales
            </h1>
          </div>
          <p class="w-[75%] text-white md:text-[150%] pt-4 md:pt-0 text-lg">
            Ensemble, rendons le numérique accessible à tous
          </p>
        </div>
        <div class={`m-[7rem] flex justify-center`}>
          <img class={`scale-[1.4] md:hidden`} src="/images/vector-23.svg" alt="" />
        </div>
        {/* <div class="hidden md:block">
          <div class="flex justify-center  md:-mt-[8rem]">
            <Button
              color="white"
              href="/presentation"
              label="Découvrir"
              styles="flex font-medium justify-center w-[20rem] md:block md:w-[10rem]"
            />
          </div>
        </div> */}
      </section>
      <section class="flex justify-around md:mt-[1rem]" aria-label="Nos partenaire">
        <a href="https://h-up.fr/" aria-label="HUP">
          <img
            alt="HUP"
            class="h-[5rem] w-[5rem] md:ml-[20rem] md:h-[10rem] md:w-[10rem]"
            src="/images/logo-hup-violet.svg"
          />
        </a>
        <a href="https://www.fidev.asso.fr/" aria-label="FIDEV">
          <img alt="FIDEV" class="h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem]" src="/images/logo-fidev-violet.svg" />
        </a>
        <a href="https://www.apside.com/" aria-label="APSIDE">
          <img
            alt="Apside"
            class="h-[5rem] w-[5rem] md:mr-[20rem] md:h-[10rem] md:w-[10rem]"
            src="/images/logo-apside-violet.svg"
          />
        </a>
      </section>
    </header>
  );
});
