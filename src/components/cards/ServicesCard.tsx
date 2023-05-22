import { component$, Slot } from "@builder.io/qwik";

type CardProps = {
  image?: string;
  label?: string;
  styles?: string;
  title?: string;
};

export const ServicesCard = component$((props: CardProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  return (
    <>
      <article aria-label="articles" class={`flex flex-col ${styles} pb-10 md:pb-0`}>
        <div
          class={`flex h-[18rem] flex-col items-center justify-center bg-[url(/images/bg-cards.png)] bg-[length:110rem_30rem] bg-no-repeat md:w-[22.5rem] md:bg-[length:110rem_40rem]`}
        >
          <img class="-mt-[5rem]" src={props.image} alt="" />
          <h2 class=" -mt-[5rem] text-center text-2xl font-normal text-white">{props.title}</h2>
        </div>
        <div class={`items-top flex h-[30rem] flex-col justify-start px-4 py-5 shadow-xl md:w-[22.5rem]`}>
          <Slot name="services" />
          <h3 class="my-5 text-2xl font-semibold text-[#0B3168]">{props.label}</h3>
          <Slot name="content" />
          <Slot name="button" />
        </div>
      </article>
    </>
  );
});
