import { component$, Slot } from "@builder.io/qwik";

type BannerProps = {
  content: string;
  imageSrc: string;
  title: string;
};

export const Banner = component$((props: BannerProps) => {
  return (
    <header
      class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 md:h-[60vh] md:flex md:px-28 md:items-center md:relative md:mb-28"
      role="banner"
      id="header"
    >
      <img class="md:mt-48" src={props.imageSrc} />
      <div class="ml-[5vw]">
        <h1 class="font-semibold mb-5 text-3xl md:text-5xl max-w-sm">{props.title}</h1>
        <p class=" max-w-md">{props.content}</p>
        <Slot name="services" />
      </div>
    </header>
  );
});
