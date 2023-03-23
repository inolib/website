import { component$, Slot } from "@builder.io/qwik";
import { Button } from "../ui/buttons/Button";

type BannerProps = {
  content?: string;
  quote: string;
  src: string;
  styles?: string;
  title: string;
};

export const Banner2 = component$((props: BannerProps) => {
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <span class={`${styles}`}>
      <section
        aria-label="témoignage"
        class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] bg-[length:100vw_50vh] bg-no-repeat h-[42rem] mt-[4rem]"
      >
        <span class="-z-1 flex flex-col ">
          <span class="flex flex-col ml-[8rem] md:mt-[4.5rem] w-[35rem]">
            <h3 class="pb-[2rem] text-4xl text-white">{props.title}</h3>
            <blockquote class="max-w-lg text-2xl text-white">{props.quote}</blockquote>
          </span>
        </span>
        <span class="flex flex-row-reverse pr-[10rem]">
          <img class={`h-[27rem] -mt-[5.5rem]`} src={props.src} alt="" />
          <span class="flex-col font-normal mr-[3rem] mt-5 flex">
            <Slot name="content" />
          </span>
        </span>
        <span class={`ml-[10rem]`}>
          <Button color="blue" href="/temoignages" label="Découvrir" />
        </span>
      </section>
    </span>
  );
});
