import { component$ } from "@builder.io/qwik";

type BannerProps = {
  content?: string;
  quote: string;
  src: string;
  title: string;
  id?: string;
};

export const Banner3 = component$((props: BannerProps) => {
  return (
    <>
      <section
        aria-label="Développement"
        class="h-[26rem] bg-gradient-to-b from-[#5A0C69] to-[#0F3069]  bg-no-repeat"
        id={props.id}
      >
        <span class="flex flex-col md:w-1/2 ">
          <span class="py-5 px-5 flex flex-col md:ml-[8rem] md:mt-[4rem] md:px-0 md:py-0">
            <h3 class="text-4xl text-white pb-[2rem]">{props.title}</h3>
            <p class="text-l  text-white">{props.content}</p>
          </span>
        </span>
        <span class="w-[100vw] md:pr-[7rem] md:flex md:flex-row-reverse">
          <img class="md:-mt-[10rem] md:h-[25rem] " src={props.src} alt="" />
        </span>
      </section>
    </>
  );
});
