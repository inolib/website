import { component$ } from "@builder.io/qwik";
import { DiscoverAcessCard } from "./DiscoverAcessCard";

type ImageProps = {
  src: string;
  styles?: string;
};

export const SplitedImage = component$((props: ImageProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  return (
    <div class={`${styles}`}>
      <section class="relative flex md:mx-[6rem]">
        <img src={props.src} alt="" />
        <div class="absolute flex flex-col md:flex md:flex-row">
          <DiscoverAcessCard
            styles="md:ml-[35rem] md:mt-[5rem]"
            alt="aller vers page accessibilité"
            href="/audit"
            title="Découvrir l'accessibilité"
            content="Audit d'accessibilité numérique : de quoi s'agit-il ?"
          />
        </div>
        <img class=" hidden md:flex md:w-[40rem]" src="images/bg-cards.png" alt="" />
      </section>
    </div>
  );
});
