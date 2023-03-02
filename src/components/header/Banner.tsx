import { component$ } from "@builder.io/qwik";
import { Navbar } from "~/header/Navbar";

export const Banner = component$(() => {
  return (
    <header>
      <Navbar />
      <section className="bg-no-repeat bg-[length:100vw_75vh] bg-[url('/images/home-banner.png')] h-[120vh]">
        <h1 className="relative flex w-[85vw] h-[57vh] pt-[15vh]">
          <img className="mr-[-10vw] w-[40%] h-[40%]" alt="INOLIB" src="/images/logo-white.svg" />
          <span className="flex flex-col border-l font-bold text-white max-w-[5vw] h-[50vh] text-[300%] pl-10">
            HUMAN NOBLE TECHNOLOGY
            <button
              className="bg-white border-[#0B3168] border-[1px] hover:border-[2px] mt-10 px-4 py-2 text-[#0B3168] text-xl rounded-md ml-[10vw] w-[10vw] font-semibold"
              href="/presentation"
            >
              Découvrir
            </button>
          </span>
        </h1>
      </section>
    </header>
  );
});
