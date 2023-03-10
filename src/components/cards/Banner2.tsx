import { component$, Slot } from "@builder.io/qwik";
import { Button } from "../ui/buttons/Button";

export const Banner2 = component$((props: BannerProps) => {
  type BannerProps = {
    src: string;
    title: string;
    content: string;
    quote: string;
    styles?: string;
  };

  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <>
      <section
        aria-label="témoignage"
        class="h-[90vh] bg-gradient-to-b from-[#5A0C69] to-[#0F3069] bg-[length:100vw_50vh] mt-[10vh] bg-no-repeat"
      >
        <span class="flex flex-col -z-1 ">
          <span class="flex flex-col w-[35vw] ml-[8vw] mt-[10vh]">
            <h3 class="text-4xl text-white pb-[5vh]">{props.title}</h3>
            <blockquote class="max-w-lg text-2xl text-white">{props.quote}</blockquote>
          </span>
        </span>
        <span class="w-[100vw] pr-[12vw] flex flex-row-reverse">
          <img class="-mt-[15vh] h-[60vh]" src={props.src} alt="" />
          <span class="flex flex-col font-normal mr-[3vw]">
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
