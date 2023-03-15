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
        class="h-[40rem] bg-gradient-to-b from-[#5A0C69] to-[#0F3069] bg-[length:100vw_50vh]  bg-no-repeat"
        id={props.id}
      >
        <span class="flex flex-col -z-1 ">
          <span class="flex flex-col w-[55rem] ml-[8rem] mt-[4rem]">
            <h3 class="text-4xl text-white pb-[2rem]">{props.title}</h3>
            <p class="max-w-lg  text-white">{props.content}</p>
          </span>
        </span>
        <span class="w-[100vw] pr-[12rem] flex flex-row-reverse">
          <img class="-mt-[10rem] h-[50vh] " src={props.src} alt="" />
        </span>
      </section>
    </>
  );
});
