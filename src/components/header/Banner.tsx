import { component$, Slot } from "@builder.io/qwik";

type BannerProps = {
  content?: string;
  imageSrc?: string;
  styles?: string;
  title: string;
};

export const Banner = component$((props: BannerProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  return (
    <header
      class={`bg-gradient-to-b from-[#5A0C69] ${styles} to-[#0F3069] p-4 text-white md:relative md:mb-28 md:flex md:h-[27rem] md:items-center md:px-28`}
      role="banner"
      id="header"
    >
      <img class={`md:mt-48`} src={props.imageSrc} alt="" />
      <div class="md:ml-[5rem]">
        <h1 class="my-7 max-w-sm text-3xl font-semibold md:mb-5 md:mt-0 md:text-5xl">{props.title}</h1>
        <p class="mb-3 max-w-md text-justify md:mb-0 md:text-left">{props.content}</p>
        <Slot name="services" />
      </div>
    </header>
  );
});
