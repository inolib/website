import { component$ } from "@builder.io/qwik";

type ButtonTopPageProps = {
  styles?: string;
};

export const ButtonTopPage = component$((props: ButtonTopPageProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  return (
    <a
      aria-label="lien vers le haut de la page"
      class={`flex ${styles} mb-[0.2rem] mt-6 justify-center md:mt-[8rem]"transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 duration-300`}
      href="#header"
    >
      <img src="/images/icon-arrow-up.svg" alt="" />
    </a>
  );
});
