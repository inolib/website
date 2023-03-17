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
        class="mt-[4rem] h-[42rem] bg-gradient-to-b from-[#5A0C69] to-[#0F3069] bg-[length:100vw_50vh] bg-no-repeat"
      >
        <span class="-z-1 flex flex-col ">
          <span class="ml-[8rem] md:mt-[4.5rem] flex w-[35rem] flex-col">
            <h3 class="pb-[2rem] text-4xl text-white">{props.title}</h3>
            <blockquote class="max-w-lg text-2xl text-white">{props.quote}</blockquote>
          </span>
        </span>
        <span class="flex flex-row-reverse pr-[10rem]">
          <img class={`-mt-[5.5rem] h-[27rem]`} src={props.src} alt="" />
          <span class="mr-[3rem] mt-5 flex flex-col font-normal">
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
