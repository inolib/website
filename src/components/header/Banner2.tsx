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
    <>
      <section
        aria-label="témoignage"
        class="mt-[10vh] h-[90vh] bg-gradient-to-b from-[#5A0C69] to-[#0F3069] bg-[length:100vw_50vh] bg-no-repeat"
      >
        <span class="-z-1 flex flex-col ">
          <span class="ml-[8vw] mt-[10vh] flex w-[35vw] flex-col">
            <h3 class="pb-[5vh] text-4xl text-white">{props.title}</h3>
            <blockquote class="max-w-lg text-2xl text-white">{props.quote}</blockquote>
          </span>
        </span>
        <span class="flex flex-row-reverse pr-[12vw]">
          <img class="-mt-[15vh] h-[60vh]" src={props.src} alt="" />
          <span class="mr-[3vw] flex flex-col font-normal">
            <Slot name="content" />
          </span>
        </span>
        <span class={`${styles}`}>
          <Button color="blue" href="/temoignages" label="Découvrir" />
        </span>
      </section>
    </>
  );
});
