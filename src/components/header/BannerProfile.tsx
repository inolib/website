import { component$ } from "@builder.io/qwik";

type BannerProps = {
  imageSrc?: string;
  title: string;
  styles?: string;
};

export const BannerProfile = component$((props: BannerProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  return (
    <header
      class={`bg-gradient-to-b from-[#5A0C69] flex flex-col w-screen ${styles} justify-center items-center to-[#0F3069] text-white md:h-[27rem] md:mb-28`}
      role="banner"
      id="header"
    >
      <img class={`w-[20rem] h-[20rem]`} src={props.imageSrc} alt="" />
      <h1 class={`text-white text-3xl text-center -mt-10 mb-10`}>{props.title}</h1>
      <span class="flex justify-center py-8 text-sm md:text-base">
        <a aria-label="Mot de passe" href="#Formation">
          <p class="px-2 md:px-5">Mes informations</p>
        </a>
        <a aria-label="Mes documents" href="#Developpement">
          <p class="px-2 border-l-2 md:px-5">Mot de passe</p>
        </a>
        <a aria-label="Mes QCM" href="#Developpement">
          <p class="px-2 border-l-2 md:px-5">Mes documents</p>
        </a>
        <a aria-label="Mes QCM" href="#Developpement">
          <p class="px-2 border-l-2 md:px-5">QCM</p>
        </a>
      </span>
    </header>
  );
});
