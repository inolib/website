import { component$ } from "@builder.io/qwik";
import { Navbar } from "~/header/Navbar";

export const Banner = component$(() => {
  return (
    <header>
      <Navbar />
      <section className="bg-no-repeat bg-[length:100vw_75vh] bg-[url('/images/home-banner.png')] h-[120vh]">
        <h1 className="relative flex w-[85vw] h-[57vh] pt-[15vh]">
          <img className="mr-[-9vw] w-[35%] h-[35%]" alt="INOLIB" src="/images/logo-white.svg" />
          <span className="flex flex-col border-l font-bold text-white max-w-[5vw] h-[50vh] text-[300%] pl-10">
            HUMAN NOBLE TECHNOLOGY
            <a
              className="bg-white border-[#0B3168] border-[1px] hover:border-[3px] mt-10 pl-[3vw] py-[2vh] text-[#0B3168] text-xl rounded-md ml-[10vw] w-[12vw] font-normal"
              href="/presentation"
            >
              Découvrir
            </a>
          </span>
        </h1>
        <section class="flex justify-around mt-[21vh]">
          <img class="ml-[25vw]" src="/images/logo-hup-violet.svg" alt="logo hup" />
          <img src="/images/logo-fidev-violet.svg" alt="logo hup" />
          <img class="mr-[25vw]" src="/images/logo-apside-violet.svg" alt="logo hup" />
        </section>
      </section>
    </header>
  );
});
