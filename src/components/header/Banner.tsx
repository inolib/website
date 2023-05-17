import { component$, Slot } from "@builder.io/qwik";

type BannerProps = {
  content?: string;
  imageSrc?: string;
  imageStyle?: string;
  styles?: string;
  title: string;
};

export const Banner = component$((props: BannerProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  const imageStyle = props.imageStyle !== undefined ? props.imageStyle : "";

  return (
    <header
      class={`bg-gradient-to-b from-[#5A0C69] ${styles} to-[#0F3069] p-4 text-white md:relative md:mb-28 md:flex md:h-[21rem] md:items-center md:px-28`}
      role="banner"
      id="header"
    >
      <img class={`md:mt-56 md:mb-12 ${imageStyle}`} src={props.imageSrc} alt="" />
      <div class="md:ml-[5rem]">
        <h1 class="my-7 max-w-sm text-3xl font-semibold md:mb-5 md:mt-0 md:text-3xl">{props.title}</h1>
        <p class="text-sm mb-3 max-w-md text-justify leading-7 md:mb-0 md:text-left">{props.content}</p>
        <Slot name="services" />
      </div>
    </header>
  );
});
