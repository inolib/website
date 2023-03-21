import { component$, Slot } from "@builder.io/qwik";
import { Button } from "../ui/buttons/Button";

type BannerProps = {
  content: string;
  imageSrc?: string;
  title: string;
  styles?: string;
};

export const Banner = component$((props: BannerProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  return (
    <header
      class={`bg-gradient-to-b from-[#5A0C69] ${styles} to-[#0F3069] text-white p-4 md:h-[27rem] md:flex md:px-28 md:items-center md:relative md:mb-28`}
      role="banner"
      id="header"
    >
      <img class={`md:mt-48`} src={props.imageSrc} alt="" />
      <div class="md:ml-[5rem]">
        <h1 class="font-semibold my-7 md:mb-5 md:mt-0 text-3xl md:text-5xl max-w-sm">{props.title}</h1>
        <p class="text-justify max-w-md mb-3 md:mb-0 md:text-left">{props.content}</p>
        <Slot name="services" />
        <span class={` md:hidden justify-center flex mt-10 mb-4`}>
          <Button color="white" href="/temoignages" label="Découvrir" />
        </span>
      </div>
    </header>
  );
});
