import { component$, Slot } from "@builder.io/qwik";

type CardProps = {
  image?: string;
  label?: string;
  styles?: string;
};

export const ServicesHomeCard = component$((props: CardProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  return (
    <>
      <div class={`mx-5 my-3 flex shadow-xl md:flex-col`}>
        <span
          class={`flex h-[full] w-[8rem] items-center justify-center bg-[url(/images/bg-cards.png)] bg-no-repeat md:h-[15rem] md:w-[17.5rem] md:flex-col`}
        >
          <img class={`scale-75 ${styles}`} src={props.image} alt="" />
        </span>
        <div
          class={`flex w-[14rem] h-[8rem] items-center justify-center text-center  md:w-[17.5rem] md:h-full md:flex-col md:px-4 md:pb-[10rem] md:shadow-xl md:justify-start`}
        >
          <h3 class={`ml-[5rem] text-xl font-semibold text-[#0B3168] md:mb-5 md:ml-[0rem] md:text-2xl`}>
            {props.label}
          </h3>
          <div class={"invisible md:visible"}>
            <Slot name="content" />
          </div>
        </div>
      </div>
    </>
  );
});
