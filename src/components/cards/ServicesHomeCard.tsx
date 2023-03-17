import { component$, Slot, useStore, $, useOnWindow } from "@builder.io/qwik";

type CardProps = {
  image?: string;
  label?: string;
  styles?: string;
};

export const ServicesHomeCard = component$((props: CardProps) => {
  return (
    <>
      <article aria-label="articles" class={`shadow-xl flex md:flex-col mt-5 mx-5`}>
        <span
          class={`flex md:flex-col justify-center items-center bg-no-repeat bg-[url(/images/bg-cards.png)] md:h-[15rem] md:w-[17.5rem] h-[full] w-[8rem]`}
        >
          <img class="md:mb-[3rem]" src={props.image} alt="" />
        </span>
        <span
          class={`flex md:flex-col items-center justify-center md:shadow-xl md:pb-[10rem] md:px-4 md:h-[25rem] md:w-[17.5rem] w-[14rem] h-[6rem]`}
        >
          <h3 class={`text-[#0B3168] ml-[5rem] md:ml-[0rem] font-semibold md:my-5 md:text-2xl text-xl`}>
            {props.label}
          </h3>
          <span class={"invisible md:visible"}>
            <Slot name="content" />
          </span>
        </span>
      </article>
    </>
  );
});
