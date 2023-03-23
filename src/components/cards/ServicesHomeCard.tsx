import { component$, Slot } from "@builder.io/qwik";

type CardProps = {
  image?: string;
  label?: string;
  styles?: string;
};

export const ServicesHomeCard = component$((props: CardProps) => {
  return (
    <>
      <article aria-label="articles" class={`mx-5 mt-5 flex shadow-xl md:flex-col`}>
        <span
          class={`flex h-[full] w-[8rem] items-center justify-center bg-[url(/images/bg-cards.png)] bg-no-repeat md:h-[15rem] md:w-[17.5rem] md:flex-col`}
        >
          <img class="md:mb-[3rem]" src={props.image} alt="" />
        </span>
        <span
          class={`flex h-[6rem] w-[14rem] items-center justify-center md:h-[25rem] md:w-[17.5rem] md:flex-col md:px-4 md:pb-[10rem] md:shadow-xl`}
        >
          <h3 class={`ml-[5rem] text-xl font-semibold text-[#0B3168] md:my-5 md:ml-[0rem] md:text-2xl`}>
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
