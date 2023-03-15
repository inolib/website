import { component$ } from "@builder.io/qwik";
import { DiscoverAcessCard } from "./DiscoverAcessCard";

type ImageProps = {
  src: string;
};

export const SplitedImage = component$((props: ImageProps) => {
  return (
    <>
      <section class="relative mx-[10rem] flex">
        <img src={props.src} alt="" />
        <span class="absolute flex">
          <DiscoverAcessCard
            styles="ml-[35rem] mt-[5rem]"
            alt="lien vers page accessibilité"
            href="/accessibilite"
            title="Découvrir l'accessibilité"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, magnam accusamus dolores soluta deserunt
          nesciunt, molestiae, architecto velit ex doloremque voluptatum eos itaque veritatis quas odit."
          />
        </span>
        <img class=" w-[40rem]" src="images/bg-cards.png" alt="" />
      </section>
      ;
    </>
  );
});
