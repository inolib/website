import { component$ } from "@builder.io/qwik";
import { DiscoverAcessCard } from "./DiscoverAcessCard";

type ImageProps = {
  src: string;
  styles?: string;
};

export const SplitedImage = component$((props: ImageProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  return (
    <span class={`${styles}`}>
      <section class="relative flex md:mx-[10rem]">
        <img src={props.src} alt="" />
        <span class="absolute flex flex-col md:flex md:flex-row">
          <DiscoverAcessCard
            styles="md:ml-[35rem] md:mt-[5rem]"
            alt="aller vers page accessibilité"
            href="/accessibilite"
            title="Découvrir l'accessibilité"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, magnam accusamus dolores soluta deserunt
          nesciunt, molestiae, architecto velit ex doloremque voluptatum eos itaque veritatis quas odit."
          />
        </span>
        <img class=" hidden md:flex md:w-[40rem]" src="images/bg-cards.png" alt="" />
      </section>
      ;
    </span>
  );
});
