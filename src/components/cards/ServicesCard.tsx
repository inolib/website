import { component$, Slot } from "@builder.io/qwik";

type CardProps = {
  image?: string;
  label?: string;
  styles?: string;
  title?: string;
};

export const ServicesCard = component$((props: CardProps) => {
  return (
    <>
      <article aria-label="articles" class={`flex flex-col`}>
        <span
          class={`flex flex-col justify-center items-center bg-no-repeat bg-[url(/images/bg-cards.png)] bg-[length:110rem_40rem] h-[18rem] w-[22.5rem]`}
        >
          <img class="-mt-[5rem]" src={props.image} alt="" />
          <h2 class=" font-normal text-center text-2xl -mt-[5rem] text-white">{props.title}</h2>
        </span>
        <span class={`flex flex-col items-top justify-start shadow-xl px-4 py-5 h-[30rem] w-[22.5rem]`}>
          <Slot name="services" />
          <h3 class="text-[#0B3168] font-semibold my-5 text-2xl">{props.label}</h3>
          <Slot name="content" />
          <Slot name="button" />
        </span>
      </article>
    </>
  );
});
